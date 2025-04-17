"use strict";
// 타입단언 = as (해당타입); 으로 쓰인다.
Object.defineProperty(exports, "__esModule", { value: true });
let person = {};
person.name = "";
person.age = 20;
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도", //초과프로퍼티검사에 걸린다
}; // => 타입 단언
// let dogAI :DogNew ={
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// }
// //슈퍼프로퍼티 검사를 우회해서 넘어간 케이스
// //슈퍼타입 & 서브타입
// //업캐스팅 & 다운 캐스팅
// let dogNew: Dog = dogAI
//타입단원--------------------------------------------
let num1 = 10;
// num1 = 20;
let num2 = 10;
num2 = "hello";
// let num3 = 10 as string;
// 중복으로 쓸수 = 다중단언(대수비교를 따져서 꼬리물기가 가능하다.)
let num3 = 10;
//const 단언 => 상수로써 변경(비주류)-> 애초에 const로 설정하면 되니까!
let num4 = 10;
let post = {
    title: "게시글1",
};
const len = post.author.length; // ! 마크가 undefined 타입이 나타날수 도 있다라는 걸 정의 함
