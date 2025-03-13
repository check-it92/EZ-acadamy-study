// fullpage
const sec2_Slider = document.querySelector("#sec2 .slider_wrap");
const sec2_Title = document.querySelector("#sec2 .title");

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  // afterLoad: function(origin, destination, direction, trigger){} = 공식 대입설명
  afterLoad: (old_elem, new_elem, direction) => {
    //색인 사용
    if (new_elem.index == 2) {
      sec2();
      // alert("section 2 Hello!!");
    }
    if (old_elem.index == 2) {
      sec2_reset();
      // alert("section 2 Bye!!");
    }
  },
});

function sec2() {
  sec2_Slider.style.cssText = "opacity: 1; transform: translateX(-50px)";
  sec2_Title.style.cssText = "opacity: 1; transform: translateX(50px)";
}

function sec2_reset() {
  sec2_Slider.style.cssText = "opacity: 0; transform: translateX(50px)";
  sec2_Title.style.cssText = "opacity: 0; transform: translateX(-50px)";
}

// 라이브러리 장점: 여기서 기능만 추가하면 따로 설정할 필요없이 자동으로 기능이 추가된다.
// 또한 앵커기능은 바로 카테고리별로 연결이 되는 href값만 배열형태로 대입하면 된다.

// GnB & Toggle
const body = document.querySelector("body");
const navBtn = document.querySelector("#nav_icon");

navBtn.addEventListener("click", () => {
  body.classList.toggle("nav_active");
});
