import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const blogPostsDirectory = join(process.cwd(), "_posts")

const newsPostsDirectory = join(process.cwd(), "_news")

export function getBlogPostSlugs() {
  return fs.readdirSync(blogPostsDirectory)
}

export function getNewsPostSlugs() {
  return fs.readdirSync(newsPostsDirectory)
}

enum PostType {
  Blog = 0,
  News = 1,
}

export function getPostBySlug(slug: string, fields: string[] = [], postType: PostType = 0) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postType == 0 ? blogPostsDirectory : newsPostsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = [], postType: PostType = 0) {
  const slugs = postType == 0 ? getBlogPostSlugs() : getNewsPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, postType))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
