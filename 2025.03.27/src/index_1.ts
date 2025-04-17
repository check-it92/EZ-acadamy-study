// (원시타입)
// number

// 재할당x 고정값이기 때문에 123이라는 값이 정의됨
const num1 = 123;

// 재할당 가능하기 때문에 포괄적으로 number이라는 타입으로 정의
let num2 = 456;
// > 재할당
num2 = 789;
// 형변환은 둘이 동일한 형태가 아니기 때문에 바로 오류 처리가 된다.
// num2 = "123";

let num3: number = 700;
// num3: (타입주석) 이라 한다. 어떤 타입으로 정의 할 것인지 정해놓고 가는것

// String

let str1 = "Hello";
str1 = "world";

let str2: "Jae Ki" = "Jae Ki";
// 오류! str2 = "JaeKi";
// 타입주석으로 내가 타입을 명확하게 지정을 해버렸기 때문에 const 처럼 인식을 해서 특정값만 인식이 된다.
// 이게 리터럴 타입의 형태이다.

// str1 = 1; = > 형태 어긋나서 오류

// Boolean

let bool = true;
bool = false;

// null 이란 값도 정의가 된다. 없는 값이지만 없는 값을 무한대로 정의 할수 없기 때문에 null = 제로값 으로 인식을 설정!
// undefined 도 같은 의미!
// 둘다 필요하다. 예외처리 조항 처럼

let test1: null = null;
test1 = null;

let test2: undefined = undefined;
test2 = undefined;

// 예외사항
let num4 = 7;
// num4 = null; 오류
// num4 = undefined; 오류

let numArr = [1, 2, 3];
numArr = [7, 8, 9];

// numArr = ["7",8,9] => 문자열 혼용X
// 배열안에 반드시 숫자만 동일하게 타입을 들어가야한다.

let strArr: string[] = ["Hello", "World"];
let booArr: boolean[] = [true, false, true];

// 제네릭 타입으로 변형
let boolArr: Array<boolean> = [true, false, true]; // 불리언 값만 단일값
let bool1Arr: Array<boolean | number | string> = [true, false, true, 1, "node"]; // 제네릭, 유니온타입으로 여러 값을 설정

// 유니온 타입으로 변형
let muliArr: (string | number)[] = [1, "hello"]; // 이것또한 맞는 방법

// 중첩배열 = 다차원배열 (원리는 간단하다.)
let doubleArr: number[][] = [[1, 2, 3], [4, 5], [6]];
// 혼용일때
let double1Arr: (string | number)[][] = [[1, 2, "3"], [4, 5], [6]];

// tuple 타입
let tupl: [number, number] = [1, 2]; // 반드시 number이라는 값과 '2'개의 값만 받을수 있음
// tupl = [1,2,3];  오류 갯수초과
// tupl = ["1", 2]; 오류 형타입 다름
// 튜플을 유연하게 쓸 이유?  없다 애초에 엄격하게 쓰려고 한것이기 때문에 그럴바엔 배열을 써라!

tupl.push(1); // 이렇게 함수를 쓴다? 규칙 깨짐 추가 가 된다. [1,2,1] 엄격함x

// 그럼 튜플 왜쓰는거지? 밑에 예시
const users: [string, number][] = [
  ["David", 1],
  ["Jane", 2],
  ["Juliet", 3],
  ["Brown", 4],
  // [5, "Whitney"],  바로 오류 찾아줌!!
];

// 이렇게 과한 자료, 배열들 사이 또는 자료들 사이 미세한 차이(순서, 자료형, ...) 를 오류방지 차원으로
// 명확한 규칙 하에 이루어 질때(회원정보 관리 등..) ID, PW => 순서 명확
// 내가 몇백개 나 되는 오류지점을 일일히 찾을 필요 없이 전제조건을 즉각적으로 걸어 놓은 것것

// 예외사항
let num10: number = 10;
let test10: unknown;

// 대수타입!!
// num10 = test10; 오류
test10 = num10;
// > 왜 1은 안되고, 2는 되냐? 이게 타입별로 포함할수 있는 크기가 다르기때문에 미세한 차이 이다.

// 참조타입 자료형 (객체)
// 1. 객체 타입 정하기 object => 아무도 쓰지 않는다.
// let user: object = { // 단순히 객체 만 되면된다. (전체 뭉뚱그려서) 세밀한 자료값을 못찾아온다.
//   id: 1,
//   name: "David",
// };

// 2. 객체 타입 정하기 => 리터럴 타입으로 배정했을때 (객체 리터럴 타입)
let user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "David",
};

// let user2 = {
//   id: 3,
//   name: "Jane",
// };

/* 문제점 1. 객체가늘어날 수록 정의해야 하는 것도 늘어나므로 가독성 불편 코드 길어짐
   문제점 2. 재활용 불가 (리터럴로 썻기 때문에) 유사한 형태의 객체가 나타나더라도 불가!
*/

// 3. 객체 타입 정하기 : Interface 방법
// 기본틀을 만들어 놓고 해당 변수명을 타입으로 대입만 해주는것
// 재활용 가능 그외 에 추가적으로 옵션을 붙일수도 있다.

// interface User {
//   id: number;
//   name: string;
// }
interface User {
  readonly id: number; // 고유한 식별값으로 readonly로 고정할수 있다.
  name?: string; // optional property : 선택적 프로퍼티 // 속성
}

interface User {} // 겹쳐쓰면 안좋지만 이렇게 해도 각자 독립적인것으로 인식이 된다. 그치만, 다른이름 사용하는 걸 추천!!

let user2: User = {
  id: 3,
  name: "Jane",
};
let user3: User = {
  id: 4,
  name: "Brown",
};
// 만약, 이름이 없는경우(익명으로) 그럼 이 값을 위한 인터페이스 등장해야함
// interface User01 {
//   id: number;
// }

// let user4: User01 = {
//   id: 5,
// };
// 그럼 새로운 변수 값마다? 새로 줘야 할까? // => 해결책이 있다.

let user4: User = {
  id: 5,
};
// ? 옵션을 줌으로써 같은 변수타입으로 유연하게 사용가능함

// user4.id = 7; -> 새로운 아이디 방지 할 수 있다.

// 4. 객체 타입 정하기 : 타입별칭 = type alias = as로 축약해서 쓴다.
// 동일한 Scope 안에서 동명의 타입 별칭을 사용할수 없다.
// 동일하지 않은 Scope 에선 사용가능 ex) 글로벌변수가 아닌 지역변수일땐 사용가능
// 객체 타입을 보다 유연하게 사용하고자 할 때, 사용하면 보다 효율적임!!

type Usernick = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// type Usernick = {} // 에러가 난다. 동일한 변수를 중복선언한걸로 인식이 되기 때문
/* const test12 = () => {
type Usernick = {}
} 이때는, 사용가능 그치만 사용하지 않는 것을 추천 (동일 변수명으로)
*/

let user5: Usernick = {
  id: 5,
  name: "통키",
  nickname: "피구왕",
  birth: "2002.02.02",
  bio: "내꿈은 피구왕",
  location: "경기도 광역시 오산동",
};
// import nick as name from "./dfdsfefef" 이렇게 찾아올때 as로 쓰인다.

// 타입 시그니쳐 방법
// [key: string]: string;

// interface ICountryCode {
//   Korea: string,
//   UnitedState: string,
//   UnitedKingdom: string,
// [key: string]: string;
// }

type CountryCode = {
  //  Korea: string;
  //   UnitedState: string;
  //   UnitedKingdom: string;
  //   Japan: string;
  [key: string]: string;
};

let countryCode: CountryCode = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  Japan: "jp",
  // Maxico: 1, 갑자기 이렇게 변수가 생기지 않는 한 지속가능하다.
};

// Enum = 열거형 타입 온점표기법으로 불러와서 사용
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user9 = {
  name: "David",
  role: Role.ADMIN,
};
