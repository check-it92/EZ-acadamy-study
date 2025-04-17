import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/productDetail";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // 최상단 화면에서 상태관리 해줘야 한다. <초기화면>
  useEffect(() => {
    console.log("Login : ", authenticate);
  }, [authenticate]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout authenticate={authenticate} setAuthenticate={setAuthenticate} />
      ),
      children: [
        {
          index: true, // = > 아무런 동적파라미터(경로) 값이 없는 빈페이지가 된다. => 기본페이지란 얘기
          element: <ProductAll />,
        },
        {
          path: "login",
          element: <Login setAuthenticate={setAuthenticate} />,
        },
        {
          path: "products/:id",
          element: <PrivateRoute authenticate={authenticate} />,
        },
      ],
    },
  ]);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

/*페이지 라우팅을 바로 한다면 props 에서 받게 되는 상태값이 있을텐데
이 부분이 업데이트 가 안될 수 있기 때문에 상태관리와 이 페이지 라우팅을 혼합해서 쓸수 있어야
업데이트시 바뀌는 정보가(히스토리가) 바뀔수 있기 때문에 그 점을 유의해서 봐야 한다.

프라이빗 Router(-ing)
예를 들어 로그인하지 않았는데 구매를 할 수없듯이 그런 제약이 있는 상태를 관리 해야 한다.
*/
