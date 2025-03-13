const staggerWrap = document.querySelector("ul");

// 행과 열 정의
// const grid = [9,3];
// const col = grid[0];

// 그라데이션 효과 같은 느낌
// z가 기본축이 된다. (깊이감)
const [col, row] = [9, 5];
const allElem = col * row;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}
anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 3], from: "center", axis: "z" }),
});
