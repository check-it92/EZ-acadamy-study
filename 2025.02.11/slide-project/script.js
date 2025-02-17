const btns = document.querySelector(".controls");
const prebtn = btns.querySelector(".prev");
const nextbtn = btns.querySelector(".next"); // 이벤트 트리거 생성 완료

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li"); // li 요소들이 5개 이기 때문에 all 로 찾아온다.

const slideCount = slide.length;
const slideWidth = 200;
const slideMargin = 30;

let currentIdx = 0;

// 새로운 15개의 전체 너비값 정의
const updataWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  // 여기선 15개로 설정된 새로운 상태의 li를 찾아오기 위해서이다.
  // 절대 초기에 설정한 값을 복붙해서 쓰면 안된다.
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.weidth = newWidth;
};

const setInitilaPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone"); // 클래스값을 생성해서 add 로 클래스명을 붙여줌
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updataWidth();
  setInitilaPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;

  // 리와인드 형식으로 가운데의 초기값으로 돌아가는 구조
  /* if (slideCount === currentIdx || currentIdx === -slideCount) {
      currentIdx = 0;} */
  // 자연스럽게 순환구조로 돌아게 하는 구조
  if (slideCount === currentIdx || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
    }, 500); // 더해지는 시간보다 짧아야 한다.
    currentIdx = 0;
  }
  setTimeout(() => {
    slides.classList.add("animated");
  }, 600); // 없어지는 시간 보단 길어야 한다.
};

nextbtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1); //  클릭이 일어난 이후의 함수 속에서 인자값이 발동되어야 한다.
});

prebtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

let timer = undefined;

// 자동 슬라이드
const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      // 얼마의 주기로 무엇을 행동해라 라는 의미
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};
autoSlide();

// 해당 자동 슬라이드 의 브레이크 문
// 해당 박스의 마우스을 올리거나 내렸을때 슬라이드를 멈추게 하는 기능

const stopSlide = () => {
  clearInterval(timer); // 몇 초의 주기로 움직이기로 했던걸 멈추겠단 의미
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

btns.addEventListener("mouseleave", () => {
  autoSlide();
});
