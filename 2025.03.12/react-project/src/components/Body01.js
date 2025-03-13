import React, { useState } from "react";
import "./Body.css";
import Viewer from "./Viewer";

// props(객체)로 새로운 구조분해할당 리팩토링 한것
// 길어지기 때문에 부모와 자식의 새로운 관계정립 내부에서 정립하는 버전!!
// const Viewer = ({ number }) => {
//   return <div>{number % 2 === 0 ? "짝수" : "홀수"}</div>;
// };

const Body01 = () => {
  const [number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(number - 1);
  };

  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div className="countApp">
      <h2>{number}</h2>
      <Viewer number={number} />
      {/* 새로운 자식관계 */}
      <div className="buttons">
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default Body01;
