// 브레이크(종결)문
/*
for (let i = 1; i <= 10; i++) {
  if (i === 6) break; // 6이 되는 순간 바로 종결을 짓는다.
  document.write(i, "<br />");
} */

// 컨티뉴 문
/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // 참일려면 '짝수'여야 한다는 얘기이다. / 건너띄고 재개하라 라는 뜻의 continue
  document.write(i, "<br/>");
}
*/

// 중첩 for문을 가지고 행과 열 만들기
/*
for (let i = 1; i <= 3; i++) {
  for (let k = 1; k <= 2; k++) {
    document.write(`${i}행 ${k}열`, "<br />");
  }
  document.write("<br/>");
} */

// forEach() 문은 ---반복,증감,조건식이 붙지 않는다.
// arr 배열의 전유물 why?? 이터러블한 객체의 전용도구

const marvels = ["ironman", "hulk", "captain", "stranger"];

// for (let i = 0; i < marvels.length; i++) {
//   console.log(marvels[i]);
// } 일반 for문 형식식

//forEach() 함수선언 -> forEach(fuction() {}) 함수안에 또 함수 '콜백'함수라 한다.
// 함수선언와 호출이(조건식없이) 동시에 이루이지며 , index 순서와, arr 전체배열의 정보값도 알수 있다.
marvels.forEach(function (marvels, index, array) {
  console.log(marvels, index, array);
});
