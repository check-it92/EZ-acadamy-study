// 사용자정의 객체 생성
// 만일 복수의 데이터 중에서 내가 원하는 자료값만 찾고 싶다면?
// 생성자함수!! 를 활용하면 된다.

const newBook = {
  title: "Javascript",
  page: 360,
  price: 32000,
  author: "박세진",
  published: "2025-04-22",
  question: function () {
    console.log(`${this.author}의 따끈한 신간 도서입니다.`);
  },
};

newBook.question();

// 생성자함수 : 객체를 선출하기 위한 함수 표기할때 첫글자에 대문자로 써준다.

function Book(title, page, price, author, published) {
  this.title = title;
  this.page = page;
  this.price = price;
  this.author = author;
  this.published = published;
  this.question = function () {
    console.log(`${this.author}님의 따끈한 신간 도서입니다!`);
  };
}

// 생성자 함수를 만들고 나서 해당 생성자함수를 사용하고자 할때에는 반드시 new 예약어를 쓴다.
// 프로토타입을 쓴것이고 오브젝트(객체) 로 인식이 된것이다.

const book1 = new Book("Javascript", 360, 32000, "박세진", "2025-04-22");

console.log(book1);
book1.question();
