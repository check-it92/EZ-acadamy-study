// width, height 값을 css로 주지 않고도 스크립트로도 줄 수 있다.
// 그치만 너무 비효율적이다. css는 2줄로 끝날게 스크립트로는 너무 길어진다.
// 여러 요소들을 혼용해서 효율적으로 하는게 보는 사람도 만드는 사람도 편해진다.

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];

const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const autoVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;

newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(autoVideo);
container.appendChild(newVideo);

newVideo.addEventListener("click", function () {
  if (this.paused) this.play();
  else this.pause();
});

let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1;
        // i가 0보다 작아지게 되면 비디오스의 전체길이(3) 에서 1개를 뺀 값으로 대입해라 그럼 "2" 마지막으로 돌아간다.
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});
