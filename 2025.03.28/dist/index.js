"use strict";
// 함수의 타입정의
Object.defineProperty(exports, "__esModule", { value: true });
// 원본
// const func = (a: number, b: number): number => {
//   return a + b;
// };
// 축약 형 (생략가능한 부분들 덜어낸 버전)
const func = (a, b) => a + b;
// 매개변수 => 선택적 매개변수 -> 연관(타입가드)
// 바닐라 자바스크립트 에서도 중요한 요소!! 공통된!!
// 선택적 매개변수가 앞으로 나올수 없다. 오류! const introduce = (tall?: number, name: string)
const introduce = (name, tall) => {
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
};
introduce("정재기", 180);
introduce("정재기"); // 오류 해당 타입을 다 안써서 그래서 위에 선택적 매개변수를 부여!
const getSum = (...rest) => {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    console.log(sum);
};
getSum(1, 2, 3);
