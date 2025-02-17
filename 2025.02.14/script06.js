// 인스턴스 객체 & 프로토타입 관계

/*
1. class 혹은 생성자 함수를 사용해서 객체의 포맷(*형태)을 구현 할 수 있음

2. class 혹은 생성자 함수를 사용해서 만들어진 포맷을 사용하려면 new 예약어와 함께 protype 객체(*함수)를 호출하면 가능!!

3. 이렇게 호출해온 Protype 객체의 속성 및 메서드를 상속받은 요소를 instance 라고한다.

4. 만약, 인스턴스 객체의 원조라고 할 수 있는 Protype이 무엇인지, 혹은 해당 프로토타입이 가지고 있는 속성 및 
  메서드 함수를 확인해보고자 할 때, 사용할 수 있는 속성은 __proto__ 이다. 예시) arr.__proto__

5. 

 */

// 생성자 함수 = 안에 새로운 속성 추가하기

const Book = function (title, price) {
  this.title = title;
  this.price = price;

  // this.finish = Function() {
  //   let str = ""
  //   this.done === false ? (str = "읽는 중") : (str = "완독");
  //   return str;
  // };
  Book.prototype.buy = function () {
    // 해당 새로운 생성자에는 함수가 새로 없으니 새로 부여한 것이다.
    console.log(`${this.title} 전공서적, ${this.price} 을 구매하였습니다!`);
  };
};

const book1 = new Book("새로운시작", 50000);
book1.buy();
// 스테틱 구조 = 정적인 구조이기 때문에 번거롭지만 새로운 변수설정 후 거기에 값을 입력하여
//  출력 해야한다.
