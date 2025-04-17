import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  &.win {
    border: 1px solid var(--accent-color);
    color: var(--accent-color);
  }
  &.lose {
    border: 1px solid var(--green-color);
    color: var(--green-color);
  }
  &.tie {
    border: 1px solid var(--border-color);
    color: var(--border-color);
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
`;

const Load = styled.div`
  font-size: 2.4rem;
  background: var(--border-color);
  padding: 8px 16px;
  border-radius: 8px;
  color: var(--light-color);
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Result = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  // 여기서 컴퓨터의 값을 입력받음
  if (title === "Computer" && result !== "비겼어요 🤨" && result !== "") {
    // 사용자의 기준으로 입력값을 받는다.
    // result 결과값의 반환값이 있다.
    result = result === "이겼다! 😆" ? "졌다 😣" : "이겼다! 😆";
  }

  let className = "";

  switch (result) {
    case "비겼어요 🤨":
      className = "tie";
      break;
    case "이겼다! 😆":
      className = "win";
      break;
    case "졌다 😣":
      className = "lose";
      break;
  }

  return (
    <Container className={className}>
      {/* // ? 여기서 item && item.img 앤드단락회로의 축약형 뜻은 으로 봐도 된다. ? => 값이 참으로 존재한다면 이란뜻 */}
      <Title>{title}</Title>
      {item === null ? (
        <Load>누가 이길까요? 🤓</Load>
      ) : (
        <Img src={item?.img} alt={title} />
      )}
      <Result>{result}</Result>
    </Container>
  );
};

export default Box;
