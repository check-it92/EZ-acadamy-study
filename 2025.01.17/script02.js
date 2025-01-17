// 참조타입
// 하나의 그룹 형식으로 보통 쓰이기 때문에 [ ] 대괄호를 사용한다.

// 1. array 배열
let arr = [1, 2, 3];
const strArr = ["park", "kim", "lee"];
const boolArr = [true, false];

console.log(arr);
console.log(typeof arr);

arr[3] = 7;
console.log(`${arr[3]}은 arr배열의 ${arr.length}번째 값입니다.`);
// 코드가 읽히는 순서도 중요하다. 순서가 잘 못되어있을시 언디파이드가 된다.

console.log(arr);
//재할당 해서 인덱스 3번째 자리 숫자를 제공을 했을때 추가가 되며 값을 불러올수 있다.

// console.log(arr[2]);
//반복가능한 개체 / 배열안에 있는 index숫자를 추출해서 개체값을 불러 올 수 있다.

//2. object = 객체 ( { } 중괄호를 사용한다. )
//const arr = [1, 2, 3]; 1개의 배열 안에 각각의 숫자들이 가지고 있는 의미를 정의 할 수 있다.

const obj = {
  firstNumber: 1,
  secondNumber: 2,
  finalNumber: 3,
};

const frontendClass = {
  tutor: "David",
  students: 16,
  major: "language",
};

// 객체의 값을 찾아 올 때 2가지 방식
console.log(frontendClass.tutor); //  온점 표기법
console.log(frontendClass["students"]); //  대괄호 표기법

// +추가적으로 객체를 추가 하고 싶을 때
frontendClass.attitude = "the best";

console.log(frontendClass);
// 그럼 결과 값으로 {tutor: 'David', students: 16, major: 'language', attitude: 'the best'} 콘솔창에 추가가 되어 나온다.


let a = 10; //변수 설정
let b = a;

let obj1 = {
  c: 10,
  d: "add",
};
let obj2 = obj1;

console.log(obj1, obj2);

b = 15; // 재할당;
obj2.c = 20;

console.log(a, b);
console.log(obj1, obj2);

// 변수 값을 담을 수 있는 그릇이라 표현 했지만
// 안담길 때도 있다.

const arr = [1, 2, 3];

