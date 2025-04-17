// 리듀서의 대표파일로 쓸 수있다.
// 두가지 product와 authenticate의 리듀서를 하나로 합치기 위한
// combine 페이지

import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productSlice";

// 객체로 product. auth. 안에 리듀서가 담겨져있다.
export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
