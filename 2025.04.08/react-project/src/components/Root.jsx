import React from "react";
import { Outlet } from "react-router-dom";
// 자식요소를 수렴하기 위해 필요한 존재

const Root = () => {
  return (
    <>
      <div>Hello Jae-ki World!!</div>
      <Outlet /> 
      {/* // 이렇게 함으로 부모요소에 자식요소가 들어갈수 있게 된다. */}
    </>
  );
};

export default Root;
