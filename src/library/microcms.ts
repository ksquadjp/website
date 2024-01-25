import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import type { Blog } from "../content/config";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type HeroImage = {
  url: string;
  height: number;
  width: number;
};

export type Post = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  heroImage: HeroImage;
};

export type PostResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Post[];
};

export const getPosts = async (endpoint: "blogs" | "news", queries?: MicroCMSQueries) => {
  return await client.get<PostResponse>({
    endpoint: endpoint,
    queries,
  });
};

export const getPostDetail = async (contentId: string, endpoint: "blogs" | "news", queries?: MicroCMSQueries) => {
  return await client.getListDetail<Post>({
    endpoint: endpoint,
    contentId,
    queries,
  });
};
