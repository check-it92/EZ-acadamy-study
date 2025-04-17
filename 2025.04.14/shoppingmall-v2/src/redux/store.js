// 구버전
// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";
// // applyMiddleware createStore안에들어 오는 것들을 비동기처리해줄수 있게 해주는 함수
// // 우리가 사용하려는 것을 thunk다라는 것을 알려주어야한다

// 신버전 (구버전의 것들이 다 내포되어있다.)
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
// 기본으로 index 페이지를 찾아오게 된다.

const store = configureStore({ reducer });
//productReducer 는 비동기처리를 할 수 있는 reducer야 라고 알려준다 applyMiddleware(thunk) 뒤에 미들웨어와 thunk를 썻기 때문에

export default store;
