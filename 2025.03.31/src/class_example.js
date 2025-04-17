const studentA = {
  name: "David",
  grade: "A+",
  age: 27,
  stydy: function () {
    console.log("열심히 공부함!");
  },
  introduce: function () {
    console.log("안녕하세요!");
  },
};

const studentB = {
  name: "Jane",
  grade: "B+",
  age: 24,
  stydy: function () {
    console.log("열심히 공부함!");
  },
  introduce: function () {
    console.log("안녕!");
  },
};

// 클래스는 위에 처럼 내용물들이 겹칠때 굳이 여러번 할 필요 없이
// 붕어빵 "틀" 을 만들어서 배포하는 기능능

class Student {
  //Field
  name;
  grade;
  age;

  // Constructor
  constructor(name, grade, age) {
    this.name = name; // ㅏthis 객체를 쓸수 있기 때문에 key, value값을 가져올수 있다.
    this.grade = grade;
    this.age = age;
  }

  // Method
  study() {
    console.log("열심히 공부함!");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const studentC = new Student("Romeo", "B", 21);
console.log(studentC);

studentC.study();
studentC.introduce();

// 상속의 개념
// 부모 클래스의 값을 상속받고, 추가적으로 자식만의 값을 사용하고싶다면 super 키워드를 사용할 수 있다.
class StudentDeveloper extends Student {
  // Field
  favoritSkill;

  // constructor
  constructor(name, grade, age, favoritSkill) {
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }

  //method
  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 함!`);
  }
}

const studentD = new StudentDeveloper("Ronaldo", "C", 21, "TS");
console.log(studentD);
studentD.programming();
