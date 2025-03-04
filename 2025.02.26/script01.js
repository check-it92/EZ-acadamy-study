// Map()
// 클래스 혹은 생성자 함수 => 프로토타입 객체

/* 왜 만들었을까?
주요 자료구조 : 객체 & 배열
객체 : 키 & 값 한쌍 프로퍼티 구성!!!
반복적인 무언가를 실행 할 수 없음
객체안에 있는 속성들을 인덱스 화 할수 있음
*/

// 객체 & 배열 장점만 추출해서 자료구조!!

// Set() >  삽입 순서는 각 요소가 add() 메서드에 의해 Set에 성공적으로 삽입된 순서(즉, add()가 호출될 때 이미 Set에 동일한 요소가 없는 경우)에 해당합니다

const bag = new Map();

// Method Chaining 기법
// 2개의 중첩문을 한번에 쓰는것
bag.set("color", "red").set("price", "30000");

// map() 와 관련된 프로토타입 기능들
/*
bag.has("age") 참 , 거짓을 구분하는 기능능
false
bag.has("price")
true
bag.get("price") key값을 가져오면 value 값을 가져오는 기능
'30000'
bag.get("color")
'red'
bag.size length 갯수를 알려주는 기능
2
bag.delete("color") 온점표기법으로 remove 지우듯이 해당 객체를 수정하는 역할
bag.clear() 전체 지우는 기능
*/

const myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capacity", "300ml"],
]);

const myCupIte = myCup.keys();

myCupIte.forEach((item) => {
  console.log(item, typeof item);
});

const myCupIte02 = myCup.values();

myCupIte02.forEach((item) => {
  console.log(item, typeof item);
});

const myCupIte03 = myCup.entries();

myCupIte03.forEach((item) => {
  console.log(item, typeof item);
});

// Iterable : 반복순회 할 수 있는 (*형용사)
// Iterator : Iterable한 객체가 된 요소 > 반복가능 프로토콜을 구현하여 전개 구문와 forEach, for문 루프같은 반복이 필요한 대부분의 구문에서 맵을 사용할 수 있게 합니다. 맵의 키-값 쌍을 생성하는 반복자를 반환합니다. (문자열로 반환)
