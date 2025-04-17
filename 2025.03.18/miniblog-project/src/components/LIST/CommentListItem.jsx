import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  border: 1px solid #ccc;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  background: var(--primary-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: #d3d3d3;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const CommentListItem = ({ comment }) => {
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
};

export default CommentListItem;
