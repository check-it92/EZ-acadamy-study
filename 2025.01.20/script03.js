/* 사용자에게 교통비, 식비, 음료비 이상 3개의 값을 전달 받아서
  3개의 총합이 적정지출비용 초과하는 경우, "00원 초과, 지출을 줄여주세요" 출력
  만약 초과하지 않는 경우 "00원 유지, 축하드립니다!" 메세지가 콘솔창에 출력되도록 해주세요!

  적정지출 비용 10000원 */

// 내가 만든 공식

const userFare = Number(prompt("당신의 교통비를 입력해주세요."));
const userFood = Number(prompt("당신의 식비를 입력해주세요."));
const userDrink = Number(prompt("당신의 음료비를 입력해주세요."));

let userCost = userFare + userFood + userDrink;
let result = userCost <= 10000;

result = result ? `적정비용입니다. 👍` : `적정비용이 아닙니다. 🥹`;
console.log(result);

// 선생님이 해주신 공식
/*
let traffic, food, drink;

traffic = parseInt(prompt("교통비를 입력하세요.")); 해당 숫자를 입력을 하니 숫자열로 형태변환을 해줘야 한다.
food = parseInt(prompt("식비를 입력하세요."));
drink = parseInt(prompt("음료비를 입력하세요."));

let total = traffic + food + drink; 연결연산자로 대입입
let result = total < 10000;

const plus = total - 10000;
const minus = 10000 - total;

result = result
  ? `${minus}원 남았습니다. 돈 관리 잘했어요!`
  : `${plus}원 초과했습니다! 돈 관리 잘해주세요.`;
console.log(result); */
