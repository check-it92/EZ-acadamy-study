// 자바스크립트 프로그래밍 언어!!
/*
객체 지향 프로그래밍 언어 : 거의 대부분의 모든 자료를 객체구조로 생성해서 관리운영

다중 패러다임 언어 : 표현식문 & 실행문 방식의 모든 처리를 둘 다 겸용할수 있기 때문에

 싱글 스레드 언어 : thread :  회차 // 차선 => 1차선을 가지고 있습니다.
1개의 차선에서 만약 사고가 나거나, 신호로 인해서 정차중이다! => 뒤에서는 앞에 사고가 해결되거나
신호가 변경될 때 까지는 무기한 대기! 위쪽부터 작성한 순서대로 실행된다.
자바스크립트는 태생적으로 이 성격을 가지고 있다.

비동기 처리 방식 vs 싱글스레드 언어 모순성!!
  자체적으로 멀티스레드의 성격을 갖도록 해주는 비동기적 함수를 가지고 있다.
  ex)setInterval(), setTimeout(), 콜백함수 등등

자바스크립트의 싱글 스레드 성격을 여실히 보여주는 예시!!


const displayA = () => {
  console.log("a");
};

const displayB = () => {
  setTimeout(() => console.log("b"), 2000);
};

const displayC = () => {
  console.log("c");
};

displayA();
displayB();
displayC();
*/
// 이렇게 되면 여러번 해도 순차적으로 결과값이 나오겠지만 내가 임의로 순서를 바꿔서 호출하고 싶다면??
// 그게 멀티스레드의 방식이다. = 비동기적 처리방식
// 자바스크립트 > 멀티스레드 방식으로 변환하기 위해서 "비동기처리방식" 무언가를 처리할 함수가 필요하다.

/*
const displayB = () => {
  setTimeout(() => console.log("b"), 2000);
}; 이렇게 됨으로써 결과 값이
a
c
b 순서가 뒤바뀌어 나오게 된다. 이 방식이 비동기처리방식이고
싱글스레드이지만 =>> 멀티스레드로 성질을 일시적으로 변환시켜 사용하는 것이다.

그렇다면, "비동기처리방식"으로 무언가를 처리할 수 있는 함수에는 무엇이 존재할까?

1) 콜백함수, 2) promise 객체 3) async 함수 & await 예약어

콜백함수 => 함수 내부에 또다른 함수를 사용 => 내부에 포함된 함수의 호출 타이밍을 외부함수가 관리


const displayA = () => {
  console.log("a");
};

const displayB = (callback) => {
  callback();
  setTimeout(() => {
    console.log("b");
  }, 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);
*/

// 사용자로부터 어떤 커피메뉴를 주문했는지, 확인하는 메세지를 전달해주고 약 3초후에 주문한 커피가
// 주문완료 되었다는 메세지를 전달해주는 역할을 할 예정

const display = (result) => {
  console.log(`${result} 준비완료!`);
  
}

const order = (coffee, callback) => {
console.log(`${coffee} 주문접수!`);
setTimeout(() => {
  callback(coffee);
}, 3000)
}

order("아메리카노", display);

// 자바스크립트에서 콜백함수를 사용할수 있는 이유?
// 일급시민이라 그렇다.
/*
변수에 담을 수 있다
함수(혹은 메서드)의 인자(매개변수)로 전달할 수 있다
함수(혹은 메서드)의 반환값(return)으로 전달할 수 있다
*/