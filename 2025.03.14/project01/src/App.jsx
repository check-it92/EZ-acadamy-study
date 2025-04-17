import React, {
  useState,
  useRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import "./App.scss";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
// import TestComp from "./components/TestComp";

/* State Function : 상태변화를 처리해주는 곳*/
const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    case "ALLDELETE": {
      return state.filter((item) => !action.selectedIds.includes(item.id));
    }
    default:
      return state;
  }
};

/* Mockup Date = 예시데이터 */
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React",
    created: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Typescript",
    created: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Node.js",
    created: new Date().getTime(),
  },
];

/* Context obj = API Component*/
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  //컴포넌트의 역할을 하면서컨텐츠를 하나로 묶어놓고 쓸수있으며 자기만의 속성과 메서드함수를 쓸수 있다
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  // todo 가 현재 배열형태로 되어있는 것이다.
  const idRef = useRef(3);

  // const onCreate = (content) => {
  //   const newItem = {
  //     id: idRef.current,
  //     isDone: false,
  //     // 객체에서는 content: content, key 값과 value 값이 동일하면 축약어로 써도 된다.
  //     content,
  //     created: new Date().getTime(),
  //   };
  //   setTodo([newItem, ...todo]);
  //   // 기존의 객체(todo)에 ...전개연산자 구문만 추가 한것!
  //   // 배열로 입력을 해줘야 다수로 입력이 된다.
  //   idRef.current += 1;
  //   // 복합대입연산자로 하나씩 추가 될 수 있게끔 현재 id값에서서
  // };

  // const onUpdate = (targetId) => {
  //   setTodo((prev) =>
  //     prev.map((it) => {
  //       if (it.id === targetId) {
  //         return { ...it, isDone: !it.isDone };
  //       } else {
  //         return it;
  //       }
  //     })
  //   );
  // };

  // const onDelete = (targetId) => {
  //   setTodo(todo.filter((it) => it.id !== targetId));
  // };

  // const onDeleteMultiple = (ids) => {
  //   setTodo(todo.filter((item) => !ids.includes(item.id)));
  // };

  const onCreate = useCallback((content) => {
    dispatch({
      // 1단계 액션개체를 받는다. (type: 해당객체)
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        created: new Date().getTime(),
      },
    });
    idRef.current += 1;
  }, []); // 의존성배열이 빈값으로 존재 => 영향을 받지 않는다.

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []); // 의존성배열이 빈값으로 존재 => 영향을 받지 않는다.

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const onDeleteMultiple = useCallback((selectedIds) => {
    dispatch({
      type: "ALLDELETE",
      selectedIds,
    });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete, onDeleteMultiple };
  }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
