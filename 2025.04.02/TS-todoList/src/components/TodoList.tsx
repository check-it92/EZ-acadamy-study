import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { ToDoListContext } from "../context/TodoListContextProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

/*
interface Props {
  // toDoList: string[]; 이 방법도 있지만 다른 숫자열도 들어갈수 있기 때문에
  readonly toDoList: Array<string>; // 문자열을 가지고 있는 배열이야 <>제니릭을 썼음
  readonly onDelete?: (todo: string) => void; // 어떠한 todo의 인자값을 받아야함
}
*/

const TodoList = () => {
  const {toDoList, onDelete} = useContext(ToDoListContext); // 값 대체가 된것!
  return (
    <Container>
      {toDoList.map((todo) => (
        <TodoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(todo); // 타입가드(처리조항)
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
