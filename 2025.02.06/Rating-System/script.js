const stars = document.querySelectorAll(".fa-star");
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  // 매개변수(임의로 내가 설정하는) 안에 스타즈 안에 별들, 그리고 인덱스값을 가져올수 있다.
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      // if(i <= s.length);
      if (i <= index) {
        s.classList.add("active");
        // 클래스리스트는 내가 설정한 인덱스 목록을 체크하는 방법
      } else {
        s.classList.remove("active");
      }
    });
    let message = "";
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로입니다.";
        imageURL = "./img-star/star-lv1.png";
        break;
      case 1:
        message = "나쁘지 않네요.";
        imageURL = "./img-star/star-lv2.png";
        break;
      case 2:
        message = "보통이에요!";
        imageURL = "./img-star/star-lv3.png";
        break;
      case 3:
        message = "맘에들어요.";
        imageURL = "./img-star/star-lv4.png";
        break;
      case 4:
        message = "아주 좋아요!!";
        imageURL = "./img-star/star-lv5.png";
        break;
    }
    print.innerHTML = `<img src = "${imageURL}"> ${message}`;
  });
});
