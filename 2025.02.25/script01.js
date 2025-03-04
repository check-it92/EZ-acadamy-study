// 구조 분해 할당
// 원래대로 하려면 인자값과 자리값을 설정을 해야하는데
// const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

// 다이렉트로 대입연산식으로 적용하는게 "구조분해할당 법"

// const [apple, peach] = ["사과", "복숭아"]
// const [apple, peach] = fruits;
// console.log(apple, peach);

const seasons = ["봄", "여름", "가을", "겨울"];

// const [spring, summer] = seasons;
const [spring, , fall] = seasons; // 만약 제외하고 싶은 요소 가 있으면 쉼표로 빈 문자로 만들고 입력을 하면 된다.

console.log(spring, fall);

const char = ["kim", "lee", "jeong", "choi"];

const [teacher, ...students] = char; // 나머지 전개연산자들을 ...로 구분
console.log(teacher, students);

// 객체의 구조분해할당!
// 그렇기 때문에 {} 로 불러오는 것이다.

const member = {
  name: "David", // 한쌍의 프로퍼티 (key : value);
  age: 20,
};

//const { username, age } = member;  객체의 key값과 / 구조분해한 변수의 key 값이 같아야 한다.
const { name: username, age } = member; // 객체의 key값과 / 구조분해한 변수의 key 값을 같게 변경하는 방법
console.log(username, age);

// 객체의 구조분해할당 - 2
// 여러개의 중첩될 경우 이렇게 : 콜론으로 각각의 객체,배열을 하면 된다.

const student = {
  name: "David",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log();
