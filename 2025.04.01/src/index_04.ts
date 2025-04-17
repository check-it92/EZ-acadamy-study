//Promise 객체를 활용한 인스턴스 객체
// resolve : 성공했을때, reject : 실패했을때
//

const promise = new Promise<number>((resolve, reject) => {
  // 프로토 타입 객체
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  console.log(response);
});

promise.catch((error) => {
  // error 은 any 타입이기 때문에 무조건이다.
  if (typeof error === "string") {
    // 그래서 타입을 지정하기위해 예외처리조항을 기입
    console.log(error);
  }
});
