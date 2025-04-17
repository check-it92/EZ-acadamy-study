// 리듀서들을 (컴바인) 총괄하는 파일
import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export default combineReducers({
  movie: movieReducer,
});
