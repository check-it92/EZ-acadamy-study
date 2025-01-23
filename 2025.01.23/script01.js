/* 함수 선언식  // 함수의 변천사 과거 -> 현재재

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20)); */

/* 익명함수 표현식 
const num = function (a, b) {
  return a + b;
};
console.log(num(10, 20)); // 따로 변수자체가가 함수 이름이 된다. */

/* 화살표 함수 표현식 
// 최신 표현
const num01 = (a, b) => {
  return a + b;
};
console.log(num01(10, 20)); */

/* 선언 & 호출 x -> 선언 즉시실행 
// a, b 매개변수 값을 소괄호로 해준다.
(function (a, b) { // 함수 선언 (익명식)
  let result = a + b;
  console.log(`함수 실행결과값 : ${result}`);
})(100, 200); */

// const hi = () => "안녕하세요!"; 자바스크립트는 표현식문이기 때문에 이렇게도 가능하다.

//call(*호출)의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수(*콜백함수)
// 종속관계에 있다. 최초의 btn 변수 설정 ("button") 쿼리셀럭터 함수 (매개변수)
//==> btn.이벤트리스너(함수 안에 다시한번 함수 이 안에서 활성화 하겠다. 이게 콜백함수이다.)
/*
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("클릭했습니다!!");
}); // 클릭이라는 이벤트를 듣겠다. */

// 잘못된 오류
/*
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("클릭했습니다!!");
  return () => {
    console.log("클릭했음!!");
    return () => {
      console.log("클릭했다고고!!");
    }
  }
}); */ // return 지옥에 걸리지 말자!!

const showData = (name, age) => {
  alert(`안녕하세요! ${name}님! 나이가 ${age}살이시군요.`);
};

const getData = (callback) => {
  const userName = prompt("이름을 입력하세요!");
  const userAge = prompt("나이를 입력하세요!");
  callback(userName, userAge);
};

getData(showData);

/* 
자바스크립트 언어 => 함수

1. 변수에 함수를 담을수 있음 : 
원래는 전통적으로 함수 선언식으로만 함수를 호출했었는데, 
익명함수가 등장하면서 함수를 보다 편리하게 작성할수 있게 됨

2. 다른함수의 매개변수로 등장할 수 있음 : 콜백함수라는 스타일 형식을 창조해낼 수 있게 됨

3. 다른 함수의 반환값(*return)으로 함수가 등장할 수 있다. (중첩할수 있다는 뜻)

++> 위의 3가지의 특징덕분에 유연하게 대처 가능
그래서 자바스크립트의 함수를 "1급 시민" 이라 부른다.
*/
