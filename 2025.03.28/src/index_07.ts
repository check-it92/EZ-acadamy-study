// 사용자 정의 타입가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScrath: boolean;
};

type Animal = Dog | Cat;

// in 타입가드 형식
// const wraning = (animal: Animal) => {
//   if ("isBark" in animal) { // 강아지의 요소를 찾아올수 있게
//     console.log(animal.isBark ? "짖습니다." : "안짖습니다."); // 삼항정리
//   } else if ("isScrath" in animal) { // 고양이
//     console.log(animal.isScrath ? "할큅니다" : "안할큅니다.");
//   }
// };

const isDog = (animal: Animal): animal is Dog => {
  // 참일 경우
  return (animal as Dog).isBark !== undefined; // 타입 단언의 형식
};

const isCat = (animal: Animal): animal is Cat => {
  return (animal as Cat).isScrath !== undefined; // undefined가 아닌 경우 니까 참인 값이 올수 있다는 얘기이다.
};

const warning = (animal: Animal) => {
  if (isDog(animal)) {
    console.log(animal.isBark ? "짖습니다" : "앚짖습니다.");
  } else {
    console.log(animal.isScrath ? "할큅니다." : "안할큅니다.");
  }
};

// : animal is Dog 이 부분이 사용자가 정의 하는 타입가드 부분인데
/* 
warning 부분에서는 정의 내린게 없기 때문에 찾아오지 못할 수 있다.
그런 부분에서 한번더 사용자가 정의 한 타입 부분을 불러올 수 있게 정의 해주는 타입가드가 필요한것이다.
*/