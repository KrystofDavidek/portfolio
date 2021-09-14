import styled from "styled-components";
import { fetcher } from "../lib/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
import Link from "next/link";
import { FC } from "react";
import { IPost } from "../type";

const RichParagraph = styled.div`
  #rp p {
    margin: 1rem 0 1rem 0;
  }

  #rp a {
    color: #00f260;
  }
`;

const createMarkup = (richText: string | undefined): { __html: string } => {
  if (richText) {
    return {
      __html: richText,
    };
  } else {
    return {
      __html: "",
    };
  }
};

const blog: FC<{ allPosts: IPost[] }> = ({ allPosts }) => {
  const posts = allPosts;

  return (
    <div className="p-4" style={{ maxHeight: "80vh" }}>
      <div className="grid grid-col-6">
        {posts.map((post) => (
          <div key={post.id}>
            <h1 className="text-2xl">{post.title}</h1>
            <RichParagraph>
              <div id="rp" dangerouslySetInnerHTML={createMarkup(post.extraPostInfo?.postContent)}></div>
            </RichParagraph>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blog;

export const getStaticProps = async () => {
  const response = await fetcher(ALL_POSTS);
  const allPosts = response.data.posts.nodes;

  return {
    props: { allPosts },
    revalidate: 1,
  };
};
