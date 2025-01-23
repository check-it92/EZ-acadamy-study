/*  사용자에게 이름, 키, 몸무게의 값을 받아서 사용자가 적정 체중인지를 판단한 후
    적정체중이라면 "00님 적정체중입니다!", 아니라면 "00님 적정체중이 아닙니다!" 메세지를 전달하고자 한다.*/

/* 적정체중 어떻게 계산 할 것인가? 공식 적정체중 = (본인 키 - 100) * 0.9 */
// +/- 5kg까지는 적정체중 => 초과 || 미달 일 경우 아니다 라고 나오게 하기
// window에서 끌어올수 있는 명령어가 있다. 그리고 그 명령어를 윈도우를 생략하고 쓸 수 도 있다.

/*
const userName = prompt("😊 당신의 이름을 알려주세요!");
const userHeight = prompt("👍 당신의 키를 알려주세요!");
const userWeight = prompt(" 🤨 당신의 몸무게를 알려주세요!");

const normalWeight = (userHeight - 100) * 0.9;
let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;

result = result ? `적정체중입니다. 👍` : `적정체중이 아닙니다. 🥹`;

console.log(`${userName}님 ${result}`); */

const userName = prompt("😊 당신의 이름을 알려주세요!");
const userHeightInput = prompt("👍 당신의 키를 입력해주세요 (단위: cm)!");
const userWeightInput = prompt("🤨 당신의 몸무게를 입력해주세요 (단위: kg)!");

// 입력값에서 단위 제거 및 숫자로 변환
const userHeight = parseFloat(userHeightInput.replace("cm", "").trim());
const userWeight = parseFloat(userWeightInput.replace("kg", "").trim());

// replace()는 문자열에서 특정 패턴(문자열 또는 정규식)을 찾아 다른 문자열로 대체하는 메서드입니다.
// trim()은 문자열 양끝에 있는 공백을 제거하는 메서드입니다. (문자열 중간의 공백은 제거하지 않습니다.)

// 적정 체중 계산
const normalWeight = (userHeight - 100) * 0.9;
let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;

// 결과 메시지 생성
result = result ? `적정체중입니다. 👍` : `적정체중이 아닙니다. 🥹`;

console.log(
  `${userName}님, 입력하신 키는 ${userHeight}cm이고 몸무게는 ${userWeight}kg입니다.`
);
console.log(`따라서 ${result}`);
