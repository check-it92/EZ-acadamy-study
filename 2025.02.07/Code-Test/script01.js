/*길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어졌을 때, 이 세 막대로 삼각형을 만들 수 있다면 콘솔창에 "Yes"를 출력하고, 만들 수 없으면 "No"를 출력한다.
(*삼각형이 되려면 두 변의 길이의 합이 나머지 한 변의 길이 값보다 커야합니다.) = 이등변 삼각형 */

const lineA = parseInt(prompt("A = 막대의 길이 입력하세요."));
const lineB = parseInt(prompt("B = 막대의 길이 입력하세요."));
const lineC = parseInt(prompt("C = 막대의 길이 입력하세요."));

let lines = [lineA, lineB, lineC];

// if (lines.some((line) => isNaN(line) || line <= 0)) {
//   console.log("유효한 길이 값을 입력해주세요.");
// } else {
//   lines.sort((a, b) => a - b); // a와 b를 나열 숫자가 큰 값대로
//   //        a항               b항
//   if (lines[0] + lines[1] > lines[2]) {
//     console.log("Yes"); // 삼각형을 만들 수 있음
//   } else {
//     console.log("No"); // 삼각형을 만들 수 없음
//   }
// }

// 삼항연산자

lines.some((line) => isNaN(line) || line <= 0)
  ? console.log("유효한 길이 값을 입력해주세요.")
  : (lines.sort((a, b) => a - b),
    console.log(lines[0] + lines[1] > lines[2] ? "Yes" : "No"));
