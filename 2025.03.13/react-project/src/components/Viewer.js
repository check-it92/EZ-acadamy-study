import React, { useState } from "react";

const Viewer = ({ count }) => {
  // 부모로부터 count값을 받아올수 있기 때문에 props = {count} 해당 함수를 지워도 된다.
  return (
    <div>
      <div>현재 카운터 :</div>
      <h1>{count}</h1>
      {/* // 상태관리가 필요한값 */}
    </div>
  );
};

export default Viewer;
