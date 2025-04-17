// 타입스크립트에서 클래스 생성자

/*
class Employee {
  //Field : ts 에서 직접 해당 키에 대한 타입과 초기값을 설정해줘야 된다.
  // name: string = "";
  // age: number = 0;
  // position: string = "";

  // private name: string; // 내부에서만 수정가능
  //protected name: string; // 내부, 상속받은 곳(하위클래스)에선 수정가능 / 외부에선 불가!
  //public position: string; // 내, 외부 수정가능
  //public age?: number = 20; // 옵셔널프로포티(속성) 도 가능하다. 대신, 항상 순서상 마지막에 와야한다.
  // 초기값으로 해당 기본값을 설정가능

  //Constructor : 생성자함수를 쓰고 타입을 지정해준다면 초기값을 생략해줘도 된다.
  // 접근제어자 순기능 => 축약이 여러모로 가능하다.
  // 생성자 함수 안에서 "접근제어자" 를 인식해서 썻더니 field를 쓰지 않아도 된다.
  // 또한 내에서 this 객체를 쓰지 않아도 된다.

  constructor(
    protected name: string,
    public position: string,
    public age?: number
  ) {
    name;
    position;
    age; // key 와 value 값이 같기 때문에 생략가능!
  }

  // 내부 method 함수생성
  work() {
    console.log("Hello");
  }
}

// const employee1 = new Employee();
// console.log(employee1);
// employee1.work();

// 생성자함수로 인자값 부여
// const employee2 = new Employee("Henry", 20, "striker");
// console.log(employee2);

// employee2.work();

const employee3 = new Employee("Rooney", "striker", 30);
// employee3.name = "Son"; // public 이기 때문에 외부에서 수정가능
// employee3.name = "Son"; // private 일때는 외부에서 수정 불가!

employee3.work();
console.log(employee3);

// 기초 타입 = 메뉴얼 클래스는 하나의 타입으로도 적용가능
const employee4: Employee = {
  name: "",
  position: "",
  age: 20,
  work: () => {},
};

// 상속의 개념 , 속성과 타입을 세분화로 정해주어야 한다.
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    position: string,
    age: number,
    officeNumber: number
  ) {
    super(name, position, age); // 자식요소의 값만 변경하기 위해서
    this.officeNumber = officeNumber;
  }

  work2() {
    console.log(`반가워요! ${this.name} 입니다.`);
  }
}

/*
const employee5 = new ExecutiveOfficer("Messi", "FW", 20, 1);
console.log(employee5);
*/

interface CharacerInterface {
  name?: string;
  moveSpeed?: number;
  move(): void; // 반환값이 없을때 쓰는 타입
}

// 자바스크립트에선 없는 기능 
class Character implements CharacerInterface {
  constructor(public name?: string, public moveSpeed?: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동가능!`);
  }
}
