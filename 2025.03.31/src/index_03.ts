// 타입변수가 n개가 필요한 경우!

const swap = <T, O>(a: T, b: O): [O, T] => {
  return [b, a]; // 내가 배열의 순서를 바꿨으므로
};

// const swapItem = swap("1", 2);
// console.log(swapItem);

// const [a, b] = swap("1", 2);
// console.log(a, b);

// const returnFirstValue = <T>(data: T[]) => {
//   return data[0];
// };

// let num = returnFirstValue([0, 1, 2]);

// let str = returnFirstValue([1, "Hello", "World"]);

// const returnFirstValue = <T>(data: [T, ...unknown[]]) => {
//   return data[0];
// };

// let str = returnFirstValue([1, "Hello", "World"]);

// 상속 - 카운팅 될수 있게 number 타입으로
const getLength = <T extends { length: number }>(data: T) => {
  return data.length; // 이터러블한 객체이므로
};

getLength("Hello");
getLength([1, 2, 3]);
getLength({ length: 1 });

// 불가한 요소 (계층구조)
//getLength(null);  형제요소
//getLength(undefined);  서브타입

// TS + React.js
// React => map() 함수를 굉장히 많이 썻는데 그럼 그 map 는 어떻게 타입을 지정할까?
