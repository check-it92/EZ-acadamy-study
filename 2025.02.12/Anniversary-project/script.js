const now = new Date();
const firstDay = new Date("2024-12-19");

const toNow = now.getTime();
const toFirst = firstDay.getTime();
const passedTime = toNow - toFirst;
//                2025.02.12 - 2024.12.19 = 계산값이 현재 지나온 시간 ms 단위로
const passdeDay = Math.round(passedTime / (24 * 60 * 60 * 1000)); // 24시간 하루 변환 계산 공식
// round 는 반올림 함수이다. 1일을 기준으로 0.5일은 없기 때문에
document.querySelector(
  ".accent > span"
).innerText = `벌써 "${passdeDay}" 일 이야`;

const calcDate = (days) => {
  // 매개변수값 부여
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someDay = new Date(future);
  let year = someDay.getFullYear();
  let month = someDay.getMonth() + 1;
  let date = someDay.getDate();
  document.querySelector(
    "#date" + days // 더해주기
  ).innerText = `${year} 년 ${month} 월 ${date} 일`;
};

calcDate(100); // 함수의 인자값 부여!
calcDate(200);
calcDate(365);
calcDate(500);

// 함수는 길게 하는 것보단 보다 간편하고 간단하게 하는 게 미덕이다.

/*
// 100일 기념
let future = toFirst + 100 * (24 * 60 * 60 * 1000);
  let someDay = new Date(future);
  let year = someDay.getFullYear();
  let month = someDay.getMonth() + 1;
  let date = someDay.getDate();
  document.querySelector(
    "#date100"
  ).innerText = `${year} 년 ${month} 월 ${date} 일`;

// 200일 기념
future = toFirst + 200 * (24 * 60 * 60 * 1000);
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth() + 1;
date = someDay.getDate();
document.querySelector(
  "#date200"
).innerText = `${year} 년 ${month} 월 ${date} 일`;

// 1년 기념
future = toFirst + 365 * (24 * 60 * 60 * 1000);
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth() + 1;
date = someDay.getDate();
document.querySelector(
  "#date365"
).innerText = `${year} 년 ${month} 월 ${date} 일`;

// 500일 기념
future = toFirst + 500 * (24 * 60 * 60 * 1000);
someDay = new Date(future);
year = someDay.getFullYear();
month = someDay.getMonth() + 1;
date = someDay.getDate();
document.querySelector(
  "#date500"
).innerText = `${year} 년 ${month} 월 ${date} 일`;
*/
