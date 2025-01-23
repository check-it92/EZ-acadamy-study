// Interable 객체 & 반복문을 지배하는 자가 Js의 중급단계를 지배한다.

// 반복하게 하려고 할 때,
/* 자료구조 & 알고리즘 커리큘럼
  어떤 경우에 배열하는 것인가? 문법, 어떤 자료구조가 현 문제를 해결하는데 가장 효율적인가?
  그럴 때, 시간복잡도를 측정한다.

  ** 시간복잡도란? 현 자료구조 및 알고리즘이 해당 문제를 해결하는데 걸리는 시간
  1. 빅오  2. 빅세타  3. 빅오메가      */

// 기본형 반복문
// 일반 for문
// 반드시 자바스크립트 내 Iterable(순회할수 있는) 객체 사용가능 -> 배열이라고 생각해라라
//예제) i = 0, i < 5, i++ 이런식 i = index의 약자
/*for(초기값; 조건식; 증감문) {
    반복문실행
  } 

const studednts = ["Park", "Kim", "Lee"]; // 배열의 갯수 파악
for (let i = 0; i < 3; i++) {
  console.log(studednts[i]);
} */

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 7 !== 0) {
    document.write("<p class='red'>" + i + "</p>");
  } else if (i % 5 !== 0 && i % 7 === 0) {
    document.write("<p class='green'>" + i + "</p>");
  } else if (i % 5 === 0 && i % 7 === 0) {
    document.write("<p class='aqua'>" + i + "</p>");
  }
}


// 자바스크립트로 스타일 집어넣기
const reds = document.querySelectorAll(".red");
console.log(reds);

reds.forEach((red) => {
  red.style.color = "red";
});

const greens = document.querySelectorAll(".green");
console.log(greens); // 유사 배열이라 부른다. but. 상황에 따라 for문 활용을 못할 수 있다. -> 한번 우회해야 한다.

reds.forEach((green) => {
  green.style.color = "green";
});

const aquas = document.querySelectorAll(".aqua");
console.log(aquas);

reds.forEach((aqua) => {
  aqua.style.color = "aqua";
});
