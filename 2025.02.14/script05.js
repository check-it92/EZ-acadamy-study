const book1 = {
  title: "Javascript",
  pages: 648,
  buy: function () {
    console.log("I did buy this book");
  },
};

// 객체 자료구조를 배열로 변환시킬 수 있을까?
const keys = Object.keys(book1);
const values = Object.values(book1);
const entries = Object.entries(book1); // 외부 데이터 API를 추출해올때 요긴하게 쓰인다.

console.log(entries);
