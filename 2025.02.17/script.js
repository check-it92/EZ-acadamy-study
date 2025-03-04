// 문자열 = 유사배열? > YES
/* 
  length를 우리는 활용 할 수 있다.
  (아이템의 갯수를 찾아올 수 있는 것처럼) - 우리는 번호를 찾아 올 수 있다.
*/

/*
//const str = "hello";
const str = "Good Morning!";

// console.log(str.length);
// charAt(3);

// 해당 문자열을 찾아오는 방법 
// charAt(i), 번수명[i]
console.log(str.charAt(3)); //2015년 이전 방법

console.log(str[3]); // 이후 방법 간단해 졌다.
*/

const string = prompt("문자열을 입력하세요!");
const letter = prompt("어떤 문자를 체크하겠습니까?");

const counting = (string, letter) => {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) count += 1;
  }
  return count;
};

const result = counting(string, letter);

document.write(`${string}에는 ${letter}가 ${result}개 있습니다.`);
