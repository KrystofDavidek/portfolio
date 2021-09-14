import { FC } from "react";
import { IPost } from "../type";
import styled from "styled-components";

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

const PostContent: FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className="p-4">
      <h1 className="mt-4 mb-6 text-2xl">{post.title}</h1>
      <RichParagraph>
        <div id="rp" dangerouslySetInnerHTML={createMarkup(post.extraPostInfo?.postContent)}></div>
      </RichParagraph>
    </div>
  );
};

export default PostContent;
