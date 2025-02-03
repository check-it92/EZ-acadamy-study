// id 로 찾아오는 방식 (현재)
// const accept = document.querySelector("#accept");
// console.log(accept);

// type 로 찾아오는 방식 (예전)
// const accept = document.querySelector("input[type='submit']");
// accept.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("click");
// });

// *submit 가 기본적으로 가지고 있는 이벤트 기능
// 또한 기능 중 하나가 클릭 이벤트 와 동시에 엔터 이벤트가 활성화 된다. 따로 이벤트 생성 불필요!
const form = document.querySelector("form");
const userInput = document.querySelector("#todo-item");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  // 이렇게 되면 문자열로 인식하게 되는데 깊은비교를 하면 오류가 나므로 얕은 비교로 기입하였다.
  save(); // 이렇게 되면 로컬스토리지 까지 제어가 된다.
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);

    li.append(span, button);
    li.id = todo.id;
    ul.prepend(li);
  }
};

const handler = (event) => {
  event.preventDefault();
  const todo = {
    id: Date.now(),
    text: userInput.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  userInput.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos; // 새로고침을 하여도 잔여 기록이 남아있게 된다.
  }
};

init();
form.addEventListener("submit", handler);

// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello");
// console.log(myData);
