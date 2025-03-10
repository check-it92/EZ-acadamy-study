const canvas = document.querySelector("canvas");
const toolbar = document.querySelector("#toolbar");

// 내가 사용할 공간 너비 정하기
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const ctx = canvas.getContext("2d");

let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;

// 이벤트 타겟으로 인해 발생한 그 안에 스트로크 타입을 정의하고 색상을 정의
toolbar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lwidth") {
    lineWidth = e.target.value;
  }
});

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

const canvasOffsetY = canvas.offsetTop;

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});
