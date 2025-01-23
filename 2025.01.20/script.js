// const x = 10;
// const y = 4;

// let result;

// result = x / y;
// console.log(result);

// result = x % y; 나머지 연산자 몫을 제외한 정수의 나머지 값을 출력
// console.log(result);
/*
let a = 10;

console.log(a);

a = ++a;   // 증감연산자 = 값을 지정하지 않으면 자동으로 1씩증감된다.

console.log(a);

a = --a;

console.log(a);   //증감연산자 = 값을 지정하지 않으면 자동으로 1씩증감된다. */

// let x = 10;
// let y = 4;
// let result;
/*let x = 10,
  y = 4,
  result; //축약형

  //result = x + y--; // 즉각적 감소가 된 상태가 아님 이 공식대로면 13이 나와야 하나? No 순서가 잘못됨
  result = x + --y;  // 피연산자와의 입력위치에 따라서 먼저/나중 에 연산이 적용된다.
console.log(result); */

/*const actor = "현빈";
const movie = "하얼빈";

// const result = actor+ " 님은" + movie + " 에 출연하였습니다.!"; 중간에 있는 +/- 가 "연결연산자"라 한다.
const result = `${actor}님은 ${movie}에 출연하였습니다.`; // 이 방식이 (*lterable 객체) 입력방식 위에 방법보다 간단.
console.log(result); */

/*let x = 3,
  y = 3; */

/* y = x + 3;
y += x; = 6 복합대입연산자 => 기존 y의값에 재할당되어 계산되어라 라는 뜻
y *= x; = 9
y %= x; = 0
console.log(y); */

//복합대입연산자로 간단한 테이블 구조를 만들어봤다.
/* let str = "<table border='1'>"; 
str += "<tr>";
str += "<td>1</td><td>2</td><td>3 </td>";
str += "</td>";

str += "</table>";

document.write(str); */

/* console.log(3 == "3"); - 얕은비교 타입안에 들어가져있는 값만 구분하기 때문에 같다. 라고 인식 true
   console.log(3 === "3"); - 깊은비교 숫자와 문자열로 구분 (자료형이 다르다.) false 로 인식 */

/* console.log(3 != "3");  * !(부정) 부정연산자로 얕은비교 // 깊은비교 나눈 법 이렇게 되면 false
   console.log(3 !== "3");     true 가 된다.  */
/*
let a = 10,
  b = 20;

console.log(a > 10 || b > 20); // 좌항 || 우항 (또는 연산자) 적용시 true와 false - 구분 1개만 참이어도 참이 된다.
console.log(a <= 10 || b > 20);
console.log(a <= 10 && b > 20); // 좌항 && 우항 (and 연산자)는 두 항 모두가 참이어야 참으로 구분이 된다. */

/* 삼항연산자자
let a = 10,
  b = 3;

let result = a > b? console.log("Javascript") : console.log("Typescript"); */
