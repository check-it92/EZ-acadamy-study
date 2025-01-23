let currentYear, birthYear, age;

currentYear = 2025;

birthYear = prompt("당신이 태어난 해는?", 2000);
age = currentYear - birthYear + 1;
// - 연산자가 들어가서 산수연산자로 자동 입력이 된것인데 + 로 하면 문자열로 입력이 됐을 것이다.

console.log(typeof birthYear);
console.log(age);
