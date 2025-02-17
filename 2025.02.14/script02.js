// 객체를 반복적으로 사용하기 위해 나온 class 함수 (생성자함수의 윗 단계)
// class 변수명 - constructor = 예약되어 있는 키워드 이다.
// 이후에 타입스크립트에서는 클래스 함수가 대표적이다.
// 클래스 함수의 장점은 또한 상속이 가능하다.

class Book {
  constructor(title, page, price, author, published) {
    // constructor 이라는 내장 함수가 = 생성자함수역할을 함
    this.title = title;
    this.page = page;
    this.price = price;
    this.author = author;
    this.published = published;
  }

  question() {
    console.log(`${this.author}님의 따끈한 신간 도서입니다!`);
  }
}

const book1 = new Book("Javascript", 360, 32000, "박세진", "2025-04-22");

console.log(book1);
book1.question();
