// hashlist sticky event
window.addEventListener("scroll", () => {
  const hashlist = document.querySelector(".hashlist");
  const scrollY = window.scrollY; // 300 으로 나온다.
  // 가로 값을 준다면 scrollX 로 가면 되고 왼/오 방향은 css속성 translate 로 -/+ 로 부여하면 된다.
  if (scrollY > 200) {
    hashlist.classList.add("active");
  } else {
    hashlist.classList.remove("active");
  }
});

// touch event
// 586 스크롤자체 컨텐츠 너비 + 226 스크롤이 가능하도록 하기 위해 부여한 여유 공간
// 812 너비 전체 공간 확보

const hashContent = document.querySelector(".hashcontent");
const listClientWidth = hashContent.clientWidth;
const listScrollWidth = hashContent.clientWidth + 200;

// 손가락 터치의 체크 하기 위한 구분
// 가로 방향 움직이기 때문에 x 값으로 (좌표)

let startX = 0; // 최초 찍은지점

let nowX = 0; // 찍고 움직인 지점

let endX = 0; // 움직이고 나서 뗀 지점

let listX = 0; // 두 번째 찍은 지점

const getClientX = (e) => {
  return e.touches ? e.touches[0].clientX : e.clientX;
  // console.log(e.touches); 모바일 기기에서만 확인이 가능하고 웹에선 확인 불가
  // 모바일에서 첫번 째 터치[0]한(인덱스 순서로 0) 구간의 위치 값
};

const setTranslateX = (x) => {
  hashContent.style.transform = `translate(${x}px)`;
};

const getTranslateX = () => {
  return parseInt(
    getComputedStyle(hashContent).transform.split(/[^\-0-9]+/g)[5]
  );

  // matrix(1, 0, 0, 1, -181, 0) 나온 값 -181 이 x축으로 부터 -181을 움직였다는 뜻이다.
  // 문자열을 배열로 바꿔주는게 필요하다. => 명확한 패턴 체크 구분자 > 숫자제외 확인(, 쉼표)
  // 정규표현식으로 쓰는것 split(/[^\-0-9]+/g) 0-9까지 양수와 음수 모두를 제외한 것을 찾아와라 + 전역에서 > 배열형식이 된다.
};

const onScrollEnd = (e) => {
  endX = getClientX(e);
  listX = getTranslateX();
  if (listX > 0) {
    setTranslateX(0);
    hashContent.style.transition = `all 0.1s ease`;
    listX = 0;
  } else if (listX < listClientWidth - listScrollWidth) {
    setTranslateX(listClientWidth - listScrollWidth);
    hashContent.style.transition = `all 0.1s ease`;
    listX = listClientWidth - listScrollWidth;
  }

  window.removeEventListener("touchstart", onScrollStart);
  window.removeEventListener("mousedown", onScrollStart);

  window.removeEventListener("touchmove", onScrollMove);
  window.removeEventListener("mousemove", onScrollMove);

  window.removeEventListener("touchend", onScrollEnd);
  window.removeEventListener("mouseup", onScrollEnd);
};

const onScrollMove = (e) => {
  nowX = getClientX(e);
  setTranslateX(listX + nowX - startX); // 이렇게 되면 음수값이 나올것이다. 움직인값 보다 초기값이 크니까
};

const onScrollStart = (e) => {
  startX = getClientX(e);

  window.addEventListener("touchmove", onScrollMove);
  window.addEventListener("mousemove", onScrollMove);

  window.addEventListener("touchend", onScrollEnd);
  window.addEventListener("mouseup", onScrollEnd); // 마우스를 뗀 상태에서 발생되는 이벤트 (독립적인)
};

hashContent.addEventListener("touchstart", onScrollStart);
hashContent.addEventListener("mousedown", onScrollStart); // 마우스를 누른 상태에서 발생되는 이벤트 (독립적인)
