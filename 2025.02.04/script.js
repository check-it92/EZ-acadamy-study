// window.onload = alert("정신차려라 재기야!");

//1. 버튼 이벤트 '주제'
// const button = document.querySelector("button");

// 예전 온클릭 방식
// button.onclick = function() {
//   document.body.style.backgroundColor = "green";
// }

// 최근 add이벤트 방식
// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
});
