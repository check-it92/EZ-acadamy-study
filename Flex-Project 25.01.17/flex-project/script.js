// 목표 : 사용자가 스크롤을 내렸을 때, header 배경컬러 // banner height를 변경 => 가상클래스 적용

// 1.사용자가 지금 스크롤을 내렸어!!
// > 스크롤은 브라우저가 가지고 있는 요소!!
// > 브라우저야!!! 지금 스크롤이 내려갔니?

// 2.header는 html안에서 header라는 태그를 사용하고 있는 요소야!

// 3.사용자가 스크롤을 내렸으니까 빨리 active 클래스를 header에게 적용시켜

// 브라우저가 가지고 있는 내장객체

// document.querySelector("#circle");
// 문서 => 개발자가 직접 작성한 html 문서

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
    document.querySelector(".gototop").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
    document.querySelector(".gototop").classList.remove("active");
  }
});

/* slick slider */
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    speed: 300,
    responsive: [
      {
        //중단 지점 >> 깨고 1300가로 값만큼 적응을 시키겠다.
        breakpoint: 480,
        settings: {
          // 새로운 세팅값 설정
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
    ],
  });
});

/* JS에게 이벤트 대상이 누구인지 알려주기

  이벤트 대상이 되어지는 요소(*element) html에서 찾아온 태그 혹은 클래스 혹은 아이디 선택자 에게
  어떤 이벤트를 부여할 것인가를 결정 */

/* 이벤트를 첫 번째 적용할 때, 두 번째 적용할 때 상이하게 적용하도록 제어 */

// 1.trigger 이벤트
//변수 선언
const trigger = document.querySelector(".trigger");
//객체 선언
trigger.addEventListener("click", function () {
  this.classList.toggle("active"); //this 라는 객체는 마법함수이다. 바로 상단 부모의 객체를 뜻한다.
  document.querySelector(".gnb").classList.toggle("active");
});

// 2.menu 이벤트
const menus = document.querySelectorAll(".gnb a, .gototop");
menus.forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault(); // 기본값을 무시하겠다.
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      // 객체 선언
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
