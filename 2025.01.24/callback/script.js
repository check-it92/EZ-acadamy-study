// 콜백 지옥 >> 콜백함수를 계속 이어서 작성하는 방식
// 예시
// 쪼개서 쓴다면 더 효율적이다.

// setTimeout(() => {
//   let coffeeName = "에스프레소";
//   console.log(coffeeName);
//   setTimeout(() => {
//     coffeeName = "카페라떼";
//     console.log(coffeeName);
//     setTimeout(() => {
//       coffeeName = "카페모카";
//       console.log(coffeeName);
//       setTimeout(() => {
//         coffeeName = "아메리카노";
//         console.log(coffeeName);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// 콜백함수를 쪼개서 하는 방식 (디버깅하고 후작업하기 편하지만 비효율적)
/*
let coffeeName = "";

const addAmericano = (name) => {
  // 4차 변수 끊어준것
  coffeeName += `, ${name}`; // 백틱과 달러 기호 사용 `, ${}` 쉼표로 구분
  console.log(coffeeName); // 마지막 이기 때문에 setTime 삭제후 마무리리
};

const addMocha = (name) => {
  // 3차 변수 끊어준것
  coffeeName += `, ${name}`; // 백틱과 달러 기호 사용 `, ${}` 쉼표로 구분
  console.log(coffeeName);
  setTimeout(addAmericano, 2000, "아메리카노");
};

const addLatte = (name) => {
  // 2차 변수 끊어준것것
  coffeeName += `, ${name}`; // 백틱과 달러 기호 사용 `, ${}` 쉼표로 구분
  console.log(coffeeName);
  setTimeout(addMocha, 2000, "카페모카");
};

const addEspress = (name) => {
  coffeeName += name;
  console.log(coffeeName);
  setTimeout(addLatte, 2000, "카페라떼"); // 여기서 1차로 끊어준다. 새로 변수 설정정
};

setTimeout(addEspress, 2000, "에스프레소"); */

/* 약속 = Promise // ES6 = 2015년 때나온 최신방식  */
// 기존엔 못믿기 때문에 계속 같은 방식을 썻는데 이 방식은 1번만 쓰면된다.
// promise 는 프로토타입 함수이다.

/* 만약에 어떤 데이터를 가져오는데 문제가 없으면 A를 출력해줘, 그런데 만약에
문제 생겨서 오류 및 에러발생하면 B를 출력해줘 라고 약속!! */
// 약속한 실행문 지켜보고 있다가 나중에 실행해줌!

const addCoffee = (name) => {
  return (prevName) => {
    return new Promise((resolve) => {
      // 자바스크립트에서 클래스라는 객체를 통해서 만들어진 함수에 반드시 new를 쓰고 프로토타입 함수를 써준다.
      // new 또한 객체 = 배열이다.
      setTimeout(() => {
        let newName = prevName ? prevName + ", " + name : name;
        //(삼항연산자)
        console.log(newName);
        resolve(newName);
      }, 2000);
    });
  };
};

addCoffee("에스프레소")() // 고차항수의 형태 (에스프레소)(newname)
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"))
  .then(addCoffee("아메리카노")); // 인자값들로 이렇게 배열형식으로 나열함 (new + resolve) 배열의 성질을 띄고있다. 객체지향향
