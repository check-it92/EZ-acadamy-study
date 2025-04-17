// interface
// 객체 전용

interface Person {
  readonly name: string;
  age?: number;
  // sayHi?: (a:number, b:number) => void 인자값을 넣으면 해당기능을 수행할수 없어서 밑에 방식으로 해야한다.
  sayHi?(a: number, b: number): void; // 함수의 메서트 타입을 호출시그니처 key: value 로 인식
}

let person1: Person = {
  name: "David",
  age: 20,
};

let person2: Person = {
  name: "Romeo",
  sayHi: () => {},
};

// person2.name = "Jane"; // 읽기전용이므로 새로운 값을 덮어쓸수 없다.

interface Func2 {
  (a: number): string; //호출시그니처 방식
  b?: boolean;
}

let func2: Func2 = (a) => "Hello World!";

func2.b = true;

// 타입별칭과의 강력한 차이점!! 예시)
type Type1 = number | string;
type Type2 = number & string;

interface Person3 {
  name: string;
  age: number;
}

type Type3 = number | string | Person3;
// type Type3 = number & string & Person3; 이러한 예시는 없다.

const person5: Person3 = {
  name: "David",
  age: 20,
};

// interface 만의 고유기능!! (객체 전문 이터러블한 타입)
interface Animal {
  name: string;
  age: number;
}

/* 
타입 형태의 확장도 가능
type Animal = {
name: string;
age: number;
}

*/

// 확장(상속)의 개념 기존animal에다가 추가 요소가 들어간것

interface Dog extends Animal {
  // name: "돌돌이" // 프로퍼티 재정의 : 고정적 개념
  // name: 777, 오류 타입이 재정의 가능하냐? 불가하다. number, string 타입은 같은 형제선상에 있기 때문에 변경이 어렵다.
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

// 다중확장도 가능하다.
interface DogCat extends Dog, Cat {}

const dogcat = {
  name: "캣독",
  age: 1,
  isBark: true,
  isScratch: false,
};

interface Chiken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "돌돌이", // 선언한 타입만 들어갈 수있다.
  age: 1,
  isBark: true,
};

/*
interface Dog {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chiken {
  name: string;
  age: number;
  isFly: boolean;
}
  */

// 타입별칭
// 재할당이 가능하냐? 타입은 불가
// type Person7 = {
//   name: string;
// };

// type Person7 = {
//   name: string;
// };

// interface 는 가능 유연하게 대처 가능능
// 인터페이스 병합이라 한다.

interface Person10 {
  name: string;
}

interface Person10 {
  // name: number; 이건 오류 먼저 선언한 동일한 이름에 속성이 달라져도 재할당x 덮어씌기가 안된다.
  age: number;
}

const person10: Person10 = {
  name: "Ronaldo",
  age: 20,
};
