/*
const Body = () => {
  const num = 19;
  // 식은 jsx 문법에서 사용이 가능하나, 문은 jsx 문법에서 사용이 불가하다.
  if (num % 2 === 0) {
    return <div>{num}은 짝수입니다.</div>;
  } else {
    return (
      <div style={{ background: "#f00", color: "#fff" }}>
        {num}은 홀수입니다.
      </div>
    );
  }
};

export default Body;

// 스타일 구문은 내부스타일 처럼 쓰되 객체의 형식으로 작성해야 하기 때문에
// {{ 안에 작성되어야 한다. }}
*/
import React from "react";
import "./Body.css";

const Body = ({ name }) => {
  console.log(name);
  return (
    <>
      {/* <h1 className="body">Body</h1> */}
      {/* <h1 id="test">ID Value</h1> */}
      <h1>Body</h1>
    </>
  );
};
// 노드클래스 네임 불러오듯이 자바스크립트에서 처럼
// className 로 부여하고 컴포넌트를 찾아오면 된다.
// 이래서 구조분해할당 식으로 우리 매개변수값을 불러올 수 있다.
// props 객체 활용을 잘해야 한다.

export default Body;
