// class 사용
/*
class StringList {
  // Field 생략 가능 이유? -> 접근제어자를 써서
  constructor(private list: string[]) {}

  push(data: string) {
    // 메서드 함수 (커스터마이징 하겠다.)
    this.list.push(data); // 기능적 함수 우리가 밀어넣겠다.
  }

  pop() {
    return this.list.pop(); // 배열에서 쓸수 있는 기능
  }

  print() {
    console.log(this.list);
  }
}

class NumberList {
  // Field 생략 가능 이유? -> 접근제어자를 써서
  constructor(private list: number[]) {}

  push(data: number) {
    // 메서드 함수 (커스터마이징 하겠다.)
    this.list.push(data); // 기능적 함수 우리가 밀어넣겠다.
  }

  pop() {
    return this.list.pop(); // 배열에서 쓸수 있는 기능
  }

  print() {
    console.log(this.list);
  }
}
*/

class List<T> {
  // Field 생략 가능 이유? -> 접근제어자를 써서
  constructor(private list: T[]) {}

  push(data: T) {
    // 메서드 함수 (커스터마이징 하겠다.)
    this.list.push(data); // 기능적 함수 우리가 밀어넣겠다.
  }

  pop() {
    return this.list.pop(); // 배열에서 쓸수 있는 기능
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
console.log(List);
