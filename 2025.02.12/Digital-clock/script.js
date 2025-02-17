const displayDate = document.querySelector("#today");
const displayTime = document.querySelector("#clock");

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const day1 = today.getDay();
// 기독교적 사고로 월화수 가아닌 일월화수 로 진행되기 때문에 '3'이라 뜬다.
// 인덱스 배열로 보면 0,1,2,3 으로 진행되는 전형

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

const clock = () => {
  const current = new Date();
  let hours = current.getHours(); // 시각을 찾아온다.
  let min = current.getMinutes();
  let sec = current.getSeconds();

  let period = "AM";
  if(hours === 0){
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
    period = "PM"
  }

  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hours = hours < 10 ? "0" + hours : hours;

  displayTime.innerText = `${period} ${hours} 시 ${min} 분 ${sec} 초`;
};
setInterval(clock, 1000); // ~~ 할때마다 값을 받을수 있도록 하는 함수
