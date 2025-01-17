// 3. function 함수수 = 기능

/* 초창기 JS 함수 구현 >> 선언 & 호출! 이 연계되어야 작동한다.
function hello() { -hello 란 함수선언
  alert("Hello World!");
};
hello(); - 함수 호출  >> 이때, 타입은 function이다.*/

// 객체값 설정
let user = {
  name: "David",
  gender: "male",
};

// 함수 선언
function copyObject(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}

// 함수 호출
// user 은 매개변수
const user2 = copyObject(user);
user2.name = "jane";
console.log(user.name, user2.name);

// 전개 연산자 구문 = Spread Operator

const fruits = ["apple", "banana", "cherry"];

//const favorit = fruits   // 기본복사 이것을 **얕은 복사라 한다.
const favorit = [...fruits];  // [...변수값] 을 주는 것이 전개 연산자 이다. 단순복사가 아니다. **깊은 복사라 부른다!!

/*
console.log(fruits, favorit);
*/
favorit[1] = "grape";

console.log(fruits, favorit);   


