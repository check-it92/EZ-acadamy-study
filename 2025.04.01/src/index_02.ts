interface Istudent {
  type: "student"; // 리터럴타입 해당 student 만 올 수 있게끔끔
  school: string;
}

interface Ideveloper {
  type: "developer";
  skill: string;
}

// interface Iuser<T> {
//   // 타입변수
//   name: string;
//   profile: Istudent | Ideveloper; // 유니온타입 a이거나 b
// }

// 직접적으로 유니온타입x
interface Iuser<T> {
  // 타입변수
  name: string;
  profile: T; // 직접 타입변수 입력
}

//<> 제네릭 타입으로 타입을 선택해서 가져올수도 있음 (함수설정)
//<예외처리 조항>
// const goToSchool = (user: Iuser<Istudent>) => {
//   // 매개변수 지정
//   if (user.profile.type !== "student") { // 타입가드 유니온타입에 대입하여 체크기능 수행하려고
//     console.log("잘 못 오셨습니다.");
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}으로 등교 완료!`);
// };

// 타입변수를 활용한 축약버전 직접적으로 입력한 것
const goToSchool = (user: Iuser<Istudent>) => { // 여기서 아예 타겟을 지정해버린것 그래서 타입변수에서 이부분만 가져올수 있는것
  const school = user.profile.school;
  console.log(`${school}으로 등교 완료!`);
};

const developerUser: Iuser<Ideveloper> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: Iuser<Istudent> = {
  name: "David",
  profile: {
    type: "student",
    school: "EZEN",
  },
};

// goToSchool(developerUser); // student 가 아니라 예외처리 조항에 걸림
goToSchool(studentUser);

