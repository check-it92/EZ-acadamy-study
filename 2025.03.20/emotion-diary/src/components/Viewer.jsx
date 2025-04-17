import React from "react";
import { emotionList } from "../util";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Emotion = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  &.emotion_img_1 {
    background: var(--emotion-01);
  }
  &.emotion_img_2 {
    background: var(--emotion-02);
  }
  &.emotion_img_3 {
    background: var(--emotion-03);
  }
  &.emotion_img_4 {
    background: var(--emotion-04);
  }
  &.emotion_img_5 {
    background: var(--emotion-05);
  }
`;

const Img = styled.img`
  box-shadow: 0 0 8px var(--light-color);
  border-radius: 50%;
`;

const Description = styled.div`
  font-size: 2.5rem;
  color: var(--light-color);
  text-shadow: 0 0 2px var(--light-color);
`;

const ContentBg = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 4px;
  background: var(--input-color);
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const Content = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  padding: 20px;
`;

const Viewer = ({ content, emotionId }) => {
  const emotionItem = emotionList.find((it) => it.id === emotionId);

  return (
    <Wrapper>
      <Section>
        <Title>오늘의 감정</Title>
        <Emotion className={`emotion_img_${emotionId}`}>
          <Img src={emotionItem.img} alt={emotionItem.name} />
          <Description>{emotionItem.name}</Description>
        </Emotion>
      </Section>
      <Section>
        <Title>오늘의 일기</Title>
        <ContentBg>
          <Content>{content}</Content>
        </ContentBg>
      </Section>
    </Wrapper>
  );
};

export default Viewer;

/* 
1. 텍스트가 줄바꿔 질때 단어가 짤리지 않게
  word-break: keep-all; 단어가 쪼개지지 않게 유지 해준다.
  overflow-wrap: break-word; 전체의 글이 짤리지 않게 유지해준다.
  
*/
