import "./App.scss";
import React, { useState } from "react";

function App() {
  // 구조분해할당으로 첫번째 인자값, 두번째 함수
  const [state, setState] = useState({
    name: "",
    sex: "",
    birth: "",
    bio: "",
  });

  // 상태를 관리한다.
  const handleOnChaange = (e) => {
    setState({
      // 전개연산자로 위에 구조분해할당한것을 (배열형태) 불러와야 한다.
      ...state,
      [e.target.name]: e.target.value,
      // 해당 카테고리 종류들과 그에 해당하는 값들을 상태를 체크해달란 의미!
    });
  };

  const test = "여성";
  // 이런식으로 선언을 하고 해당 값을 중괄호{} / {"여성"} or {test}로 불러내어도 된다. 이런방법도 있다.
  return (
    <div className="App">
      <div>
        <input
          name="name"
          value={state.name}
          // 위에서 초기값으로 value를 빈값으로 줬기때문에 사용자가 부여하면 여기서 값을 받으라는 의미
          type="text"
          placeholder="이름"
          onChange={handleOnChaange}
        />
      </div>
      <div>
        <select name="sex" value={state.sex} onChange={handleOnChaange}>
          <option key={test}>여성</option>
          <option key="남성">남성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChange={handleOnChaange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChaange} />
      </div>
    </div>
  );
}

export default App;
