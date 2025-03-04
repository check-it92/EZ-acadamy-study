// 비동기적인 실행을 하는 함수들을 활용해서 태생적으로 싱글 스레드 방식으로 작동하는
// 자바스크립트를 마치 멀티스레드 방식으로 작동하는 것처럼 사용하는 방법을 학습!!

/* 
비동기적인 것이 굉장히 유효한 방식이라는 것에는 이견이 없음!
하지만, 비동기적이라고 하더라도 그 비동기 함수간 동기적인 진행 프로세스가 작동해야 하는 경우!

예시) tmdb 데이터를 찾아온 이후에 ,  해당 데이터를 브라우저 화면에 출력

비동기 함수 앞에 await 라는 예약어를 사용하면, 앞에서 실행되고 있는 비동기처리 함수가 종료되어야만
실행될 수 있도록 조치할 수 있다.

await 라는 예약어는 반드시 async 라는 함수 안에서만 사용가능하다.
*/
/*
// 일반함수 선언 및 호출

const displayHello = () => {
  console.log("Hello");
};

displayHello();

// async 함수 선언 및 호출 = 큰 차이? 바로 Promise 가 적용!!
const displayGood = async () => {
  console.log("Good");
};

displayGood();
*/

const whatYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySub = async (subject) => {
  return `Hello, ${subject}`;
};

// const init = () => {
//   const response = whatYourFavorite();
//   const result = displaySub(response);
//   console.log(result);
// }; 실행이 되질 않는다 순번상 먼저 입력이 되어야 하는데 그럴때 해결하는 법은?

const init = async () => {
  const response = await whatYourFavorite();
  const result = await displaySub(response);
  console.log(result);
};
// 순번을 지켜주기 위해 async 뒤에 await를 써주게 된다. 무조건**async안에서만 쓰게 된다.
init();

/* 결과 값
whatYourFavorite()
  .then(displaySub)
  .then((result) => console.log(result));
//.then(console.log); - 축약형
*/
