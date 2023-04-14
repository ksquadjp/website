import fs from "fs-extra";
import Parser from "rss-parser";
import * as cheerio from "cheerio";
import { members } from "./members";
import { createHash } from "crypto";
import type { PostItem, Member, FeedItem } from "@types";

function isValidUrl(str: string): boolean {
  try {
    const { protocol } = new URL(str);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

const parser = new Parser();
let allPostItems: PostItem[] = [];

async function fetchFeedItems(url: string) {
  const feed = await parser.parseURL(url);
  if (!feed?.items?.length) return [];

  // return item which has title and link
  return feed.items
    .map(({ title, contentSnippet, link, isoDate }) => {
      return {
        title,
        contentSnippet: contentSnippet?.replace(/\n/g, ""),
        link,
        isoDate,
        dateMiliSeconds: isoDate ? new Date(isoDate).getTime() : 0,
      };
    })
    .filter(({ title, link }) => title && link && isValidUrl(link)) as FeedItem[];
}

async function fetchOGP(url: string) {
  const ogpImageUrl = await fetch(url)
    .then((response) => response.text())
    .then((body) => {
      const $ = cheerio.load(body);
      return $('meta[property="og:image"]').attr("content");
    });

  const fileName = "/ogp_images/" + createHash("md5").update(url).digest("hex") + ".png";
  if (ogpImageUrl != null) {
    await fetch(ogpImageUrl)
      .then((res) => res.arrayBuffer())
      .then((res) => Buffer.from(res))
      .then((buf) => {
        fs.writeFileSync("public" + fileName, buf);
      });
    return fileName;
  }
  return null;
}

async function getFeedItemsFromSources(sources: undefined | string[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const url of sources) {
    const items = await fetchFeedItems(url);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getMemberFeedItems(member: Member): Promise<PostItem[]> {
  const { id, sources, name, includeUrlRegex, excludeUrlRegex } = member;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  let postItems = await Promise.all(
    feedItems.map(async (item) => {
      const ogpFileName = await fetchOGP(item.link);
      return {
        ...item,
        ogpPath: ogpFileName || "",
        authorName: name,
        authorId: id,
      };
    })
  );
  // remove items which not matches includeUrlRegex
  if (includeUrlRegex) {
    postItems = postItems.filter((item) => {
      return item.link.match(new RegExp(includeUrlRegex));
    });
  }
  // remove items which matches excludeUrlRegex
  if (excludeUrlRegex) {
    postItems = postItems.filter((item) => {
      return !item.link.match(new RegExp(excludeUrlRegex));
    });
  }

  return postItems;
}

(async function () {
  console.log("rss-feeds collecting script starts");
  fs.ensureDirSync(".contents");
  fs.ensureDirSync("public/ogp_images"); // 下でogp画像の保存を行うので、先にmkdirしておく。
  for (const member of members) {
    const items = await getMemberFeedItems(member);
    if (items) allPostItems = [...allPostItems, ...items];
  }
  allPostItems.sort((a, b) => b.dateMiliSeconds - a.dateMiliSeconds);
  fs.writeJsonSync(".contents/posts.json", allPostItems);
})();
