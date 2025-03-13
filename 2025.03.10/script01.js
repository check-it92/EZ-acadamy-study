const canvas = document.querySelector("canvas");
const button = document.querySelector("button");
const ctx = canvas.getContext("2d");

const origin = {
  x: 200,
  y: 200,
};

ctx.fillStyle = "#ccc";
ctx.fillRect(origin.x, origin.y, 100, 100);

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256); // 0 ~ 255 사이의 랜덤값이 생성된 (소수점 없애고)
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

button.addEventListener("click", () => {
  ctx.globalAlpha = 0.7; // 상단에 기입하면서 전체적으로 포함이 된다.

  ctx.translate(origin.x, origin.y);
  ctx.rotate((Math.PI / 180) * 30);

  ctx.fillStyle = randomRGB();
  ctx.fillRect(0, 0, 100, 100);

  ctx.translate(-origin.x, -origin.y);
});
