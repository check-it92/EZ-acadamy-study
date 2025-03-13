import "./App.scss";
import React, { useState, useRef, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controler from "./components/Controler";
import Even from "./components/Even";

function App() {
  // 부모요소에서 해당 공통된 state 와 Setstate / 해당함수를 호출 후 자식요소에 props를 확인해주면 된다. 상속이 되었기 때문
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // useEffect(() => {
  //   console.log("업데이트 : ", count, text);
  // }, [count, text]);
  // 의존성배열을 쓰지 않는다면 컴포넌트가 업데이트 될때만 쓰인다.

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []);
  // []기입x 의존성배열을 만들지 않았을때 컴포넌트 마운트 + 업데이트 되는 시점 모두가 반응한다.
  // []기입o 아이템x 하지만 의존성배열을 만들어 넣고 값을 부여하지 않으면 마운트 되는 시점만 반응한다.

  // unmount 단계 : clean-up 를 한뒤 기존에 나오던 정보를 유지를 끊고 업데이트 후 새로운 마운트를 유지하는것
  // 계속해서 메모리가 새어나가고 있는것(메모리누수) 그걸 방지하기 위해 unmount를 해야한다.
  // 하지 않으면 업데이트는 계속되고 기존 정보를 유지하면서 메모리 가 늘어난다.
  // return () => {} : 언마운트 함수 

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    // 클린업함수
    return () => {
      console.log("클린업 !");
      clearInterval(intervalId);
    };
  });
  // 의존성배열 o 아이템 x : clean-up 함수 사용 => 이 시점이 언마운트(unmount)시점이다.
  //

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {/* // key 와 value로 구분이 된다. */}
        {count % 2 === 0 && <Even />}
        {/* // 이 구문을 "단락회로평가" 라 한다.
        // 정식표현은 "and 단락회로평가" 라고 도 한다. 
        // 좌항이 참이면 우항을 실행! 그게 아니면 NO실행(홀수는 뜨지 않는다.)
        // 홀수 일때 뜨지 않는게 unmount 단계인 것이다.*/}
      </section>
      <section>
        <Controler handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
