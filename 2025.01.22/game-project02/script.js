const buttons = document.querySelectorAll("button");
const userChoice = document.querySelector(".my-choice");
const computerChoice = document.querySelector(".computer-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];
let message;

const show = (user, computer, message) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = message;
};

// 콜백함수 리팩토링
const game = (user, computer) => {
  if (user === computer) {
    message = "무승부"; // 가위바위보 3가지 경우
  } else {
    switch (
      user + computer // 유저 와 컴퓨터 연결해주는 연산자 (가위 +보) 라는 뜻
    ) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!"; // 사용자 승리
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!"; // 컴퓨터 승리
        break;
    }
  }
  show(user, computer, message);
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer); //두개의 값을 받아오겠다는 선언 (매개변수)
};

buttons.forEach(function (button) {
  button.addEventListener("click", play);
});

// 3개의 버튼 배열형식 자료형태로 나열이 가능하기 때문에 (이터러블한 객체) 콜백함수 = 화살표함수 같다.

// 콜백을 두번 중복해서 썻는데 > 나눠서 보기좋게게 쓸 수 도 있다.
// 리팩토링을 한다 라고 표현한다. (재공정)
// 장점은 디버깅과 가독성이 올라간다.

// buttons.forEach(function (button) {
//   button.addEventListener("click", (event) => {
//     console.log(event.target.innerText);
//   });
// });
