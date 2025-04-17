import { createStore, applyMiddleware } from "redux"; // 미들웨어 설정
import { composeWithDevTools } from "@redux-devtools/extension"; // 툴킷 (실시간 모니터링으로 상태관리 확인)
import { thunk } from "redux-thunk"; // 미들웨어 ver. thunk
import rootReducer from "./reducers"; // 대표 index값은 생략가능 (index일때만 가능) > 대표파일이기 때문에

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); //미들웨어 함수의 인자값에 thunk를 적용

export default store;
