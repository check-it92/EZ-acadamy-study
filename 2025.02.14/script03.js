// 사용자에게 지름 & 높이의 값을 받아서 원기둥의 부피를 구하는
// 프로그램 코드를 작성하세요!!

// 원기둥의 부피를 구하는 공식 = 밑면적 * 높이
// 밑면적 = Math.PI * r * r
// Radius = 반지름

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력 될 수 있도록
// 생성자 함수를 활용해서 코드를 구현!!

/*
const diameter = parseInt(document.querySelector("#cyl-diameter"));

const height = parseInt(document.querySelector("#cyl-height"));

const result = document.querySelector("input[type='button']");

const cylinderUnder = {
  diameter: parseInt(document.querySelector("#cyl-diameter")),
  areaUnder: Math.PI * radius * radius,
  radius: function () {
    return this.diameter / 2;
  },
cyl: function() {
    cylinderUnder * height
  } 

  console.log(`${this.}`);
  
};

cylinder.diameter.radius();
*/

// 왜 생성자 함수를 사용하는가에 대한 답을 내릴수 있어야 !! 잘 활용할 수 있다.
// >> 반복적인 패턴의 객체를 보다 효율적으로 만들어내기 위한 목적!

// 객체 만들기
// 정적인 속성값 관리 & 사용자의 요구사항에 따른 메서드 함수도 자유롭게 만들수 있다는 것을 의미!

// const btn = document.querySelector("input[type='button']");
// const result = document.querySelector("#result");

// function Cylinder(cylinderDiameter, cylinderHeight) {
//   this.diameter = cylinderDiameter; // 온점표기법으로 해당 value 값을 입력하겠다는 뜻
//   this.height = cylinderHeight;

//   this.getVolume = function () {
//     const radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

const btn = document.querySelector("input[type='button']");
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value; // 우리가 원하는 건 해당 값을 찾아오고 싶어서 value를 쓴것
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    // 예외적응 처리
    result.innerText = "해당 값들을 입력해주세요.";
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    // 프로토 타입은 무조건 문자열로 받아오기 때문에 숫자열로 형변환 해줘야 한다.
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`; // 문자열 + 숫자열 같이 쓰려고 템플릿 리터럴법 씀
  }
});
