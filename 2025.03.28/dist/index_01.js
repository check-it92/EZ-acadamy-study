"use strict";
// 유니온타입
// let a: number | string | boolean;
Object.defineProperty(exports, "__esModule", { value: true });
let intersection = {
    name: "",
    color: "",
    language: "",
};
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: "",
};
let union3 = {
    name: "",
    color: "",
    language: "",
};
let union4 = {
    name: "",
};
union4 = union3;
// union3 = union4; 오류 union4 => 최상위 슈퍼타입이기 때문에
// 서로소
let variable;
