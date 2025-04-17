/*
// 템플릿 리터럴 타입 > 알아서 배열느낌으로 쭉 나열된다.

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chiken";

// type ColoredAnimal = "red-dog" | "red-cat" | "red-chiken" 이렇게 수작업은 너무 길어진다.

// 해결방안
type ColoredAnimal = `${Color}-${Animal}`;

// 조건부 타입

//type A = number extends unknown;  > 슈퍼타입으로 가능
//type B = number extends string;  > 서로소 타입 으로 불가하지만 조건부로 가능
type C = number extends string ? number : string; // > 삼항조건식으로 거짓이면 그대로 number을 가져가게 되니까 가능

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type D = ObjB extends ObjA ? number : string;

// 제네릭타입을 만나면 더 커진다.
type StringNumber<T> = T extends number ? string : number;

let varA: StringNumber<number>;
let varB: StringNumber<string>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;


// 타입변수를 조건부로
function removeSpaces(text: any) {
  if (typeof text === "string") { // 예외처리 조항
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
};

let result = removeSpaces("hi im winter");
let result2 = removeSpaces(undefined);

// 타입변수를 조건부로
// const removeSpaces = <T>(text: T): T extends string ? string : undefined => {
//   if (typeof text === "string") { // 예외처리 조항
//     return text.replaceAll(" ", "") as any; // 타입단언 : 미정이기때문에 미래를 얘기
//   } else {
//     return undefined as any;
//   }
// };
*/

type StringNumber<T> = T extends number ? string : number;

let c: StringNumber<number | string>;
