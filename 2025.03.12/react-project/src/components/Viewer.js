import React from "react";

// props(객체)로 새로운 구조분해할당 리팩토링 한것
// 길어지기 때문에 부모와 자식의 새로운 관계정립 외부에서 정립한 버전전
const Viewer = ({ number }) => {
  return <div>{number % 2 === 0 ? "짝수" : "홀수"}</div>;
};

export default Viewer;
