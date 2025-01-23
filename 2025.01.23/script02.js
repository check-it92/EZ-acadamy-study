/*
const friuts = ["apple", "banana", "grape"];

console.log(friuts);
// 전개연산자 구문 (spread operator)
console.log(...friuts); // 찹조변수 이기 때문에 원본이 달라지면 사본도 달라진다. 그래서 방지차원으로 ...을 붙인다.
// 문자열로 출력이 된다.
*/
/*
const addNum = (...numbers) => {
  // (a, b)매개변수가 인자값보다 적을때 해당되는 것만 계산
  console.log(typeof numbers, numbers);
  let sum = 0; // 로컬변수에 재할당
  for (let number of numbers) {
    sum += number;
  }
  // numbers.forEach((number) => {
  //   sum += number;
  // });
  return sum;
};

console.log(addNum(1, 3, 4, 5));

// 그래서 내가 매개변수가 미정일때 또는 다를때 전개연산자가 필요하다. */

// 전개연산자 구문
// 보통 쓰이면 전체 배열을 다 끌어오지만 구분해서 쓸 수도 있다.
// 그때 절대로 전개연산자는 일반 구문뒤로 와야한다.
const displayFavorites = (first, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first}입니다.`;
  return str;
};

console.log(displayFavorites("사과", "포도", "토마토"));
