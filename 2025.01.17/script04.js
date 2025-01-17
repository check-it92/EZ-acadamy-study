// 자료형 과 변수

// 자동 형태 변환 (형변환)
// 숫자와 문자를 더하면 = 문자열(string)  // 숫자와 문자를 빼면 = 숫자열 (int)
const one = "20";
const two = 25;

const result = one - two;

console.log(typeof result);

// 수동 형태 변환 (형변환)
// 1) 숫자로의 형 변환 : Number(모든숫자열가능) // parseInt 정수 // parseFloat 실수(소수점)
const str = Number("20");
console.log(typeof str);

const num99 = "17.85181";

console.log(parseInt(num99));
console.log(parseFloat(num99));
console.log(Number(num99));

console.log(Number(true));
console.log(parseInt(true));

// 2) 문자열로 의 수동 변환 toString() / String()

const num77 = 77;
console.log(typeof num77.toString());

//null & undefined => 문자열
console.log(typeof String(num77));

// 논리형(boolean) 으로 형 변환!! <true || false> 참,거짓

console.log(Boolean("Hello!"));
console.log(Boolean(undefined));
// 0, null, undefined 는 불린형으로 했을 때 부정적인 변수이므로 거짓이 나온다.



