"use strict";
// 타입스크립트에서 클래스 생성자
Object.defineProperty(exports, "__esModule", { value: true });
// 자바스크립트에선 없는 기능 
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동가능!`);
    }
}
