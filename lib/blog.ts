import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

export interface PostData {
  slug: string;
  time: string;
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

const POSTS_DIR = "posts";

const updateCache = () => {
  const files = fs.readdirSync(path.join(process.cwd(), POSTS_DIR));
  cache = files.map((fileName) => {
    const filePath = path.join(process.cwd(), POSTS_DIR, fileName);
    const slug = fileName.replace(/\.mdx/, "");
    const source = fs.readFileSync(filePath);
    // TODO: Validate all fields are present.
    const { data, content } = matter(source);
    const time = readingTime(content).text;
    return {
      slug,
      time,
      content,
      frontMatter: data as FrontMatter,
    };
  }).sort((a, b) => {
    const aDate = new Date(a.frontMatter.date);
    const bDate = new Date(b.frontMatter.date);
    return bDate.getTime() - aDate.getTime();
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
