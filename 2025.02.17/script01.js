/*
const str = "Good morning, everyone. Beautiful morning.";

indexOf("문자열")
// 모든 파일은 왼쪽 에서 부터 읽기 때문에 양수로 나아간다.
console.log(str.indexOf("morning"));
// 존재하지 않는 문자를 찾아올때는 무조건! -1로 반환하게 된다.
console.log(str.indexOf("evening"));

// 두 번째 중복되는 문자열을 찾을때 = > 최초의 문자열을 변수로 묶고 +(숫자)로 증가해주면 된다.

let firstIndex = str.indexOf("morning");
console.log(str.indexOf("morning", firstIndex + 1)); // 두번째 인자값에 내가 찾고자 하는 값을 더해주면 된다. 1+1=2 번째째
*/

// startsWith > ~~과 함께 시작하는 것이냐? 불린:논리형 값으로 반환 (참,거짓)
// <-> 반대의 개념으로 endWith 값도 있다.
const str1 = "Hello, everyone.";

// 시작되는 위치 설정해서 물어보기 몇번째 위치에서 시작하는지 순번 (구버전)
console.log(str1.startsWith("l", 2));

// 이 구문은 전체의 길이에서 어느 위치에 있냐? 라고 길이를 물어보는 것
console.log(str1.endsWith("one.", 16));
console.log(str1.endsWith("lo", 5));

// indexOf("문자열") > 몇번째 자리에서 시작하는게 맞냐? 라고 물어보는것 (구버전)
console.log(str1.indexOf("every") === 7); // 긍정
console.log(str1.indexOf("every") !== 7); // 부정

// 신 버전!! includes("문자열") 전체 문자열이 이런 단어가 있냐? 라고 물어보는것
console.log(str1.includes("every"));
console.log(str1.includes("one"));
console.log(str1.includes("s"));

//console.log(str1.startsWith("문자열"));
// console.log(str1.startsWith("Hello"));
// console.log(str1.startsWith("He"));
// console.log(str1.startsWith("he")); // 대소문자에 대한 구분이 중요하다!!
// console.log(str1.startsWith("Hello, eve"));

/*
console.log(str1.endsWith("everyone."));
console.log(str1.endsWith("Everyone."));
console.log(str1.endsWith("one."));
console.log(str1.endsWith("lo, everyone")); // 특수기호 .?!/ 까지 문자열로 취급
*/
