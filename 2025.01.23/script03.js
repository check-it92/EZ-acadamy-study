/* 시간과 관련있는 자바스크립트의 내장 함수 시리즈 */

/* 일정시간마다 반복하는 함수 = setInterval(); */
/* 예제
const hello = () => {
  console.log("Hello World!!");
};

setInterval(hello, 3000);
*/
//3초에 한번씩 변수를 실행하라 는 뜻
//프로그램에선 밀리초 => 1초 = 1000밀리초 로 계산

/* 반복적인 실행을 멈추게 하는 함수 = clearInterval() */
// 예제
// 작동하게 하려면 setInterval로 작동하는 걸 찾아와야 한다. <전제조건>
/*
let counter = 0;

let timer = setInterval(() => {
  console.log("hello World!!");
  counter++

  if(counter === 5) {
    clearInterval(timer);
  }
}, 2000);
*/
// console.log(timer); 콘솔창에 1 이라는 아이디값을 갖게 된다.

/* 특정시간 경과 후 무언가를 실행시키게 하는 함수 = setInterval() */
setTimeout(() => {
  console.log("안녕하세요!!");
}, 3000);
