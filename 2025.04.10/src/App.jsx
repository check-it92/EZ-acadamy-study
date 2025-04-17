import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const inCrease = () => {
    dispatch({ type: "INCREMENT", playload: { num: 5 } });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inCrease}>증가</button>
    </div>
  );
}

export default App;
