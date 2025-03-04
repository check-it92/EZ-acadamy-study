// fetch() => API
// 페치 자체가 프로토 타입 Promise으로 (then, catch, finally) 가 다 내포되어 있다.(반환가능)

const result = document.querySelector("#result");

fetch("student.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += ` 
      <h2>${student.major}</h2>
      <ul>
      <li>이름 : ${student.name}</li>
      <li>학년 : ${student.grade}</li>
      </ul>
      `; // 복합대입연산자로 값을 재할당
    });
    result.innerHTML = output;
  })
  .catch((err) => console.log(err));
// 기존에 우리가 객체로 변환하려면 parse()라는 함수를 썻지만
// fetch 라는 함수를 쓸때는 .json 함수가 그자리를 대신한다.
// 데이터를 찾아오지 못할시 catch 로 오류사항을 써주면 된다.
