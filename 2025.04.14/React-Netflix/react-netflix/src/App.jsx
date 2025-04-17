import GlobalStyles from "./styles/GlobalStyles.styles";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom"; // 전역 페이지에 제공하도록 하는 요소
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

// 페이지 라우팅 (객체로써 의미) > 모든 전역요소에 적용
const router = createBrowserRouter([
  {
    path: "/", // 어떠한 동적경로가 (파라미터값) 없는 페이지는 화면구성의 틀이 되어진다. = 메인화면이 된다.
    element: <Layout />,
    children: [
      // 자식요소 또한 배열의 형태 안에 객체로 구성
      { index: true, element: <Home /> }, // 초기화면 (페이지 마운트시)
      { index: "movies", element: <Movies /> },
      { index: "movie/:id", element: <MovieDetail /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
