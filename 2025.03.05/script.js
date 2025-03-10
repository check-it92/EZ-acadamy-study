const url = "https://dummyjson.com/quotes";
const result = document.querySelector("#result");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // 1~30개의 명언을 : 랜덤 돌리고 싶을때
    // 명언 => 배열 => 인덱스 // 0~29
    // 변수 설정 후 배열[인덱스 번호]
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerText = `- ${data.quotes[random].author}`;
  })
  .catch((err) => console.log(err));
// fetch(url).then().catch(console.log); 축약형
