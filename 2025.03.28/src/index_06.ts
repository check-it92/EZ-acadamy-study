// 타입의 호환성

type A = () => number; //슈퍼타입
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; 오류! downcasting 반환값 타입에 대한 호환

/* 
type A = () => number; - 어떤 숫자든 반환할 수 있는 함수 타입
type B = () => 10; - 정확히 숫자 10만 반환하는 함수 타입

슈퍼타입일수록 갈수있는곳이 많고 수용할수 있는게 많다. 호환할수있는게 많냐? 그 차이
서브타입은 한정적
*/

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // upcasting
d = c; // downcasting

// 함수의 매개변수 개수가 동일하면서, 반환값이 없는 경우

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; 이경우에는
dogFunc = animalFunc;

// 함수의 매개변수의 개수가 다른경우
// 반환값이 없는 경우

type Func1 = (a: number, b: number) => void; // 슈퍼타입

type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; 오류 갯수가 적은녀석이 많은녀석을 포함하려 해서 역효과

/*
함수의 경우!!
dogFunc 가 넓게 범위를 가지고 있고 animalFunc를 안을수 있기 때문에
대수 차이가 역전이 되어 dogFunc가 슈퍼타입이 된다. 
수용할수 처리 요소가 더 다양하고 갈수 있느곳 이많기 때문에 슈퍼타입이다.
(상대적으로 경우의 수를 많이 만들수 있기 때문에)
*/

// 함수 오버로딩

// 함수의 선언부
function func7(a: number): void;
function func7(a: number, b: number, c: number): void;

// 함수의 구현부
function func7(a: number, b?: number, c?: number) { // 선택적 인자값 (b, c)
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c); // 인자값이 3개일경우
  } else {
    console.log(a * 20); // 인자값이 1개일경우
  }
}

func7(1); 
// func7(1, 2); // 인자값이 2개일경우 해당 되는 예제가 없으므로 오류가 난다.
func7(1, 2, 3);
