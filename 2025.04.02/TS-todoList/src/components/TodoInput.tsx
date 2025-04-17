import { useState, useContext } from "react";
import styled from "styled-components";
import Title from "./Title";
import TextInput from "./TextInput";
import Button from "./Button";
import { ToDoListContext } from "../context/TodoListContextProvider";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const Contents = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-color);
  padding: 32px;
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

interface Props {
  readonly onClose: () => void;
}

const TodoInput = ({ onClose }: Props) => {
  const { onAdd } = useContext(ToDoListContext);
  const [toDo, setTodo] = useState("");

  const onAddTodo = () => {
    if (toDo === "") return; // 빈문자열과 같다면 다시 반환해라 라는 뜻

    onAdd(toDo); //입력값을 넣은뒤 버튼을 누르면 목록에 입력값이 추가가 된다.
    setTodo(""); //값을 전달 한뒤 다시 공란으로 만드는 preventdefault 역할을 하는 것이다.
    onClose();
  };

  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <InputContainer>
          <TextInput value={toDo} onChange={setTodo} />
          <Button label="추가" color="#304ffe" onClick={onAddTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
};

export default TodoInput;
