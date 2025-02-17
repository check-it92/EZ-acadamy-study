// 생성자함수의 중복 = 생성자함수 + 생성자함수

// 기존의 생성자 함수명을 쓰고 .call() 함수를 쓰면 된다.

// 원본 
const Book = function (title, price) {
  this.title = title;
  this.price = price;

  Book.prototype.buy = function () {
    // 해당 새로운 생성자에는 함수가 새로 없으니 새로 부여한 것이다.
    console.log(`${this.title} 전공서적, ${this.price} 을 구매하였습니다!`);
  };
};

const book1 = new Book("새로운시작", 50000);
book1.buy();

// 새로운 생성자
function TextBook(title, price, major) {
  Book.call(this, title, price) // 이때 기존의 this객체가 가리키는 영역 까지 가져와서 적용시켜야 동일시 된다.
  this.major = major;
}

TextBook.prototype.buyTextbook = function() { // 해당 새로운 생성자에는 함수가 새로 없으니 새로 부여한 것이다.
  console.log(`${this.major} 전공서적, ${this.title} 을 구매하였습니다!`);
};

Object.setPrototypeOf(TextBook.prototype, Book.prototype) // 어떤 생성자함수의 상속을 받는 객체이다. 라는 함수이다.
//                   상속을 받을 대상 과   상속값의 원본
const book2 = new TextBook("알고리즘", 5000, "컴퓨터공학");
console.log(book2);

book2.buyTextbook();