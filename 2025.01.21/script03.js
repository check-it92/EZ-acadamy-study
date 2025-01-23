// 사용자의 로그인을 허락해주고자 합니다.
// 사용자에게 id와 pw를 받아서 정상적인 정보라면 "00님 반갑습니다."
// 사용자가 로그인을 하기위한 정상적인 정보로는 id = ezen1234, pw = 1234567로 설정하겠습니다.

// 만약, id가 잘못된 정보라면, "id가 일치하지 않습니다." 라는 메세지를 알림창으로 전달해주세요
// 만약, pw가 잘못된 정보라면, "pw가 일치하지 않습니다." 라는 메세지를 알림창으로 전달해주세요

// 선생님 풀이
// **serve
const id = "ezen1234";
const pw = "1234567";
console.log(id, pw);

// 클라이언트

const userName = prompt("당신의 이름을 입력하세요!");
if (userName !== "" && userName !== null) {
  const userId = prompt(`${userName}님 아이디를 입력하세요!!`);
  if (userId !== "" && userId !== null) {
    if (userId === id) {
      const userPw = prompt(`${userName}님 반갑습니다! 패스워드를 입력하세요!`);
      if (userPw === pw) {
        alert(`${userName}님 오늘도 좋은하루 되세요.`);
      } else {
        alert("패스워드가 일치하지 않습니다!");
      }
    } else {
      alert("아이디가 일치하지 않습니다.!");
    }
  } else {
    alert("아이디를 입력하세요!");
    location.reload();
  }
} else {
  alert("정상적인 이름을 입력하세요!");
  location.reload();
}

/*
const login01 = prompt("id를 입력해주세요.");
const login02 = prompt("pw를 입력해주세요.");

const login = login01 + login02;

if (login !== "" || login !== null);
{
  switch (login) {
    case "id":
      id = "ezen1234";
      break;
    case "pw":
      pw = "1234567";
      break;
    default:
      alert("00님 반갑습니다.");
  }
  if (login01 !== "ezen1234") {
    alert("id가 일치하지 않습니다.");
  } else if (login02 !== "1234567") {
    alert("pw가 일치하지 않습니다.");
  } else {
    alert("다시 로그인해주세요.");
  } 

  window.location.reload();
} */
