const numA = parseInt(prompt("A : 1 ~ 100까지 자연수를 입력해주세요."));
const numB = parseInt(prompt("B : 1 ~ 100까지 자연수를 입력해주세요."));
const numC = parseInt(prompt("C : 1 ~ 100까지 자연수를 입력해주세요."));

let nums = [numA, numB, numC];

if (nums.some((num) => num === "" || num === null || isNaN(num))) {
  console.log("숫자를 입력해주세요.");
} else if (nums.some((num) => num >= 100 || num < 0)) {
  console.log("1부터 100 사이의 숫자만 입력해주세요.");
} else {
  let minNum = Math.min(...nums);
  console.log(`입력한 숫자 중 작은 숫자는 ${minNum} 입니다.`);
}
