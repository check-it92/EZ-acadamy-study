import React from "react";
import GlobalStyles from "./styles/globalStyles.styles";
import styled from "styled-components";
import MainPage from "./components/PAGES/MainPage";
import PostWritePage from "./components/PAGES/PostWritePage";
import PostViewPage from "./components/PAGES/PostViewPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 이 기능이 페이지를 나눠주는 기능을 해준다.
// 그래고 해당 최상단에 설정해주면 된다.

const MainTitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MainTitleText>미니블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/post-write" element={<PostWritePage />} />
        <Route path="/post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
