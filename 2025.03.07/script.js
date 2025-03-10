const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
/*
ctx.font = "60px Arial";
ctx.fillText("HELLO", 50, 70);
ctx.strokeText("HELLO", 50, 150);
*/
// 연계성
/*
ctx.font = "italic 60px Arial";
ctx.fillText("Javascript", 50, 70);

ctx.font = "Bold 60px Arial";
ctx.fillText("Typescript", 50, 150);
*/

// 1. 이미지 부여하기 drawImage(x, y, width, height)순으로 넣으면 된다.
// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 100, 200);
// });

// img.src = "./images/cat.jpg";

// 2. 이미지의 특정 부분을 잘라서 출력 (sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

// const img = new Image();
// img.addEventListener("load", () => {
//   ctx.drawImage(img, 100, 200, 350, 160, 100, 140, 175, 90);
// });

// img.src = "./images/cat.jpg";

// 3. masking : 서로 다른 요소들이 혼합되지 않도록 별개의 요소로 관리하기 위해서 조치하는 행위 (=도배할때 마스킹 테입)

// cliping mask : 서로 다른 복수의 이미지 요소들을 원하는 좌표에 혼합해서 사용 할 수 있도록 하는 행위, 기능 (= 도장찍는 느낌)

// add이벤트리스터 기법
// const img = new Image();
// img.addEventListener("load", () => {

// })

// 다이렉트 기법
/*
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0);
};

img.src = "./images/bird.jpg";

ctx.beginPath();
ctx.arc(400, 200, 150, 0, Math.PI * 2, false);
ctx.clip();
*/

