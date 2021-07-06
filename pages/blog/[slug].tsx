import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import MDXComponents from "../../components/mdx-components";
import { Heading, Text } from "@chakra-ui/react";
import readingTime from "reading-time";

interface IProps {
  mdxSource: any;
  time: string;
  frontMatter: any;
}

export default function Post({ mdxSource, time, frontMatter }: IProps) {
  return (
    <>
      <Heading fontSize="3xl">Reading Time: {time}</Heading>
      <MDXRemote {...mdxSource} components={MDXComponents} />
      {/* {frontMatter} */}
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(process.cwd(), "posts")).map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
  };
}

// TODO: Refactor into a lib.
export async function getStaticProps({
  params,
}: {
  params: any;
}): Promise<{ props: IProps }> {
  const slug: string = params.slug;
  const source = fs.readFileSync(
    path.join(process.cwd(), "posts", slug + ".mdx"),
    "utf8"
  );

  const { data, content } = matter(source);
  const time = readingTime(content).text;
  const mdxSource = await serialize(content);
  return { props: { mdxSource, time, frontMatter: data } };
}
