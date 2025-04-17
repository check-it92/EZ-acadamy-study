// 여기서 리듀서 값을 받는다.
// configureStore 가 기존의 createStore를 대체된다.
// but, 객체의 형태로 써야 한다.
import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./reducer";

// 객체형식으로 타입을 만들어 키값을 설정하고 해당 value값으로 대입해서 쓰면된다.
const store = configureStore({ reducer: contactReducer });

export default store;
