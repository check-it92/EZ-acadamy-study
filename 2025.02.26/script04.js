// Iterable Object = 이터러블 객체
// 이터러블 객체 조건
/*
  1. for of 및 forEach 등의 반복문을 사용할 수 있어야함
  2. 전개연산자 구문을 활용할 수 있어야함
  3. 구조분해할당이 가능해야함

  // 자바스크립트에서 이터러블 객체 딱 2가지 => 배열, 문자열 (*유사배열) 로써 사용가능하다.
  // 쿼리설렉트올 로 찾아오는 노드리스트 그것이 유사배열이다.
  // 유사배열시에는 사용할 수 없는 내장함수도 있다.


const hi = "Hello";
Array.from(hi).forEach((ch) => {
  console.log(ch); // > 그럼 결과값이 문자 하나하나가 객체로 인식되어서 나열된다.
});

const chTest = [...hi];
console.log(chTest); // 문자가 하나씩 배열로써 인식된다.

//const [ch1, ch2] = hi;
//console.log(ch1, ch2); // 구조 분해 할당으로 원하는 글자만 추출

// const [ch1, ...ch2] = hi;
// console.log(ch1, ch2);
*/

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// 제네레이터 함수 > 화살표함수 적용x
// 이터러블한 기능을 구현할 수 있는 함수를 만들고 싶음 !! =>
//  그렇다면 이터러블 객체들이 어떤 특성을 가지고 있는지 확인할 필요!!
// >>> 그 안에는 next() 가 존재! 그렇기 때문에 고유한 객체 다음으로 전진이 가능

// 일반함수 => 제네리이터 함수 변환!!

/* 일반함수
function fnc() {
  console.log("1");
  console.log("2");
  console.log("3");
}

fnc();
*/

// 제네레이터 함수에는 꼭 '*' 붙어야 한다. > 세트구성 : yield를 써서 값을 반환한다.
/*
g1.next()
{value: 1, done: false}
g1.next()
{value: 2, done: false}
g1.next()
{value: 3, done: false}
g1.next()
{value: undefined, done: true}
*/
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g1 = gen();

// Array.from(g1).forEach((item) => {
//   console.log(item);
// });

// 배열이 가지고 있는 메서드 함수 : forEach()
// 배열은 for문이라던지 , for of문 사용가능!

// 이터러블 객체 VS 배열 누가 더 상위개체일까? >> 이터러블 WIN

for (let item of g1) {
  console.log(g1);
}
