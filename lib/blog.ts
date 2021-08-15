import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

export interface PostData {
  slug: string;
  readingTime: string;
  content: any;
  frontMatter: FrontMatter;
}

export interface FrontMatter {
  title: string;
  description: string;
  // TODO: Parse into Date.
  date: string;
  published: boolean;
  tags: string[];
}

const updateCache = () => {
  const postFiles = fs.readdirSync(path.join(process.cwd(), "posts"));
  cache = postFiles.map((fileName) => {
    const filePath = path.join(process.cwd(), "posts", fileName);
    const slug = fileName.replace(/\.mdx/, "");
    const source = fs.readFileSync(filePath);
    // TODO: Validate all fields are present.
    const { data, content } = matter(source);
    const time = readingTime(content).text;
    return {
      slug,
      readingTime: time,
      content,
      frontMatter: data as FrontMatter,
    };
  });
};

let cache: PostData[] = [];
updateCache();

export const getPosts = (): PostData[] => {
  return cache;
};

export const getPostBySlug = (slug: string) => {
  updateCache();
  const post = cache.find((data) => data.slug === slug);
  return post;
};

export const getSlugs = () => {
  return cache.map((post) => post.slug);
};
