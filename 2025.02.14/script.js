// 객체 종류

/*
1. 내장객체 : new Date(), Math

2. 브라우저객체 : window 안에 포함되어 있는 객체들

3. 문서객체 : document 안에 포함되어 있는 객체들

4. 사용자정의 객체 : 직접 개발자가 원하는 형태 & 기능을 담고있는 객체의 형태로 정의하는 것을 의미
 */

/* 
  객체는 특징 및 원리 혹은 패턴을 가지고 있음
  객체는 property (= 속성) 으로 구성되어 있음

  그렇다면 속성은 어떤 형태를 띄고 있는가?
  반드시 key:value의 형태를 띄고 있는 1쌍이다.
  vlaue에 입력 될 수 있는 값의 형태는 숫자, 문자만 가능한가?

  // NO 배열도 가능 , 함수도 가능

  객체의 특정 key안에 value 값으로 입력된 자료의 형태가 함수인 경우에는 별도의 용어를 사용합니다.

  method = 메서드 = 방법 = 우리가 그동안 사용했던 것이 => 함수이다.

  window.document.querySelector() > 윈도우 객체안에 도큐먼트 객체 안에 객체의 선택 이 모든것을 포함하는 최상위도 객체안에 있는 메서드 이다. 돔트리구조 => 객체지향언이다. 그래서 
*/

/*
// 객체를 정의 하는 방법

// 1. 온점 표기법
let obj1 = new Object(); // 빈 공간 창출

obj1.name = "David";

console.log(obj1);

// 2. 대괄호 표기법

obj1["gender"] = "male";

console.log(obj1);

// 삭제 하는법

  delete obj1.name;
  console.log(obj1);
*/

/*
// 변수 의 다층구조 / 객체안에 들어오는 함수는 메서드(method)라 한다.
const student = {
  name: "Juliet",
  score: {
    history: 85,
    science: 94,
    average: function () {
      // 함수를 담을수 있는 변수명으로 전환이 된다. key 값이 그래서 이건 average라는 메서드 함수이다.
      return (this.history + this.science) / 2;
    },
  },
};

console.log(student.score.average());
// 마치 도큐먼트의 쿼리셀럭터 처럼 소괄호를 붙여주어야 한다.
// 그안의 값에 값에 값
// ** return의 역할은 계산한 값을 다시 avrege라는 함수에 값을 부여하겠다라는 뜻이다.
// 화살표함수는 글로벌 영역으로 최상위의 window를 찾아오게 된다.
// 익명함수는 내 부모의 this 값을 가져오는 역할을 한다.
*/

const book3 = {
  title: "누구나 처음은 있다.",
  page: 350,
  buy: function () {
    console.log("이 책을 구입했습니다.");
  },
};

book3.price = 20000; // 온점 표기법으로 부여여

console.log(book3); //

// 이 경우에는 const 여도 계산값을 더해서 재할당한게 아니라 하나의 덩어리를 해당 박스안에 부여한것이라
// const여도 가능한것 해당 주소안에서 더해진 것이 아니라 주소 + 주소 값 이라 생각하면 쉽다.

