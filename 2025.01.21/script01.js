/* const userInput = prompt("이름을 입력하세요.");
console.log(typeof userInput);

// 조건문을 실행하기에 앞서서 조건식 자체가 성립 될 수없는 값이 들어온다면,
// 굳이? 더이상의 조건문을 실행시키지 않는 조치!! => 메모리 효율적이다.

// 그게 ->> ****예외 조항 처리***** 라 한다. (조건문을 입력전 미리 입력해서 효율적으로)

if (userInput === "" || userInput === null || userInput === object) {
  // 공백을 입력하거나 아무것도 입력하지 않으면 (비교연산자)
  console.log("값이 없습니다.");
} else {
  alert(`${userInput}님 좋은아침이에요! 😍`);
} */

// 3. 중첩 if 조건문
/*
const score = prompt("내 인생 점수!");

if (score !== "" || score !== null);
{
  if (Number(score) >= 90) {
    alert("나름 잘 살았다! 👍");
  } else if (Number(score) >= 80) {
    alert("너도 열심히 살았네! 괜찮아 🥹");
  } else {
    alert("지금부터 열심히 해볼까? 짜식아😌");
  }
} */

// 4. 짝수와 홀수를 구분하는 if 조건문!!
/*
let userNumber = Number(prompt("숫자를 입력하세요!"));

if (userNumber !== "" || userNumber !== null) { 
  userNumber = parseInt(userNumber); // 변수선언
  //   if (userNumber % 2 === 0) {
  //     alert(`${userNumber}는 짝수입니다!`);
  //   } else {
  //     alert(`${userNumber}는 홀수입니다!`);
  //   }
  // }
  
(삼항 조건 연산자.)
  userNumber % 2 === 0 // 조건 제시 
    ? alert(`${userNumber}는 짝수입니다!`)  // 참일경우 거짓일 경우 밑으로
    : alert(`${userNumber}는 홀수입니다!`);
} */

// 5. switch 문 (상황에 따라 가변적이어서)
//  실행컨텍스트 오류와 연관이 있다. 함수선언 > 조건문제시 > 호이스팅 발생 > 전역에서 할수 있게 최초로 선포 후 로컬에서 활용!

const webPage = prompt(
  "네이버, 구글, 다음 중 즐겨 사용하는 사이트는 어디인가요?"
);

let url; // 최초의 변수 선언 (전역 송출)

switch (
  webPage // webpage 라는 조건제시)
) {
  case "네이버":
    url = "https://www.naver.com/";
    break; // 다음으로 흘러가지 않게 break로 멈춰줘야 해당 변수로 선택이 된다.
  case "구글":
    url = "https://www.google.com/";
    break;
  case "다음":
    url = "https://www.daum.net/";
    break;
  default:
    alert("보기 중에 존재하지 않는 사이트입니다.");
}

if (url) {
  //전역에서 받은것을 지역에서 활용 할 수 있게 해주는 것이다.
  window.location.href = url;
}
