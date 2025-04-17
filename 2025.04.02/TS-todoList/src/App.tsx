import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import { TodoListContextProvider } from "./context/TodoListContextProvider";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  // const [toDoList, setToDoList] = useState(mokData);

  // const onDelete = (todo: string) => {
  //   setToDoList(toDoList.filter((item) => item !== todo));
  // };

  // const onAdd = (toDo: string) => {
  //   setToDoList([...toDoList, toDo]);
  // };

  return (
    <>
      <GlobalStyles />
      <Container>
        {/* context를 만듦으로써 태그별 기능들을 대입할수 호환되게 할수 있다. */}
        <TodoListContextProvider>
          <DataView />
          <InputContainer />
        </TodoListContextProvider>
      </Container>
    </>
  );
}

export default App;
