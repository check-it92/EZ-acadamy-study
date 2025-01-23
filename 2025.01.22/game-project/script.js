const board = document.querySelector(".board");
const h1 = document.createElement("h1"); // 태그를 만든다는 의미의 요소(element)이다.
let itemImg = document.createElement("img");
let resultImg = document.createElement("img");

h1.innerText = "컴퓨터와 가위.바위.보 맞추기 게임!";

const userChoice = prompt("가위, 바위, 보 중 하나를 선택하세요!", "가위");
let gameNum;

switch (userChoice) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("다시 한번 하세요!!");
    location.reload();
}

let comChioce = Math.ceil(Math.random() * 3);
itemImg.src = `./imgs/math_img_0${comChioce}.png`;
// 사진의 확장자명, 그리고 이름 까지 같은 이름으로 맞춰줘야 한다.
// 나는 01,02,03으로 했기 때문에 0이라는 숫자를 문자열로 맞춰서 1,2,3 숫자를 불러올수 있게 만들었다.

if (gameNum === comChioce) {
  //우리가 컴퓨터랑 같아야 하는 속성은 gameNum 의 숫자들이기 때문에 이 변수를 입력을 해야한다.
  resultImg.src = `./imgs/Game-01.png`;
} else {
  resultImg.src = `./imgs/Game-02.png`;
}

board.append(h1, itemImg, resultImg); //축약형 (차일드)를 제외하고

// board 를 한번에 쓰는 방법도 있다.
// board.appendChild(h1);
// board.appendChild(itemImg);
// board.appendChild(resultImg);
