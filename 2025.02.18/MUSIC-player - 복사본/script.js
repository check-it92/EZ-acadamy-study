import { API_UNSPLASH_KEY } from "./environment.js";

const getImg = `https://api.unsplash.com/photos/random/?client_id=${API_UNSPLASH_KEY}`;
const figure = document.querySelector("figure");
const loading = document.querySelector(".loading");

// 랜덤 배경 이미지 로드
fetch(getImg)
  .then((response) => response.json())
  .then(({ urls: { full } }) => {
    figure.style.backgroundImage = `url(${full})`;
    loading.style.display = "none";
  })
  .catch((error) => {
    console.error("이미지 로드 중 오류 발생!", error);
  });

const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

// 🔥 달라진 부분: activeAudio 변수 위치 이동
let activeAudio = null;

// article 로테이션 설정
const deg = 45;
let i = 0;
lists.forEach((list) => {
  const pic = list.querySelector(".pic");
  const play = list.querySelector(".play");
  const pause = list.querySelector(".pause");
  const load = list.querySelector(".load");
  const progressBar = list.querySelector(".progress-bar");

  list.style.transform = `rotate(${i * deg}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./img/song${i + 1}.jpg")`;
  pic.style.backgroundPosition = "50% 5%";
  pic.style.backgroundSize = "cover";
  i++;

  if (play) {
    // ✅ Play 버튼 이벤트 수정
    play.addEventListener("click", (e) => {
      const article = e.currentTarget.closest("article");
      const activePic = article.querySelector(".pic");
      activeAudio = article.querySelector("audio"); //

      const isActive = article.classList.contains("on");

      if (!isActive) {
        lists.forEach((item) => item.classList.remove("on"));
        article.classList.add("on");
      }

      activePic.classList.add("on");
      activeAudio.play();
      updateProgressBar(activeAudio, progressBar);

      activeAudio.removeEventListener("ended", handleAudioEnd);
      activeAudio.addEventListener("ended", handleAudioEnd);

      function handleAudioEnd() {
        activePic.classList.remove("on");

        const articles = [...document.querySelectorAll("article")];
        let currentIndex = articles.findIndex((el) =>
          el.classList.contains("on")
        );
        let nextIndex = (currentIndex + 1) % articles.length; // 🔥 마지막에서 처음으로

        const nextArticle = articles[nextIndex];
        const nextAudio = nextArticle.querySelector("audio");
        const nextPic = nextArticle.querySelector(".pic");

        nextArticle.classList.add("on");
        nextPic.classList.add("on");
        nextAudio.play();

        updateProgressBar(
          nextAudio,
          nextArticle.querySelector(".progress-bar")
        );
      }
    });
  }

  if (pause) {
    // ✅ Pause 버튼 이벤트
    pause.addEventListener("click", (e) => {
      const article = e.currentTarget.closest("article");
      const activePic = article.querySelector(".pic");
      activeAudio = article.querySelector("audio");

      const isActive = article.classList.contains("on");

      if (isActive) {
        activePic.classList.remove("on");
        activeAudio.pause();
      }
    });
  }

  let lastClickTime = 0;
  let clickTimeout = null;
  const doubleClickDelay = 300;

  if (load) {
    // Load 버튼 이벤트 - 기존 기능 유지 + 더블클릭 시 한 곡 반복 기능 추가
    load.addEventListener("click", (e) => {
      const article = e.currentTarget.closest("article");
      const activePic = article.querySelector(".pic");
      activeAudio = article.querySelector("audio");
      const loadIcon = article.querySelector(".load i");

      const isActive = article.classList.contains("on");

      if (isActive) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - lastClickTime;

        // 첫 번째 클릭이거나 더블클릭이 아닌 경우 (일반 클릭)
        if (timeDiff > doubleClickDelay) {
          // 타임아웃 설정 (더블클릭을 기다림)
          clearTimeout(clickTimeout);

          clickTimeout = setTimeout(() => {
            // 더블클릭이 아니면 기존 기능 실행 (음악 처음부터 재생)
            activePic.classList.remove("on");
            activeAudio.load();

            activeAudio.addEventListener("loadeddata", () => {
              activeAudio.play();
              updateProgressBar(
                activeAudio,
                article.querySelector(".progress-bar")
              );
            });

            // 반복 모드였다면 해제 (아이콘 원래대로)
            if (activeAudio.loop) {
              activeAudio.loop = false;
              loadIcon.classList.remove("active-repeat");
            }
          }, doubleClickDelay);
        }
        // 더블클릭인 경우
        else {
          clearTimeout(clickTimeout); // 일반 클릭 타임아웃 취소

          // 반복 모드 토글
          activeAudio.loop = !activeAudio.loop;

          // 아이콘 변경으로 상태 표시
          if (activeAudio.loop) {
            loadIcon.classList.add("active-repeat");
            console.log("반복 모드 켜짐");

            // 반복 모드일 때는 ended 이벤트 리스너 제거 (자동으로 다음 곡으로 넘어가지 않도록)
            activeAudio.removeEventListener("ended", handleAudioEnd);
          } else {
            loadIcon.classList.remove("active-repeat");
            console.log("반복 모드 꺼짐");

            // 반복 모드가 꺼지면 ended 이벤트 리스너 다시 추가
            activeAudio.addEventListener("ended", handleAudioEnd);
          }
        }

        lastClickTime = currentTime;
      }

      // 공통 handleAudioEnd 함수 정의
      function handleAudioEnd() {
        activePic.classList.remove("on");

        const articles = [...document.querySelectorAll("article")];
        let currentIndex = articles.findIndex((event) =>
          event.classList.contains("on")
        );
        let nextIndex = (currentIndex + 1) % articles.length;

        const nextArticle = articles[nextIndex];
        const nextAudio = nextArticle.querySelector("audio");
        const nextPic = nextArticle.querySelector(".pic");

        nextArticle.classList.add("on");
        nextPic.classList.add("on");
        nextAudio.play();

        updateProgressBar(
          nextAudio,
          nextArticle.querySelector(".progress-bar")
        );
      }
    });
  }

  if (progressBar) {
    // ✅ Progress-bar 클릭 이동
    progressBar.addEventListener("click", (e) => {
      const article = e.currentTarget.closest("article");
      activeAudio = article.querySelector("audio"); // 🔥 activeAudio 업데이트
      const barWidth = progressBar.clientWidth;
      const clickX = e.offsetX;
      const duration = activeAudio.duration;

      if (!duration) return;

      const newTime = (clickX / barWidth) * duration;
      activeAudio.currentTime = newTime;
    });
  }

  // ✅ Progress-bar 업데이트 함수
  function updateProgressBar(audio, progressBar) {
    if (!progressBar) return; // progressBar가 null인 경우 함수 종료

    function step() {
      if (!audio.paused && audio.duration) {
        // 🔥 조건 수정 (audio.paused 확인)
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }
});

// 🔥 버튼 이벤트 최적화
let num = 0;
let active = 0;
const length = lists.length - 1;

const activation = (index, items) => {
  items.forEach((item) => item.classList.remove("on"));
  items[index].classList.add("on");
};

// 🔥 음악 정지 및 초기화 함수 추가
const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  });
};

//🔥 Prev 버튼 이벤트
prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;
  active === 0 ? (active = length) : active--;
  activation(active, lists);
});

// 🔥 Next 버튼 이벤트
next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;
  active === length ? (active = 0) : active++;
  activation(active, lists);
});