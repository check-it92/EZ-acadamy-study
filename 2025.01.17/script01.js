// 원시타입 number
const num = 7;

// 원시타입 문자열은 ""(기호)로 취급한다.
const str = "7";

// const age = prompt("당신의 나이를 입력하세요.");
// console.log(age);
// console.log(typeof age);
//-------------------------------------------------------------------------------
// 원시타입 논리형은 참, 거짓 으로 나뉜다 (맞거나틀리거나)
const bool = true;
const bool02 = false;

console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const moiveTitle = "하얼빈";

// const result = userName + "배우가 출현한 최근 영화는 " + moiveTitle + "입니다.";
// console.log(result);
const result = `${userName} 배우가 출현한 최근 영화는 ${moiveTitle} 입니다.`;

console.log(result);
//-------------------------------------------------------------------------------

let hobby;
console.log(hobby);

let weekend = null;
console.log(weekend);

const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);
// 실상은 두개가 다르다. false 거짓으로 나온다.

let id = Symbol();
const member365 = {
  name: "Jack",
  [id]: "ezen", // 동일한 변수값을 해당 사용자의 고유값으로 인식이 되게끔 해준다.
};

console.log(member365);
