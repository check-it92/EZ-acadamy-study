const url = "https://jsonplaceholder.typicode.com/users";

const display = (users) => {
  const result = document.querySelector("#result");
  let string = "";
  users.forEach((user) => {
    string += `
    <table>
    <tr>
    <th>이름</th>
    <td>${user.name}</td>
    </tr>
    <tr>
    <th>아이디</th>
    <td>${user.username}</td>
    </tr>
    <tr>
    <th>이메일</th>
    <td>${user.email}</td>
    </tr>
    </table>
    `;
  });
  result.innerHTML = string;
};

// 메서드 체이닝 기법
const init = async () => {
  const response = await fetch(url);
  const users = await response.json(); // 실제 객체로 변환하는 작업!
  display(users);
};

init();

// fetch(url)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err)); 이렇게 가는게 편한방법이지만 위에 방식으로 일부러 연습하기 위해 하는것것
