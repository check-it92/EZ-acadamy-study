import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  background: var(--light-color);
  z-index: 1;
  padding: 32px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.4rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 4px;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

interface Props {
  readonly onClose: () => void;
}

const Form = ({ onClose }: Props) => {
  // 상태관리 초기값
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const url = "https://jsonplaceholder.typicode.com/posts";

  // post 방식 : 두번째 인자값으로 객체형식으로 줄수 있다.
  // API 통신 방식에 대한 예제
  const registerPost = () => {
    if (title === "" || body === "") return;
    fetch(url, {
      method: "POST",
      headers: {
        // 대한민국 언어체계의 규정을 등록한것
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        userId: 1,
        title,
        body,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (typeof onClose === "function") onClose();
      })
      .catch((error) => console.error(error));
    // 에러도 객체이므로 에러 전용 메세지로 확인
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title>블로그 등록</Title>
        <InputGroup>
          <Label>Title :</Label>
          {/* // 인풋요소에 등록이 되면 최신으로 추가인식 되게끔 */}
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </InputGroup>
        <InputGroup>
          <Label>Body :</Label>
          <Input value={body} onChange={(e) => setBody(e.target.value)} />
          {/* // key값이 아닌 value 내용추가이기 때문에 */}
        </InputGroup>
        <Actions>
          <Button label="등록하기" onClick={registerPost} />
          {/* // onClick 이벤트로 둘다 버튼을 눌러도 닫힐수 있게끔만 기능 */}
          <Button label="닫기" color="#304ffe" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  );
};

export default Form;
