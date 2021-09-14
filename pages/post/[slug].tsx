import { fetcher } from "../../lib/fetcher";
import { useRouter } from "next/router";
import { GET_ALL_POSTS_WITH_SLUG, POST_BY_SLUG } from "../../lib/wordpress/api";
import React, { FC } from "react";
import { IPost } from "../../type";
import PostContent from "../../components/PostContent";

const Post: FC<any> = ({ postData }) => {
  const blogPost: IPost = postData.data.post;
  const router = useRouter();

  if (!router.isFallback && !blogPost?.slug) {
    return <p>Problem with Router</p>;
  }
  return <div>{router.isFallback ? <div>Loading...</div> : <PostContent post={blogPost} />}</div>;
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetcher(GET_ALL_POSTS_WITH_SLUG);
  const allPosts = await response.data.posts.nodes;
  const paths = allPosts.map((post: any) => {
    return `/post/${post.slug}` || [];
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const variables = {
    id: params.slug,
    idType: "SLUG",
  };
  const data = await fetcher(POST_BY_SLUG, { variables });

  return { props: { postData: data } };
};
