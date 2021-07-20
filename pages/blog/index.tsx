import BlogCard from "../../components/blog-card";
import { isDev } from "../../lib/util";
import { getPosts, PostData } from "./../../lib/blog";

interface IProps {
  posts: PostData[];
}

export default function Blog(props: IProps) {
  return (
    <>
    {/* TODO: Title and way to filter/search posts. */}
      {props.posts
        .filter((post) => {
          if (isDev()) {
            return true;
          }
          return post.frontMatter.published;
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
