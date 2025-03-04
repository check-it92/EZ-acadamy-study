// 배열관련 메서드 함수 및 예제 학습

// concat(), slice(), sort(), splice(), map(), filter(), find()
// pop(), push(), shift(), unshift()
// sort() 2진법 으로 별도의 콜백함수를 사용하여 오름차순 과 내림차순 을 설정

// map(), filter(), find(), reduce()

/* map() 함수 - 비교 예제 // 다중패러다임 문

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
}); // 연산작업만 하고 끝냄

// const newNumbers = numbers.map((number) => {
//   return number*2; // 배열 형태로 나열이 되어 나옴
// }) 리턴문을 활용해서 썻을때때

const newNumbers = numbers.map((number, index, array) => number * 2 + index); 
// 중괄호 없이 바로 쓸수도 있다. 또한 옵션으로 뒤에 인덱스,배열을 넣어서 쓸수 있다.

console.log(newNumbers);
*/

// filter()
// 내가 원하는 조건에 부합하는 복수의 값을 찾아서 새로운 배열로 반환하고 싶을 때 사용!!

// 만약에 부합하는 값이 존재하지 않는 경우? 조건이 충족되지 않는다면, 빈배열값을 반환!!

/*
const scores = [33, 35, 64, 34, 45, 40];

const highScores = scores.filter((score) => score >= 85);
console.log(highScores);

// find()
// 내가 찾고자 하는 값이 나타나는 순간 해당 메서드 함수는 종료!!
// => 명확하게 찾고자 하는 값이 단일값인 경우!!

const names = ["kim", "park", "lee", "choi"];
const result = names.find((name) => name === "park");

console.log(result);
*/
// filter VS find 차이점
// 1) filter의 경우, 반환값을 배열형태의 자료구조로 가져오는 반면,
//    find의 경우, 반환값을 문자열로 반환

// 2) filter의 경우, 반환값이 존재하지 않는 경우, 빈배열로 반환하는 반면,
//    find의 경우, 반환값이 없을 경우 또는 빈배열일 경우 undefined로 값을 반환

// 3) filter의 경우, 복수값의 값을 찾아와서 배열로 반환하는 목적을 가지고 있기 때문에
// 해당조건에 부합하는 값들을 모두 찾아온다.
// 반면, find의 경우 명확하게 1개의 단일 값을 찾아오고자 하는 목적을 가지고 있기 때문에
// 하나의 값을 찾는 순간 해당 함수의명령 및 실행은 종료!
// => find는 명사 하나만 가져오기 때문에 배열이 아닌게 맞는것!!

// 3. reduce()
// 누산기 : 누적 계산기

const numbers01 = [1, 2, 3, 4, 5];
const result01 = numbers01.reduce((total, current) => total + current, 0);
// 여기서 0은 초기값 (계산기 처음화면), total은 각각 순차적으로 더해지는 값, current는 지정한 배열의 현재의 값

console.log(result01);
