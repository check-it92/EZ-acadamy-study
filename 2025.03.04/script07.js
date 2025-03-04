// 콜백지옥
/*
const displayLetter = () => {
  console.log("A"); // 외부에서 데이터를 찾아왔음
  setTimeout(() => {
    console.log("B"); // 찾아온 데이터를 출력해줌
    setTimeout(() =>{
      console.log("C"); // 찾아온 데이터 1차 가공
      setTimeout(() => {
        console.log("D"); // 찾아온 데이터 2차 가공
        setTimeout(() => {
          console.log("STOP"); // 최종 결과값
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}

displayLetter();
*/

// 콜백지옥을 해결하기 위한 해결책 > promise 객체!!
// 만약 처리하고자 하는 데이터가 정상적으로 처리가 되었을때,
// 처리하고자 하는 데이터가 정상적으로 처리되지 못했을 때,
// 위 2가지 사항에 따른 결과를 이원화해서 처리하고 싶은 것!!

// 클래스로 선언된 프로토 타입 객체!

// pizza 는 인스턴스 객체가 되었다.
// 비동기로 작업한 방식 순서와 상관없이 참,거짓 실행값에 따라 선택적으로 활용가능
// promise 활용방법

const pizza = new Promise((resolve, reject) => {
  if (true) {
    // 약속 선언부 참 or 거짓 으로 판별 (true, false)
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

// 실행부 => 선언앴던 약속을 실행해주는 역할
// 메서드 체인기법을 활용, 선언부에서 약속한 결과를 실제 실행
// 이때는 .then 과 .catch 로 호출할 수 있다. (yes or no)
// .finally 는 무조건 나오는 결과값이다. 최종!!
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료!"));

/* 
promise 객체를 사용해서 무언가의 데이터를 취급할 때에는 3가지 상태변화를 체크!
1. pending : 최초 프로미스 객체를 생성하면 무조건 pending 단계 돌입!
2. false값 입력시 <rejected> : 어떤 데이터를 정상적으로 처리하지 못하게 되면 돌입!
... reject 라는 함수를 실행한 단계
3. true 값 입력시 <fulfilled> : 어떤 데이터를 정상적으로 처리하게 되면 실행단계 돌입!
>>> resolve 라는 함수를 실행한 단계
  */
