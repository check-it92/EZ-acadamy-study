// const form = document.querySelector("form")
// const userInput = document.querySelector("#bookInfo")

// let books = [];

// const save = () => {
//   localStorage.setItem("books", JSON.stringify(books));
// }

// const delItem = (e) => {
//   const target = e.target.parentElement;
//   books = books.filter((book) => book.id != target.id);

//   save();
//   target.remove();
// }

// const addItem = (book) => {
//   if(bookInfo.text !== "") {
//     const li = document.querySelector("li");
//     const span = document.createElement("span")
//     const submit = document.createElement("submit")

//     span.innerText = bookInfo.text;
//     button.innerText = "삭제";
//     button.addEventListener("click", delItem);

//     li.append(span, button);
//     li.
//   }
// }

// const handler = (e) => {
//   e.preventDefault ();
//   if ()
// }

// 선생님 풀이

const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#booklist");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (title.value === "" || author.value === "") alert("정보를 입력해주세요!");
  else {
    const liItem = document.createElement("li");
    liItem.innerHTML = `${title.value} - ${author.value} <span>삭제</span>`;
    // innerHtml 을 씀으로써 내가 하고자 하는 문서의 속성을 가져올 수 있다. (문자를 기입할수 있게 됨)

    bookList.appendChild(liItem);

    title.value = "";
    author.value = ""; // 검색후 공란으로 만드는 방법

    const delBtns = document.querySelectorAll("span");
    delBtns.forEach((delBtn) => {
      delBtn.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode); 
        // 부모의 부모요소 조부모를 불러옴으로써 그 한줄을 지우는 것임 **중복사용가능함
      });
    });
  }
});
