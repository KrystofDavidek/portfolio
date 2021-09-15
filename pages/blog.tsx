import { fetcher } from "../lib/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
import Link from "next/link";
import { FC } from "react";
import { IPost } from "../type";

const blog: FC<{ allPosts: IPost[] }> = ({ allPosts }) => {
  const posts = allPosts;
  if (posts.length === 0) {
    return (
      <div className="flex flex-col p-4 text-center">
        <h1 className="m-4 text-3xl">Wordpress connection is corrupted</h1>
        <Link href="/">
          <a className="my-4 text-green">Go back home</a>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4" style={{ maxHeight: "80vh" }}>
      <div className="grid grid-cols-12 gap-4">
        {posts.map((post) => (
          <div className="col-span-6 p-2 bg-gray-200 rounded-lg dark:bg-dark-200" key={post.slug}>
            <h1 className="my-4 text-2xl">{post.title}</h1>
            <p>{post.extraPostInfo?.previewInfo}</p>
            <p className="my-2">{post.date}</p>
            <Link href={`/post/${post.slug}`}>
              <a className="hover:text-green">Read More...</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blog;

export const getStaticProps = async () => {
  try {
    const response = await fetcher(ALL_POSTS);
    const allPosts = response.data.posts.nodes;
    return {
      props: { allPosts },
      revalidate: 1,
    };
  } catch (error) {
    console.error("Wordpress connection is corrupted! Error: " + error);
    const allPosts: never[] = [];
    return {
      props: { allPosts },
      revalidate: 1,
    };
  }
};
