// const func = function (x) {
//   console.log(this, x);
// };

// func(1);

// const obj = {
//   method: func,
// };

// obj.method(2);

// const obj = {
//   method: function (x) {
//     console.log(this, x);
//   },
// };

// obj.method(1);
// obj["method"](2);

/*
const obj = {
  methodA: function () { this가 변수 안에서 무얼 가르키는 지에 대한 개념 예시들
    console.log(this);
  },
  inner: {
    methodB: function () {
      console.log(this);
    },
  },
}; */

// 온점표기법 과 대괄호 표기법으로 불어오는 방식 나열

/*
obj.methodA();
obj["methodA"]();

obj.inner.methodB();
obj.inner["methodB"]();
obj["inner"]["methodB"]();
obj["inner"].methodB(); */

// 메서드 - method = "객체 안에 있는 함수" 라 한다. 불러오는 대상이 다르기 때문에 같은 함수라도 이름이 다르다.
// 외부에서 독립적으로 활용되어지는 함수는 그냥 함수다.

/*
const obj1 = {
  outer: function() {
    console.log(this); // this가 가리키는 것은 obj1 변수를 가리키는 것! outer: function이 그 한에 있는 메서드일 뿐이다.

    const innerFunc = function () {  // 콜백 함수는 독립적인 함수다. global = window 전역함수이다.
      console.log(this);
    };
    innerFunc();  //  할당이 된게 없다. 독립적으로 쓰인것이다.

    const obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};

obj1.outer(); */

/*
const obj = {
  outer: function() {
    console.log(this);
    const innerFunc = () => {  
      console.log(this);
    };
    innerFunc();
  },
};

obj.outer();
  const innerFunc = () => {} 화살표 함수 : window를 찾아오지만 (콜백함수일때 무조건 이다.)
  ES6 => 2015년 업데이트 된 내용, 화살표 함수는 기존 함수들의 실행 컨텍스트와 한가지 엄청나게 큰 변화!
  실행컨텍스트 객체 >> 화살표 함수에는 thisBinding 이 없다. 생성하지 않는다.
  화살표 함수에는 부모요소의 속성을 가져오는것이다. **그래서 항상 window를 찾아오지 않는다. 부모가 전역이었을때 찾아옴
  콜백함수의 종속관계 요소로 화살표 함수를 많이 끌고 오긴한다. */

// const arr = [1, 2, 3, 4];
// //          (num)참조변수
// arr.forEach(function (num) { 함수안에 함수 콜백함수수
//   console.log(this, num);
// });

// setTimeout(function () {
//   console.log(this);
// }, 300);

/*
document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function () {
  console.log(this);
}); */

const obj1 = {
  outer: function () {
    console.log(this);
    const innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();

    const self = this; // this를 해당요소 안에 변수값으로 찾아 올때 이 공식을 쓰면 된다.
    const innerFunc2 = function () {
      console.log(self);
    };
    innerFunc2();
  },
};

obj1.outer();
