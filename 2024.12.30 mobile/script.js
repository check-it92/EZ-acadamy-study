/* 자바스크립트를 어려워 하는 이유 */
/*영단어 (기본언어 체계)가 부족한 상태 // 문법, 속성, 메서드 함수 */
/* 기본 언어개념이 이해는 가나 적재적소에 배치하는 방법을 못잡는 케이스 */

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;

for (let i = 0; i < slideCount; i++) {
  const cloneSlide = slide[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  slides.append(cloneSlide);
}

for (let i = slideCount - 1; i >= 0; i--) {
  const cloneSlide = slide[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  slides.prepend(cloneSlide);
}

