// 원의 넓이 = 파이 * r(반지름)제곱

// 원의 둘레 = 2 * 파이  * r

// 원의 넓이 구하는 함수
const radius = parseInt(prompt("반지름의 크기는?"));

const area = (r) => {
  return Math.PI * r * r;
};

// 원의 둘레 구하는 함수
const circum = (r) => {
  return 2 * Math.PI * r;
};

const result = document.querySelector("#result");

result.innerText = `반지름 : ${radius}, 원의 넓이 ${area(radius).toFixed(
  3
)}, 원의 둘레 ${circum(radius).toFixed(3)}`;
