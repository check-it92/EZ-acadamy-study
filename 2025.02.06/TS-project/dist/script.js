let numA = 100;
let strA = "hello";
// 이 두가지도 타입이다.
// let message: undefined = undefined;
// message = null;
// let num: 100 = 100;
// // 이렇게 되면 100이라는 타입이 되는 것이다.
// num = 200;
// 이렇게 되면 엄격하게 100만 받게 되므로 오류가 난다. 안받아여 진다.
// 배열의 타입정의 각각 넘버와 문자열로 구분 된다.
const numArr = [1, 2, 3];
const strArr = ["hello", "world"];
// 배열의 타입 중 불린도 있지만.
let boolArr01 = [true, false, true];
boolArr01 = [true, false];
// 재할당 가능
// 배열형식만 갖춰지면 array 도 가능한데 <제네릭타입> 안에 정의를 해놔야 한다.
// 제네릭(Generic) = General 제너럴 이라는 종합이라는 뜻이다.
const boolArr02 = [true, false, true];
const strArr02 = ["hello", "world"];
// 숫자와 문자가 종합적으로 섞여있다면?
// 합집합의 의미로 '|' 이기호를 써서 쓸 수 있다.
const muliArr = [1, "hello"];
// 중첩이 될때 대괄호를 두번 써주면 된다. 외부(내부)의 개념.
// 혼합되었을때도 이렇게 쓰면 된다.
const doubleArr = [[1, "2", 3], [4, 5], [6]];
//튜플
const tup1 = [1, 2];
let tup2 = [1, "hello", true];
let tup3 = [1, 2];
tup3.push(1);
console.log(tup3);
export {};
// tup2 = [1,2]; 각자의 맞는 몫을 규제 해놨기 때문에 불필요한 방식을 작동하지 않는다.
//tup1 = [1, 2, 3];  이렇게 되면 에러가 됨 위에 서 정확하게 규제를 해놨기 때문 이게 => 튜플!
