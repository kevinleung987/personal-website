import { Divider, Heading, Text} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import MDXComponents from "../../components/mdx-components";
import TopButton from "../../components/top-button";
import { FrontMatter, getPostBySlug, getSlugs } from "../../lib/blog";

interface IProps {
  mdxSource: any;
  time: string;
  frontMatter: FrontMatter;
}

export default function Post({ mdxSource, time, frontMatter }: IProps) {
  return (
    <>
      <Heading fontSize="5xl">{frontMatter.title}</Heading>
      <Divider />
      <Heading fontSize="xl">{frontMatter.date} {" • "} {time}</Heading>
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
      time: post.time,
      frontMatter: post.frontMatter,
    },
  };
}
