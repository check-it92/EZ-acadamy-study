// Enum = 열거형 타입 온점표기법으로 불러와서 사용
// enum Role {
//   ADMIN = 0, // 관리자는 0번이라고 정의를 하고 쓰는것! 그럼 관리자=0 대입이 되어서 쉽게 이름에서 내용이 보인다.
//   USER = 1,
//   GUEST = 2,
// }
enum Role {
  ADMIN, // 자동으로 숫자를 기입하지 않아도 인덱스 배열형식으로 인식이 된다.
  USER,
  GUEST,
}

const user9 = {
  name: "David",
  role: Role.ADMIN,
};
const user8 = {
  name: "Jane",
  role: Role.USER,
};
const user7 = {
  name: "Juliet",
  role: Role.GUEST,
};

console.log(user9, user8, user7);

// 대수타입(타입끼리 비교하는것)에 대한 정의 => 타입에 계층구조에 영향이 있다.

let test01: unknown;

let test02: number = 2;

test01 = test02;
// test02 = test01;  왜 이것만 오류가 날까?

// 슈퍼타입 any 가 상단의 개체이기 때문에 전부 받아들일 수 있다. = 강력하다.
let anyVar: any = 10;
anyVar = "hello";
anyVar.toUpperCase();

anyVar = true;
anyVar = {}; // object 객체도 가능
anyVar = []; // Array 배열도 가능

anyVar.pop();

let num = 10;
num = anyVar; // 지금이 다운캐스팅 허용된 상황인데 특정적으로 any 만 가능하다.

// 그럼 가장 최사위 unknown은 다운캐스팅이 가능할까?
let unknownVar: unknown;

unknownVar: "";
unknownVar: 1;
unknownVar: true;
unknownVar: {
}
unknownVar: [];

// num = unknownVar; 다운캐스팅이 허용되지 않는다.

// 타입 가드 (Type Guard) = 보호해주는 타입에 특정한 제약을 걸면된다. 지정!
if (typeof unknownVar === "number") {
  num = unknownVar;
}

// void = 함수의 매개변수의 뒷공간에 위치 => 함수의 반환값이 없을때 쓰인다.

const func1 = (): void => {
  console.log("Hello!");
  // 반환값이 없을때
};

let a: void;
a = undefined; // void가 상위 요소이기 때문에 가능하다.

const func3 = (): never => {
  while (true) {
    // 무한반복으로 돌고 있기때문에 값 할당 x
    console.log("Hello!");
  }
};

const func4 = (): never => {
  throw new Error();
};

const func2 = (): string => {
  console.log("Hello!");
  return "Hello!"; // 반환값이 문자열로 있을때
};

// 둘은 형제의 위치이기 때문에 부딪힐 수 있다.
