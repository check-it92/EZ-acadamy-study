// promise 객체 를 통한 단계

const start = document.querySelector(".start");
const end = document.querySelector(".end");

const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee !== "" && coffee !== null) {
    start.innerText = `${coffee} 주문접수!`;
    setTimeout(() => {
      resolve(coffee); // 참인 값 = 결과값
    }, 2000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});

const display = (result) => {
  end.innerText = `${result} 준비갈완료!`;
  end.classList.add("active");
  start.classList.add("done");
};

const showErr = (err) => {
  console.log(err);
};

order.then(display).catch(showErr);
