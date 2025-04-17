// 유니온타입
// let a: number | string | boolean;

// a = 1;
// a = "hello";
// a = true;

// 배열형태
// let arr: (number | string | boolean)[] = [1, "hello", true];

// 대수타입의 비교 이해예시

// 타입별칭
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

// 앤드단락회로 a도 되면서 b도 된다. a+b (합집합)
type Union1 = Dog | Person;

// 교집합 타입 (a와 b요소)
type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

type Union2 = {
  name: string;
};

let union4 = {
  name: "",
};

union4 = union3;
// union3 = union4; 오류 union4 => 최상위 슈퍼타입이기 때문에

// 서로소
let variable: number & string;
