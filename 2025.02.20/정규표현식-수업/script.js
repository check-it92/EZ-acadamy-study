// regExp = regular Expression = 정규표현식
/*
문자열 > + 정규표현식(문자로 되어있는 형태를 받아들임) > + 배열형태로 나옴 (객체로 받기 때문에)

1. 패턴 : 찾고자 하는 문자의 형식을 하나의 정형화된 형태로 정의
2. 플래그 : 위에서 정의한 패턴의 값을 찾고자 할 때, 추가적인 옵션을 적용할 수 있음
3. 클래스 : 패턴 내 부가적인 정보를 적용하고 싶을 때, 사용할 수 있는 요소

*/

// decimal
/*
const regExp = /\d{3}/; // 숫자 3개로 되어 있다는 뜻 \d 0~9 사이의 숫자를 가져오고 싶을때 쓰는 클래스
.test() 해당요소가 참인지 거짓인지 판단을 하려고 만든 함수이다.
*/
/*
const regExp = new RegExp(/\d{3}/); // 정규표현식 new라는 예약어를 써서 활용한 것

console.log(regExp.test("Hello")); // 5개
console.log(regExp.test("123")); // 3개

// 내장객체 > class 혹은 생성자 함수
// new라는 예약어!!

// let str = "ES2025 is powerful";
// const pattern = /ES2025/;

// console.log(str.match(/ES6/));
// console.log(str.match(/ES2025/));
// console.log(str.match(pattern));
// console.log(str.replace(pattern, "Love"));

const str = "Love is Powerfull!";

const pattern = /Power\d{3}/;

console.log(str.match(pattern));
*/

/*
const hello = "hello, everyone.";

// const pattern = /com$/i;

// console.log(pattern.test(hello));

console.log(/one.$/.test(hello));
console.log(/e.$/.test(hello));
console.log(/one$/.test(hello));
*/

//const str = "ES2025";

//console.log(str.match(/^[\d]/g)); 이렇게 되면 'ES'로 시작되기 때문에 숫자가 아니어서 null값이 나옴
//console.log(str.match(/[^\d]/g)); // ['E', 'S'] 해당 문자열을 찾아옴 2025를 제외하고 찾아 온 것

/*
const str = "Ooooops";

console.log(str.match(/o{2}/));
console.log(str.match(/o{2,}/)); // o 의 2번째 부터 이상의 것을 다 반복을 하고 싶다는 것 ,로 표현
console.log(str.match(/o{2,}/i)); // o으로 되는 모든것을 대, 소문자 가리지 않고 다 찾아옴
console.log(str.match(/o{2,4}/i)); // o으로 되는 모든것을 대, 소문자 가리지 않고 다 찾아옴 but!, 2-4번째라고 지정해둠
*/

const number = /^[0-9]+$/; // 패턴인데 숫자만 가능한패턴을 만든 것 : 0-9사이의 숫자로 시작하며 그렇게 끝나야함

const positive = /^[1-9]\d*$/; // 양의 정수로 지정 두자리 숫자일때 0으로 끝날수도 있으니 전체로 지정하면서 확인
// +$ , *$ 둘다 동일한 의미

const negative = /^\-[1-9]\d*$/; // 해당요소 앞에 \를 쓰고 "-"를 쓰면 마이너스로 받아들임(음수) // 그게 아니면 연결연산자임!

const engword = /^[a-zA-Z]+$/; // 쉼표 , 이런 구문을 쓰지 않는다. 범위를 연달아 쓸때 그냥 연달아 쓴다.

const enganword = /^[a-zA-Z0-9]+$/; // 이러한 형태의 문자열만 구분하겠다 라는 뜻

const korea = /^[가.힣]+$/; // .은 문자열을 연결 ㄱ+ㅏ 자음과 모음의 첫글자 로 시작 마지막도 그렇게 끝냄

const koreaEnglish = /^[가.힣a-zA-Z]+$/; // 이런식으로 연결해서 사용

console.log(number, positive);
