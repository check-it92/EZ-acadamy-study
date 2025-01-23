// 선언 & 호출
/*
function code() {
  console.log("오늘은 목요일입니다!");
}

code(); // 텍스트 뒤에 소괄호 = 함수를 뜻한다. 
*/
/*
const obj = {
  title: "자바스크립트",
  fnc: function() {
    console.log("자바스크립트 짱!");
  },
};

obj.fnc(); */
// 메서드 : 객체안에 있는  다시 특정되어져 있는 함수
/*
function calcSum(num) {
  // 매개변수 는 내가 입력하고 싶은 이름으로
  let sum = 0;
  for (let i = 1; i <= num; i++) { <--- 이곳은 블락변수이다.
    sum += i;
  }
  return sum;
}

console.log(`1부터 10까지 더하면 ${calcSum(10)} 입니다.`); */

// 최초의 함수선언한 이름을 return에 입력했기에 결과값을 외부에서 가져올수 있다.

// 스키장을 가기싫어 하는 내가 어떠한 요인 때문에 가게 된다면 그 요인이 객체(매개체)가 되는데 그게 매개변수가 되는것이다.

//sum(매개변수) 함수안 괄호에 내가 객체를 새로 입력하는게 매개 변수이다. => 그래서 함수 선언부에서 필요하다.
/*
function sum(a, b) {
  const result = a + b;
  console.log(result);
}

sum(10, 20); // sum(a, b) = sum(10, 20) */
// 매개변수 입력후 그에 따른 인자값 을 입력을 해줘야 한다. 그래야 성립이 된다.

// 즉 공식을 써놓고 호출부에서 내가 입력하고자 하는 인자값을 입력해야 컴퓨터는 그 수를 받고 실행한다.
// 내가 게임하고 싶은 오락기를 찾고 그 후 동전을 입력하는 방식!

//const num = parseInt(prompt("더하고 싶은 숫자를 입력하세요!!"));

function calcSum(n) {
  // 매개변수 는 내가 입력하고 싶은 이름으로
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

var num = 5;

console.log(`1부터 ${num}까지 더한 결과값은 ${calcSum(num)}입니다.`);
// console.log(`1부터 ${num} 더하면 ${calcSum(num)} 입니다.`);

/*
function multiple(a,b = 5,c = 10) {
  return a + b + c;
}

console.log(multiple(2,4,8)); // 기본 인자값을 준게 출력 우선순위

console.log(multiple(2,4,)); // 매개변수와 인자값이 일치하지 않는 경우 nan이 된다. c값이 미정이라 Undefined값일거다.
console.log(multiple(2));
//만약 b, c값이 들어 오지 않는 다면 기본값을 출력해라 라는 의미에서
// c = 10이라는 기본 매개변수값을 준다.
// 그래서 보통 그 자리에 0이라는 기본 값으로 설정을 해놓는다. */

// 2.scope(스코프)
// 종류 : 전역, 지역 // global, local

/* 전역 스코프 활용사례 1   var = 전역 스코프이다.
var hi = "Hello";

function greeting() {
  console.log(hi);
}

greeting(); */

// 전역스코프 활용사례 2
// var hi 라는 변수안에 hello를 넣었지만 hi라는 변수 안에 var을 입력하지 않아도 전역변수가 된다.
// 덮어써버려서 새로 할당을 해도 읽히지 않는다.
/*
var hi = "Hello";

function greeting() {
  hi = "bye";
  console.log(hi)
}
greeting(); */

// 전역스코프 활용사례 3
// var을 사용하거나 아무 키워드도 쓰지 않았지만 사용가능한 전역변수가 된다. (함수내부에서도 사용가능)
/*
function greeting() {
  hi = "hello";
}

greeting();

console.log(hi); */
// 단점, 범위가 너무 넓다 보니 제어가 안된다. 그래서 보완하고자 나온게 const, let 이다.

// 블록 스코프
/*
const factor = 5;

function calc() {
  return num * factor;
}
{
const num = 10;
let result = calc();
console.log(`result : ${result}`);
}  */
// 이 중괄호로 설정한 블록 안에서만 쓸수 있도록 해서 '블록 스코프'라 한다.
