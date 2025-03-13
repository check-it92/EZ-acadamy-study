import "./App.scss";
import React, { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const textRef = useRef();
  // text'Ref'는 html(도큐먼트)로 치면 text가 해당 태그!! 쿼리셀럭터로 찾아오라는 그 역할을 담당!
  // 여기선 그역할을 useRef가 반환하는 그 역할을 한다.
  // Ref 는 우리가 html 이 없으니까 가상 돔!! 자체에서 여기 리액트 js에서 Ref가 그 html역할을 한다.
  // document.querySelector("text")  =  const textRef=쿼리셀럭터 해당태그 = useRef()=도큐먼트 가 그역할
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
      // 왜 이렇게도 쓸수 있냐? 텍스트 자체가 지금 value값을 가지고 있기 때문에 이 함수를 쓸수 있느것이다.
      // key = value가 지금 같다.
      //textRef.current.value = "";
      // 현재 입력되어지는 text의의 value 값을 빈태그로 한다.
    }
  };
  return (
    <div className="App">
      <div className="formList">
        <input
          ref={textRef}
          type="text"
          value={text}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>작성완료</button>
      </div>
    </div>
  );
}

export default App;
