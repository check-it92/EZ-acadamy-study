/*
const Body = ({ name, location, favorList = [] }) => {
  // 함수이름 =[ ] => 기본매개변수에 값이 들어오지 않았을때 부여하는 방법
  return (
    <div>
      {name}는 {location}에 거주합니다.
      <br />
      {favorList.length} 개의 음식을 좋아합니다.
    </div>
  );
};

// *다른 방법 빈배열의 함수를 부르는 법
// Body.defaultProps = {
//   favorList: [],
// };

export default Body;
*/
// 사용자가 입력한 값을 동적으로 관리하기 위해 useState 를 쓰게 된다. 구조분해할당으로 시작한다.[]
// useState 를 여러번 반복할 필요없이
// state를 객체 구조화 해서 그안에 생성자 재할당으로 기입하면 된다.
// 이때 안에 들어가는 객체들을 전개연산자로 나열하고 (배열형식이라) 그안에서 key, value 를 잘 구분해서 써야한다.

import React, { useState } from "react";
import "./Body.css";

const Body = () => {
  const [state, setState] = useState({
    name: "",
    sex: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="wrapper">
      <select name="sex" value={state.sex} onChange={handleOnChange}>
        <option key={"여성"}>여성</option>
        <option key={"남성"}>남성</option>
      </select>
      <input
        name="birth"
        type="date"
        value={state.bio}
        onChange={handleOnChange}
      />
      <input
        name="name"
        type="text"
        value={state.name}
        onChange={handleOnChange}
      />
      <textarea
        name="bio"
        value={state.bio}
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
  // 절대로 충돌이 일어나므로 함수 ()선언을 이렇게 부르면 안된다.
  // 이제 새로고침해도 완성 데이터 안옴 함수선언
};

export default Body;

/* 동적인 구조
<h2>{count}</h2>
<button onClick={onIncrease}>+</button>
*/

/*
<>
<div>{children}</div>
<button name="A버튼" onClick={handleClick}>
  A버튼
</button>
<button name="B버튼" onClick={handleClick}>
  B버튼
</button>
<button onClick={handleClick}>클릭하세요!</button>
</>
*/
