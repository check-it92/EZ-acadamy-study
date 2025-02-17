window.onload = () => {
  const bgCount = 5;

  let randomNum = Math.floor(Math.random() * bgCount + 1);
  // 랜덤함수 * 내가 설정한 이미지 값의 최대 값 + 1 (실수가 아닌 정수로)
  document.body.style.backgroundImage = `url("./images/bg-${randomNum}.jpg")`;
};

