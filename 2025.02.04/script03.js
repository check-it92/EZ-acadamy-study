const openBtn = document.querySelector("#open");
const colseBtn = document.querySelector("#close");
const modalBox = document.querySelector("#modal-box");

openBtn.addEventListener("click", function () {
  this.classList.add("btnActive");
  modalBox.classList.add("active");
});

colseBtn.addEventListener("click", function () {
  openBtn.classList.remove("btnActive");
  modalBox.classList.remove("active");
});
