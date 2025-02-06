// const lis = document.querySelectorAll("li");

// const images = ["portrait-01.jpg","portrait-02.jpg","portrait-03.jpg","portrait-04.jpg"]

// lis.forEach((li, index) => {
//   li.addEventListener("mouseover", () => {
//   let img = []
//   });
// });

const lis = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

lis.forEach((li) => {
  li.addEventListener("mouseenter", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });
  li.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});
