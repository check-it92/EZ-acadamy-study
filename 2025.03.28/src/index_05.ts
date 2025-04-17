// 함수의 타입정의

// 원본
// const func = (a: number, b: number): number => {
//   return a + b;
// };

// 축약 형 (생략가능한 부분들 덜어낸 버전)
const func = (a: number, b: number) => a + b;

// 매개변수 => 선택적 매개변수 -> 연관(타입가드)
// 바닐라 자바스크립트 에서도 중요한 요소!! 공통된!!
// 선택적 매개변수가 앞으로 나올수 없다. 오류! const introduce = (tall?: number, name: string)

const introduce = (name: string, tall?: number) => {
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
};

introduce("정재기", 180);
introduce("정재기"); // 오류 해당 타입을 다 안써서 그래서 위에 선택적 매개변수를 부여!

const getSum = (...rest: [number, number, number]) => {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  console.log(sum);
};

getSum(1, 2, 3);
// getSum(1, 2, 3, 4);
// getSum(1, 2); 튜플방식을 적용했기 때문에 명확하게 일치하지 않으면 안써진다.

//타입별칭은 객체방식으로도, 함수방식으로도 쓰일수 있다 (장점)
type Add = (a: number, b: number) => number;

// 호출 시그니쳐
type Call = { (a: number, b: number): number }; // 객체안에 넣음 (key와 value)값으로 인식이된다.

const add: Add = (a, b) => a + b;
const sub: Call = (a, b) => a - b;
const multiply: Add = (a, b) => a * b;
const divid: Add = (a, b) => a / b;

// 함수의 리턴문(생략버전) 해서쓰이는 것 => 이걸 고차함수라 한다.
const test: (a: number, b: number) => number = (a, b) => a * b;


