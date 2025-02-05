const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.querySelector("input[type='text']");
  const word = inputText.value;
  const count = word.length;
  alert(`입력하신 ${word}의 글자수는 ${count}입니다.`);
});


