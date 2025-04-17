import React from "react";
import Navigation from "../components/Navigation"; // 부트스트랩 css 적용하기위해 공통페이지에 적용
import { Outlet } from "react-router-dom";
// 하위의 요소들의 페이지를 받아줄수 있는 기능 (Outlet) -> 페이지들의 가장 최상단의 요소에 설정을 해둔다.

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Layout;
