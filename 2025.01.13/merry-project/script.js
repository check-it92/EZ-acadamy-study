/* 한글로 지금 내가 제어하고자 하는 내용이 무엇인지 부터 먼저 작성해보기!!
논리적이라서!!
내가 현재 구현하고자 하는 기능을 대략적이지만 말로 표현하지 못한다면,
100% 코딩은 불가하다. */

/* 8개의 face를 대상으로 모션 제어 > 컴퓨터에게 8개의 face가 뭔지 알려주기
1. 8개의 face를 어딘가에 담아서 컴퓨터에게 "이게 8개의 face야!" 라고 알려줘야함
 ** 그 어딘가에 담고자 하는 그릇 +> 변수선언 (함수, 메서드드)
2. 해당 모션 : 각각의 face에 마우스를 올리면 회전이 멈춤
3. 해당모션 : 각각의 face에서 마우스가 떠나가면 회전이 정상적으로 진행 */

const circle = document.querySelector("#circle"); //특정한 한 요소를 찾아올때 쿼리 설렉트를 씀
const articles = circle.querySelectorAll("article"); // 한요소의 전체를 찾아 올때 all을 쓴다.

console.log(articles);

// 마우스 커서를 갔다 댔다가 띄웠을때 작동하게 하는 코드
articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
