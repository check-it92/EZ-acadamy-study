"use strict";
// class 사용
Object.defineProperty(exports, "__esModule", { value: true });
class NumberList {
    list;
    // Field 생략 가능 이유? -> 접근제어자를 써서
    constructor(list) {
        this.list = list;
    }
    push(data) {
        // 메서드 함수 (커스터마이징 하겠다.)
        this.list.push(data); // 기능적 함수 우리가 밀어넣겠다.
    }
    pop() {
        return this.list.pop(); // 배열에서 쓸수 있는 기능
    }
    print() {
        console.log(this.list);
    }
}
const numberList = new NumberList([1, 2, 3]);
console.log(numberList);
