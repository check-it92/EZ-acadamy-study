import React from "react";
// React:라이브러리 안에 있는 객체 "react": 라이브러리 이다.
// 컴포넌트를 최적화 하고자 할때 => 컴포넌트를 최적화 하고자할때 React,memo()를 하면 최적화 된다.
// useMemo = 함수를 최적화 하고자 할때

const Header = () => {
  // const today = new Date().toLocaleDateString();
  // 위에서 객체를 바로 가져올수 없기때문에 함수화 해주고
  // 그게 아니라면 밑에서 바로 언급해줘도 된다.
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      {/* <h1>{today}</h1> */}
      <h1>{new Date().toLocaleDateString()}</h1>
    </div>
  );
};

export default React.memo(Header);
