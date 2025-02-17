// 클래스로 풀어보았을때

// 원본
// class BookC {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }

//   buy() {
//     console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
//   }
// }

// const book1 = new BookC("자료구조", 15000);

// book1.buy();

// 상속받는 새로운 클래스 함수

class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
  }
}

const book1 = new BookC("자료구조", 15000);

book1.buy();

// 새로운 클래스 + extends 상속값을 부여할 클래스
// this객체를 입력하는 것, 그리고 오브젝트랑 프로토타입을 기입해야 하는 단계가 생략이 된다.

class TextBookC extends BookC {
  //extends =연장하다라는 뜻 즉, 상속받는 개념이라는 뜻
  constructor(title, price, major) {
    super(title, price); // this객체까지 안가져와도 되고, 해당 인자값들만 쓰면 된다. 상위에서 가져온다.
    this.major = major;
  }

  buyTextBook() {
    console.log(`${this.major} 전공서적, ${this.title}을(를) 구매했습니다.`);
  }
}

const book2 = new TextBookC("인공지능", 50000, "컴퓨터공학");
console.log(book2);

book2.buyTextBook();
book2.buy();
