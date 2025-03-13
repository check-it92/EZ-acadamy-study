const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const circle = {
  x: 100,
  y: 100,
  radius: 30,
  dx: 4,
  dy: 4,
  color: "#330867",
};
// dx, dy = destination의 x와 y 값이 이동하는 것을 의미! 초기 100에서 얼마만큼씩 이동할 것인가 지정한것

const drawCircle = () => {
  ctx.beginPath();
  ctx.fillStyle = "#b490ca";
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
  ctx.fill();
};

const move = () => {
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle();
  circle.x += circle.dx;
  circle.y += circle.dy;

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    // 원이 온전하게 유지 되면서 각 가장자리에 원이 짤리지 않도록 하는
    circle.dx = -circle.dx;
  }
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    // 원이 온전하게 유지 되면서 각 가장자리에 원이 짤리지 않도록 하는
    circle.dy = -circle.dy;
  }

  // 재귀함수 == recursion
  requestAnimationFrame(move);
};

move();
