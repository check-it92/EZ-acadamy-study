// 오늘 예제

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.globalAlpha = 0.3; //공통적인 투명도를 0.3으로 주겠다라는 뜻

// ctx.fillStyle = "rgb(255,0,0)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0,255,255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0,255,0)";
// ctx.fillRect(250, 50, 100, 50);

// 스펙트럼 주기
/*
ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
ctx.fillRect(50, 50, 60, 50);

ctx.fillStyle = "rgba(0, 0, 255, 0.4)";
ctx.fillRect(110, 50, 60, 50);

ctx.fillStyle = "rgba(0, 0, 255, 0.6)";
ctx.fillRect(170, 50, 60, 50);

ctx.fillStyle = "rgba(0, 0, 255, 0.8)";
ctx.fillRect(230, 50, 60, 50);

ctx.fillStyle = "rgba(0, 0, 255, 1)";
ctx.fillRect(290, 50, 60, 50);
*/

// gradient 컬러 적용하기!
// createLinearGradient(x1, y1, x2, y2);
// addColorStop(position, color) 전체 100을 기준으로 사용 / 어떤색을 쓸지

//gradient 컬러 적용하기
//creatLinearGradient(x1,y1,x2,y2)
//addColorStop(position,color)
//두가지를 보통 같이 쓴다

//사각 그라디언트
// const linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 100, 200);

// 원형 그라디언트
//첫번째원 // 두번째원 = 교차해서 광택 내는 방법

// ** 그림자 넣는 법
ctx.shadowColor = "#ccc";
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 10;

const radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
radGrad.addColorStop(0, "#fff");
radGrad.addColorStop(0.4, "#ff0");
radGrad.addColorStop(1, "#0ff");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);

ctx.fill();

// 패턴 만들기!!
/*
const img = new Image();
img.addEventListener("load", () => {
  const pattern = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

img.src = "./images/pattern.png";
*/

// canvas API를 활용해서 선을 그린다고 했을 때, 선의 마감처리는 총 3가지 중 하나로 선택할 수 있음!

// butt : 기본 디자인 => 단면처리
// round : 선 너비 = 두께 1/2만큼을 반지름으로 하는 원을 선 양쪽에 붙여넣는다.
// square : 선 너비의 1/2만큼을 양쪽 끝에 붙여 넣는다.

const lineCap = ["butt", "round", "square"];
const lineJoin = ["bevel", "miter", "round"];
ctx.strokeStyle = "#222";

/*
lineCap.forEach((line, index) => {
  ctx.beginPath();
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[index];
  ctx.moveTo(50, 50 + index * 30);
  ctx.lineTo(150, 50 + index * 30);
  ctx.stroke();
});
*/
/*
lineJoin.forEach((line, index) => {
  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[index];
  ctx.moveTo(60, 60 * index + 50);
  ctx.lineTo(100, 60 * index + 15);
  ctx.lineTo(140, 60 * index + 50);
  ctx.stroke();
});
*/
