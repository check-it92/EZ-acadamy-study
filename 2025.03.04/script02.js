const xhr = new XMLHttpRequest();
xhr.open("GET", "student.json", true); // 초기화 단계
xhr.send(); // 라이브서버에서 볼 수있는 출력단계

const rederHTML = (contents) => {
  let output = ""; // 빈문자열로 재선언
  const result = document.querySelector("#result");
  contents.forEach((content) => {
    output += ` 
    <h2>${content.name}</h2>
    <ul>
    <li>${content.major}</li>
    <li>${content.grade}</li>
    </ul>
    <hr/>
    `; // 빈 문자열 안에 재할당 한것!
  });
  result.innerHTML = output;
  // output은 내부에서만 쓸수 있는 지역 요소이다. 그렇기 때문에 선언을 하고 재할당을 해줘야 한다.
};

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 예외조항처리
    const students = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    rederHTML(students);
  }
});
