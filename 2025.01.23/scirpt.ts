/* 보통함수 */
const add1 = (a: number, b: number): number => a + b;

/* 고차함수 */
const add2 =
  (a: number): ((number: number) => number) =>
  (b: number) =>
    a + b;

  // 자바스크립트에서 closure = 클로저 라는 개념을 알아야한다.

const result = add2(1)(2);
