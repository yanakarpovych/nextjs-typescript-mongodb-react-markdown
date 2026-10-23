import fs from "fs";
import matter from "gray-matter";
import path from "path";
import type { Post } from "../types/post";

type PostFrontmatter = Omit<Post, "slug" | "content">;

const postDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles(): string[] {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIdentifier: string): Post {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: Post = {
    slug: postSlug,
    ...(data as PostFrontmatter),
    content,
  };

  return postData;
}

export function getAllPosts(): Post[] {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  return allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : postA.date < postB.date ? 1 : 0,
  );
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
