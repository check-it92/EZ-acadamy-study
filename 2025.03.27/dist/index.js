"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum = 열거형 타입 온점표기법으로 불러와서 사용
// enum Role {
//   ADMIN = 0, // 관리자는 0번이라고 정의를 하고 쓰는것! 그럼 관리자=0 대입이 되어서 쉽게 이름에서 내용이 보인다.
//   USER = 1,
//   GUEST = 2,
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user9 = {
    name: "David",
    role: Role.ADMIN,
};
const user8 = {
    name: "Jane",
    role: Role.USER,
};
const user7 = {
    name: "Juliet",
    role: Role.GUEST,
};
console.log(user9, user8, user7);
