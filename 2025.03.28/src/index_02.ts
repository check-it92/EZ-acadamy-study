// 타입단언 = as (해당타입); 으로 쓰인다.

type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;
person.name = "";
person.age = 20;

type Dog = {
  name: string;
  color: string;
  // breed: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도", //초과프로퍼티검사에 걸린다
} as Dog; // => 타입 단언

// let dogAI :DogNew ={
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// }

// //슈퍼프로퍼티 검사를 우회해서 넘어간 케이스
// //슈퍼타입 & 서브타입
// //업캐스팅 & 다운 캐스팅
// let dogNew: Dog = dogAI

//타입단원--------------------------------------------

let num1 = 10 as never;
// num1 = 20;

let num2 = 10 as unknown;
num2 = "hello";

// let num3 = 10 as string;

// 중복으로 쓸수 = 다중단언(대수비교를 따져서 꼬리물기가 가능하다.)
let num3 = 10 as unknown as string;

//const 단언 => 상수로써 변경(비주류)-> 애초에 const로 설정하면 되니까!
let num4 = 10 as const;

//타입단원--------------------------------------------

//let num3 = 10 as string; //같은 형제 끼리는 타입 단원이 될 수 없다
//서로소 타입이기때문에 같은 교집합에 들어갈수 없다

//다중단언
//let num3 = 10 as unknown as string; // 꼼수를 썻다
//언노운을 갔다가 다시 스트링을 간다

// 리터럴 타입
// let num4: 10 = 10;
// const num4 = 10;

// Non Null 단언(null을 쓰지 않을수 있다.)
type Post = {
  title: string;
  author?: string; // 선택적 프로포터(있어도 되고 없어도 되고 가능성o)
};

let post: Post = {
  title: "게시글1",
}

const len: number = post.author!.length; // ! 마크가 undefined 타입이 나타날수 도 있다라는 걸 정의 함

