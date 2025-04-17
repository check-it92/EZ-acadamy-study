import React from "react";
import PostListItem from "./PostListItem";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const PostList = ({ posts, onClickItem }) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => {
            onClickItem(post);
          }}
        />
      ))}
    </Wrapper>
  );
};

export default PostList;
