// 가장 최상위의 컴포넌트
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux"; // 리덕스를 사용하기 위해 초기설정
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
