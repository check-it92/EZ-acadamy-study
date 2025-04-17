"use strict";
// map () 함수 타입정의
Object.defineProperty(exports, "__esModule", { value: true });
// const arr = [1, 2, 3];
// const newArr = arr.map((it) => it * 2);
// map라는 함수 직접구현하기기
// const arr = [1, 2, "3"];
/*
const map = <T>(arr: T[], callback: (item: T) => T): T[] => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
};

const arr = [1, 2, 3];

const arrN = map(arr, (it) => it * 2);
console.log(arrN);
*/
// 명령형 방식 (결과값을 어떻게(how) 도출하였는가?) - how (단순히 무언갈 처리하는 역할)
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));
// 선언형 방식 (결과값(what)을 얻기 위해 무엇(방식)을 어떻게 활용 하였는가?) - what
const forEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
};
forEach(arr2, (item) => console.log(item));
