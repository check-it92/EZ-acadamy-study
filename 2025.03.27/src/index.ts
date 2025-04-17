let num1: number = 10; // number
let num2: 10 = 10; // literal
// num1 = supertype
// num2 = subtype

// supertype > subtype : upcasting
// subtype > supertype : downcasting => any type

num1 = num2;
// num2 = num1;

// upcasting 된 상황
let a: unknown = 1;
let b: unknown = "hello!";
let c: unknown = true;
let d: unknown = undefined;

// downcasting 된 상황 => 결과 불가x!
let unknownVar: unknown;
// let num: number = unknownVar;
// let str: string = unknownVar;

// 가장 최하위 요소 never 은 받아들일수 없다. 다운캐스팅 불가!
// let test01: never = 10;
// let test02: never = "string";
// let test03: never = true;

// interface IAnimal {
//   // name: string,
//   // color: string,
//   [key: string]: string;
// }

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "Brown",
  breed: "진도",
};

let cat = {
  name: "야옹",
  color: "white",
  country: "일본",
};

// dog 가 값을 1개더 가지고 있기 때문에 상위 가 아닌가?
// 객체형태의 대수타입을 비교할때는 객체안에 있는 프로퍼티(*속성)를 기준으로 타입에대한 대수를 결정한다.
// => 값을 많이 가지고 있을수록 subtype / 값을 적게 가지고 있을 수록 supertype 가 된다.
// 값이 많아질수록 점점세분화 되기 때문에 하위 로 되는 것이고
// 값이 적어질수록 공통된 부분들이 많기 때문에 포함된게 많아서 상위로 되는것이다.

animal = dog;
animal = cat;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book = {
  name: "TS",
  price: 30000,
  // skill: "react", 위에 타입을 지정해놓은 속성을 초과 함 바로 오류!
  // 이것을 객체의 초과 프로퍼티(속성) 검사 : 오류판단
};
// 타입을 아무것도 안쓰면 자동으로 any 이다.
// book 이 슈퍼타입아다.

let programmingBook: ProgrammingBook = {
  name: "typescript",
  price: 3000,
  skill: "reactjs",
};

book = programmingBook;
// prograningBook = book;

// upcasting 상황에서 상위요소가 하위요소를 품으면서 그안에 속성까지 품게됨
// 객체의 대수타입을 활용하여 해당 오류를 벗어남(우회방식)

let book3: Book = programmingBook;

const func = (book: Book) => {};

func({ name: "리액트", price: 30000 });
// 매개변수 book의 객체로 안에 들어가는 인자값을 입력

// func({ name: "리액트", price: 30000, skill: "react" }); 
// 이것을 객체의 초과 프로퍼티(속성) 검사 : 오류판단

// func(programmingBook); 이렇게 되면 속성검사에 안걸리고 하위요소의 skill 도 포함되므로
// skill 을 포함시킬수 있다.

