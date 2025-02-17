// const result = document.querySelector("#result");

// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth() + 1;
// const date = today.getDate();
// const day1 = today.getDay();
/*
let day2;

switch (day1) {
  case 0:
    day2 = "일요일";
    break;
  case 1:
    day2 = "월요일";
    break;
  case 2:
    day2 = "화요일";
    break;
  case 3:
    day2 = "수요일";
    break;
  case 4:
    day2 = "목요일";
    break;
  case 5:
    day2 = "금요일";
    break;
  case 6:
    day2 = "토요일";
    break;
}

displayDate.innerText = `${year}년 ${month}월 ${date}일 ${day2}`;
*/

// const now = new Date();
// const firstDay = new Date("1992-12-11");

// const toNow = now.getTime();
// const toFirst = firstDay.getTime();
// const passedTime = toNow - toFirst;

// const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

// document.querySelector(
//   "#result > #days"
// ).innerText = `날짜로는 ${"#result"} 가 흘렀습니다.`;

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const age = document.querySelector("#age");

const today = new Date();
current.innerText = `${today.getFullYear()}년 ${
  today.getMonth() + 1
  // 사용자에게 보여지게 출력하게 되는 이유
} 월 ${today.getDate()}일 ${today.getHours()}시  ${today.getMinutes()}분 : present Day`;

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const birthDay = new Date(
    birthYear.value,
    birthMonth.value - 1,
    // 반대인이유 컴퓨터가 알아들을수 있게끔 사용자가 입력할때는 - 1을 해줘야 한다.
    birthDate.value
  );

  let passed = today.getTime() - birthDay.getTime();

  let passedDay = Math.floor(passed / (24 * 60 * 60 * 1000));

  let passedHour = Math.floor(passed / (60 * 60 * 1000));

  let passedAge = Math.floor(passed / (24 * 60 * 60 * 1000) / 365) + 1;

  resultDays.innerText = `날짜로는 ${passedDay} 일이 흘렀고,`;
  resultHours.innerText = `시간으로는 ${passedHour} 흘렀고,`;
  age.innerText = `나이로는 ${passedAge} 세 입니다.`;
});
