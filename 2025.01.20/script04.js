/*let a = 1;
function outer() {
  function inner() {
    console.log(a);
    a = 3;
  }
  inner();
  console.log(a);
}

outer();
console.log(a);*/
// call stack 의 쌓인 순서대로 값이 출력이 된다.
// a의 값은 출력 순이 1,3,3으로 출력이 된다. a 1을 먼저 선언하고 그 뒤로 대입이 되었기 때문에

/*function a() {
  let x = 1;
  console.log(x);
  x;
  console.log(x);
  x = 2;
  console.log(x);
}

a ();*/

// 첫 번째 x; 에서 재할당을 하지 않았기 때문에 null값이 나올것이다. 라고 생각하는데 일반생각인데
// 이때 호이스팅 개념이 적용이 된다.
/* function a() {
  let x
  선언부를 끌어오게 된다.
  x; 밑에 있던 x가 올라간다.

  x = 1;
  console.log(x);
  console.log(x);
                              <---- x; 여기 x값이 선언된게 위로 올라간다
  console.log(x);
  x = 2;
  console.log(x);
}

a (); */

function a() {
  let b;
  b = function b() {};

  console.log(b);
  b = "bbb";

  console.log(b);
  console.log(b);
}

a();
