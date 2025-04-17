import { JSX, useState, createContext } from "react";

// 초기에 대한 타입설정
interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

// 함수의 초기값 설정
const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}
// 이터러블한 객체의 배열로 자식요소들에게 전달이 될수 있도록

const mokData = ["React 공부하기", "운동하기", "책읽기"];

// 자식요소에게 전달할 수있도록 하는 기능
const TodoListContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState(mokData);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };

  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, TodoListContextProvider };

// 값을 전달할 준비 완료 (멀티 탭 기능) 이 하나로 여러 가지 함수와 기능을 대입만 해서 쓰면 된다.
// useContext 를 활용하여 인자값으로 이 파일을 넣으면된다.