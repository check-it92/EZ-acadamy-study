"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//<> 제네릭 타입으로 타입을 선택해서 가져올수도 있음 (함수설정)
//<예외처리 조항>
// const goToSchool = (user: Iuser<Istudent>) => {
//   // 매개변수 지정
//   if (user.profile.type !== "student") { // 타입가드 유니온타입에 대입하여 체크기능 수행하려고고
//     console.log("잘 못 오셨습니다.");
//     return;
//   }
//   const school = user.profile.school;
//   console.log(`${school}으로 등교 완료!`);
// };
// 타입변수를 활용한 축약버전 직접적으로 입력한 것
const goToSchool = (user) => {
    const school = user.profile.school;
    console.log(`${school}으로 등교 완료!`);
};
const developerUser = {
    name: "David",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "David",
    profile: {
        type: "student",
        school: "EZEN",
    },
};
// goToSchool(developerUser); // student 가 아니라 예외처리 조항에 걸림
goToSchool(studentUser);
