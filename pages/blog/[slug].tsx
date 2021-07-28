import { Divider, Heading } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import MDXComponents from "../../components/mdx-components";
import TopButton from "../../components/top-button";
import { FrontMatter, getPostBySlug, getSlugs } from "../../lib/blog";

interface IProps {
  mdxSource: any;
  readingTime: string;
  frontMatter: FrontMatter;
}

export default function Post({ mdxSource, readingTime, frontMatter }: IProps) {
  return (
    <>
      <Heading fontSize="6xl">{frontMatter.title}</Heading>
      <Heading fontSize="xl">Published: {frontMatter.date}</Heading>
      <Heading fontSize="xl">Reading Time: {readingTime}</Heading>
      <Heading fontSize="3xl" py="6">
        {frontMatter.description}
      </Heading>
      <Divider />
      <MDXRemote {...mdxSource} components={MDXComponents} />
      <TopButton />
    </>
  );
}

export async function getStaticPaths() {
  // TODO: Investigate further. https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
  return {
    fallback: false,
    paths: getSlugs().map((slug) => ({
      params: {
        slug,
      },
    })),
  };
}

export async function getStaticProps({
  params,
}: {
  params: any;
}): Promise<{ props: IProps }> {
  const post = getPostBySlug(params.slug);
  if (post == null) {
    throw new Error();
  }

  // remark-slug: Adds IDs to every heading.
  // remark-toc: Creates Table of contents TODO: Create own?
  // mdx-prism + remark-code-titles: Creates code blocks with syntax highlighting and title of file.
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-code-titles"),
        require("remark-toc"),
      ],
      rehypePlugins: [require("mdx-prism")],
    },
  });
  return {
    props: {
      mdxSource,
      readingTime: post.readingTime,
      frontMatter: post.frontMatter,
    },
  };
}
