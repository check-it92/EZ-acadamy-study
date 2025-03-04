const signup_btn = document.querySelector("#signup-button");
const token_btn = document.querySelector("#token-button");
const token_timer_confirm_button = document.querySelector(
  "#token-timer-confirm-button"
);

let interval;
token_timer_confirm_button.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(interval);

  document.querySelector("#token-timer-confirm-button").style =
    "background: #fff";

  document
    .querySelector("#token-timer-confirm-button")
    .setAttribute("disabled", true);

  document.querySelector("#token-timer-confirm-button").innerText = "인증완료";

  alert("인증이 완료되었습니다.");

  document.querySelector("#signup-button").sytle =
    "background: #fff; color: #0068ff; border: 1px solid #0068ff cursor:pointer";
  document.querySelector("#signup-button").removeAttribute("disabled");
});

const getTokenTimer = () => {
  // 1초 = 1000 밀리 초
  // 1분 = 1000 * 60

  let timer = 10;
  interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = String(Math.floor(timer / 60)).padStart(2, "0"); // 2자리로 변환
      const seconds = String(timer % 60).padStart(2, "0");

      document.querySelector(
        "#token-timer"
      ).innerHTML = `${minutes} : ${seconds}`; // 실제 값 출력
      timer -= 1; // 산술연산자 -1씩 계속감소하게
    } else {
      document.querySelector("#token").innerText = "000000";
      document.querySelector("#token-button").style = "";
      document.querySelector("#token-button").setAttribute("disabled", true);

      document.querySelector("#token-timer").innerText = "03:00";
      document.querySelector("#token-timer-confirm-button").style = "";
      document
        .querySelector("#token-timer-confirm-button")
        .setAttribute("disabled", true);

      clearInterval(interval);
    }
  }, 1000);
};

const signup = (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const writer = document.querySelector("#writer").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;

  console.log(location);

  const genderWoman = document.querySelector("#gender-woman").checked;
  const genderMan = document.querySelector("#gender-man").checked;

  let isValid = true;

  if (email.includes("@") === false) {
    document.querySelector("#error-email").innerText =
      "이메일이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.querySelector("#error-email").innerText = "";
  }

  if (writer === "") {
    document.querySelector("#error-writer").innerText =
      "이름이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.querySelector("#error-email").innerText = "";
  }

  if (password1 === "") {
    document.querySelector("#error-password1").innerText =
      "비밀번호를 입력해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error-password1").innerText = "";
  }

  if (password1 !== password2) {
    document.querySelector("#error-password1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error-password2").innerText =
      "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }

  if (
    location !== "seoul" &&
    location !== "gyeongi" &&
    location !== "incheon"
  ) {
    document.querySelector("#error-location").innerText =
      "지역을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error-location").innerText = "";
  }

  if (genderWoman === false && genderMan === false) {
    document.querySelector("#error-gender").innerText = "성별을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error-gender").innerText = "";
  }

  if (isValid === true) {
    alert("이젠아카데미 가입을 축하합니다.");
  }
};

signup_btn.addEventListener("click", signup);

const phone1 = document.querySelector("#phone1");
const phone2 = document.querySelector("#phone2");
const phone3 = document.querySelector("#phone3");

phone1.addEventListener("keyup", () => {
  const phone1Value = phone1.value;
  if (phone1Value.length === 3) {
    document.querySelector("#phone2").focus();
  }
});

phone2.addEventListener("keyup", () => {
  const phone2Value = phone2.value;
  if (phone2Value.length === 4) {
    document.querySelector("#phone3").focus();
  }
});

phone3.addEventListener("keyup", () => {
  const p01 = document.querySelector("#phone1").value;
  const p02 = document.querySelector("#phone2").value;
  const p03 = document.querySelector("#phone3").value;

  if (p01.length === 3 && p02.length === 4 && p03.length === 4) {
    document.querySelector("#token-button").style =
      "background: fff; color: #0068ff; cursor:pointer";
    document.querySelector("#token-button").removeAttribute("disabled");
  }
});

token_btn.addEventListener("click", (e) => {
  e.preventDefault(); // 매개변수값 꼭 입력하기
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  // padStart = 는 앞에 문자열의 숫자를 정의 하는 첫번째 인자값, 6자리 숫자로 안될 경우 앞자리는 0으로 하겠다는 두번째 인자값
  document.querySelector("#token").innerText = token;

  document.querySelector("#token-button").style =
    "background: #fff; cursor:pointer;";

  document.querySelector("#token-button").setAttribute("disabled", true);

  document.querySelector("#token-timer-confirm-button").style =
    "background: #0068ff; color:#fff; cursor:pointer;";

  document
    .querySelector("#token-timer-confirm-button")
    .removeAttribute("disabled");

  getTokenTimer();
});
