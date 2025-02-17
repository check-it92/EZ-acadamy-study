const playButton = document.querySelector(".play-pause");
const player = document.querySelector("#music-player");
const video = document.querySelector("video");
const progressCover = document.querySelector(".progress");
const volumeBar = document.querySelector("input[type='range']");
const fullButton = document.querySelector(".fullscreenBtn");
const rateButtons = document.querySelectorAll(".rate");

const play = () => {
  playButton.innerText = "||";
  video.play();
};
const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};
const togglePlay = () => {
  video.paused ? play() : pause();
};

const formatting = (time) => {
  // 1시간 = 60분
  // 1분 = 60초
  // 1초
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600); //  > 초로 생성된 값을 시각으로 구하고자 할때의 정의 (60s*60m)

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
  //return `${min} : ${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime); // 현재 시간
  // 컴퓨터만 인지되는 초로 표시되기에 formatting 함수로 바꿔줘야 한다.
  duration.innerText = formatting(video.duration); // 지속중인 시간

  // 재생 된 시간, 총 영상길이 표시
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration; // 총 경과시간
  const currentTime = video.currentTime; // 영상이 1초씩 경과되는 시간
  const percent = (currentTime / duration) * 100; // 백분율 구하는 공식 * 100 = %로 나타낼수 있다.
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth;
  // 550의 총시간에서 경과되는 시간을 나눈게 커서값이 된다. // (분자 / 분모) * 전체의 길이값을 하면 비례해서 백분율로 나뉜다.
  //console.log(newPosition);

  progressPointer.style.left = `${newPosition}px`;
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const setRate = (e) => {
  const { rate } = e.target.dataset; // 구조 분해 할당
  video.playbackRate = rate; // 영상의 재생속도를 관여한다.
};

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft; // 산술연산자로 빼준것 옆의 페이지의 숫자값 빼기 비디오 소스의 크기 값
  const progressBarWidth = progressCover.clientWidth; // 영상바 에 대한 총 길이
  const duration = video.duration; // 총영상길이
  const clickedTime = (mouseX / progressBarWidth) * duration;
  // 백분율 구하는 법 = 전체 총 영상길이(=100과 같은 위치) (내가 커서를 찍은 값(분자) / 영상 바 의 전체 길이 (분모))
  video.currentTime = clickedTime;
  // 영상의 현재 재생시간 = 내가 클릭한 시점의 위치 값과 같게 해준다.
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("pointerdown", togglePlay); // click or pointerdown 둘중 하나만 써야 한다.
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", videoPoint);

rateButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    setRate(e);
  });
});

fullButton.addEventListener("click", () => {
  video.requestFullscreen();
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    document.addEventListener("pointerdown", togglePlay);
  } else {
    document.removeEventListener("pointerdown", togglePlay);
    video.addEventListener("pointerdown", togglePlay);
  }
});
