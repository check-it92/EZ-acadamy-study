"use strict";
// 특정값을 인자값으로 받아서 해당 값을 반환하는 함수를 선언!!
// 위 특정 값이 숫자, 문자, 객체, 배열이 예측불가!!
Object.defineProperty(exports, "__esModule", { value: true });
// any를 남발하게 되면 안에 특정값의 범위를 크게 넘나들어서 후에 타입의 정의가 혼란스러워진다.
/*
const func = (value: unknown) => {
  return value;
};

let num = func(10);

let str = func("Hello");

// 다운캐스팅이 되므로 오류가 생긴다.
//num.toUppercase();
//num.toFixed();

if (typeof num === "number") {
  num.toFixed();
}

if (typeof str === "string") {
  str.toUpperCase();
}
*/
// 제네릭 타입! = <>
// 타입또한 같게 선언해줘야 한다. key와 value값 동일
const func = (value) => {
    // T -> 타입변수(매개변수) 그때마다 유동적으로 쓰기위해서! <>제네릭타입으로 변수라고 선언해줘야 한다.
    return value;
};
let num = func(10);
const func01 = (value) => {
    return value;
};
// 안쪽에 들어오는 타입을 명시할수 있다. (예시로 튜플타입)
let arr = func([1, 2, 3]); // 숫자값을 가지고 있는 배열
// 제네릭 형식으로 타입을 지정하게되면, 기본적으로 상대적인 슈퍼타입을 타입으로 지정하려고 함!
