// import styled from "styled-components";
import { useState } from "react";
import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";

// const Container = styled.div``;

const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false); // 초기값이 안보이는 것으로

  // 타입강화 (index.tsx의 적용시키기 위해)
  const onClose = () => {
    setShowTodoInput(false);
  };

  return (
    <>
      {showTodoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton
        show={showTodoInput}
        onClick={() => setShowTodoInput(!showTodoInput)}
      />
    </>
  );
};

export default InputContainer;
