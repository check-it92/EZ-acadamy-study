const eyeIcon = document.querySelector(".main i");
const input = document.querySelector("input");
console.log(input);

eyeIcon.addEventListener("click", () => {
  input.classList.toggle("active");

  if (input.classList.contains("active")) {
    input.type = "text";
    eyeIcon.className = "fas fa-eye";
  } else {
    input.type = "password";
    eyeIcon.className = "fas fa-eye-slash";
  }
});
