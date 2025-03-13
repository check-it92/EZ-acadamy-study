import React, { useState } from "react";

const Controler = ({ handleSetCount }) => {
  // 부모요소의 props의 부분을 구조분해할당으로 나=자식요소에 끌어와서 썻기때문에
  // 해당 공통된 state와 setState / 함수들을 지워도 가능하다
  return (
    <div className="buttons">
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
      {/* 콜백은 Pathing과정에서 앞에 함수가 아닌 콜백부분을 훑고 지나갈것이고
      우리는 인자값으로 해당 원하는 부분들만 호출을 할 것이다. */}
    </div>
  );
};

export default Controler;
