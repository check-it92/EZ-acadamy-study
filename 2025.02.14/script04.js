// 객체는 최소한 자바스크립트에서 만큼은 최초의 근원이다.
// 사전에 속성이 준비되어 있는 것이다.

const arr = new Array(); // 배열 형식 또한 객체 형식이다.
console.log(typeof arr);

// 배열 = iterable -> 순회할수 있는 객체이다.

const bag = {
  type: "backpack",
  color: "blue",
  price: 30000,
};

//
for (let key in bag) {
  // 백안에 있는 각각의 key 라는 이름의 변수의 값을 찾아오겠단 의미
  // 또한 키값을 찾아오기에 value 값을 찾아올수가 있다.
  console.log(`${key} : ${bag[key]}`); 
  // 여기서 [] 대괄호 표기법을 쓴이유는 key라는 문자의 값을 찾아온것이기 때문
  // key를 온점표기법으로 쓸 경우는 문자열로 들어오기 때문에 인식을 못한다.
  
}
