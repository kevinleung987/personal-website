import BlogCard from "../../components/blog-card";
import { isDev } from "../../lib/util";
import { getPosts, PostData } from "./../../lib/blog";
import { Heading, Link, Text } from "@chakra-ui/react";

interface IProps {
  posts: PostData[];
}

export default function Blog(props: IProps) {
  return (
    <>
      {/* TODO: Way to filter/search posts. */}
      <Heading size="xl">Welcome to my blog!</Heading>
      <Text fontSize="xl" pt="8">
        The intended audience for this content is meant for friends and
        people who know me, but feel free to read even if this doesn't apply to you!
      </Text>
      {/* TODO: Proper disclaimer */}
      <Text fontSize="xl" pt="8">
        All opinions and views expressed in here are my own.
      </Text>
      {props.posts
        .filter((post) => {
          return isDev() || post.frontMatter.published;
        })
        .map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
    </>
  );
}

export async function getStaticProps(): Promise<{ props: IProps }> {
  return { props: { posts: getPosts() } };
}
