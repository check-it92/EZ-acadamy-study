const url = "https://jsonplaceholder.typicode.com/users";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true); // 초기화 단계
xhr.send(); // 라이브서버에서 볼 수있는 출력단계

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 예외조항처리
    const users = JSON.parse(xhr.responseText);
    users.forEach((user) => {
      result.innerHTML += `
      <table>
      <tr>
      <td>이름 : ${user.name}</td>
      <td>아이디 :${user.id}</td>
      <td>이메일 :${user.email}</td>
      </tr>
      </table>
      `;
    });
  }
});
