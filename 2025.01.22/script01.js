// for ~ of 문문
// const marvels = ["Ironman", "spiderman", "Thor", "Stranger"];

// for (let marvel of marvels) {
//   console.log(marvel);
// }

// for ~ in 문
/*
const jsBook = {
  title: "재미있는 자바스크립트",
  pubDate: "2025-03-01",
  pages: 270,
  finished: true,
  review: function () {
    console.log("겁나 재미있어요!");
  },
};

for (let key in jsBook) {
  console.log(`${key} : ${jsBook[key]}`); // 대괄호 표기법 만가능
} */

let stars = parseInt(prompt("별의 갯수:"));

// while (stars > 0) {
//   document.write("*");
//   stars--; //없었다면 반복문이 영원히 반복되었을 겁니다. 
// }

// 참이든 거짓이든 무조건 한번은 시동을 한다.
do {
  document.write("*");
  stars--;
} while(stars > 0);
