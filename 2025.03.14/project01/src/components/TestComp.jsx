import React, { useState, useEffect, useReducer } from "react";

const ComA = () => {
  console.log("컴포넌트가 호출 되었습니다."); // 횡단관심사 대상(공통요소)
  return <div>ComA</div>;
};

const ComB = () => {
  console.log("컴포넌트가 호출 되었습니다."); // 횡단관심사 대상
  return <div>ComB</div>;
};

// 공통된 요소를 하나의 독립컴포넌트로 강화
const withLifeCycle = (wrapperComponent) => {
  return (props) => {
    useEffect(() => {
      console.log("Mount!");
      return () => console.log("Unmount!");
    }, []);

    useEffect(() => {
      console.log("Update!");
    });

    return <wrapperComponent {...props} />;
    // ...props > 반환되는 요소 를 통틀어서 가지고 있는 아이템
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    // return 종결의 의미도 가지고 있다. break 대신 가능 = 끝남과 동시에 반환
    case "DECREASE":
      return state - action.data;
    case "INIT":
      return 0;
    default:
      state;
  }
};

const TestComp = () => {
  // const [count, setCount] = useState(0); 초기값 카운터가 0 이됨

  // 상태변화를 일으키는 함수인데, 외부컴포넌트 형식으로 쓰는것뿐이지 실제 외부가 아니다.

  // 인자값 = 상태변화를 관리해주는 함수, 초기값
  // 상태변화 촉발함수 = dispatch 준비재료를 가지고 이친구가 reducer한테 전달을 함

  const [count, dispatch] = useReducer(reducer, 0);
  // 차이점은 바깥에서 쓸수 있게 됨

  // /* 상태변화 코드 함수 */
  // const onIncrease = () => {
  //   setCount(count + 1); 준비재료
  // };
  // const onDecrease = () => {
  //   setCount(count - 1); 준비재료
  // };

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <b>{count}</b>
      </div>
      <div>
        {/* /dispatch 는 단독으로 쓸수 없다. 콜백으로써야 한다. 그리고 타입을 정의해야한다. 
        여기선 어떤 타입인지 정의만 하면된다. 재료만 준비 나머지 요리, 계산은 reduce가 한다. 
        ** 콜백함수의 2가지 버전 */}
        <button
          onClick={() => {
            dispatch({ type: "INCREASE", data: 1 });
          }}
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "INIT", data: 0 })}>
          0으로 초기화
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
      </div>
    </div>
  );
};

export default TestComp;
