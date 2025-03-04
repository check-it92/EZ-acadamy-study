const email = document.querySelector("input[type='email']");

const button = document.querySelector("input[type='button']");

const result = document.querySelector("#result");

/*
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "" || null) {
    let userName = email.value.split("@")[0];
    userName = userName.slice(0, 3); // 0,1,2 까지의 텍스트값만 출력
    let domain = email.value.split("@")[1];

    result.innerText = `${userName}****@${domain}`;
  }
}); */

button.addeventListener("click", () => {
  if (ElementInternals.value !== "") {
    let userName = email.value.split("@")[0];
    let domain = email.value.split("@")[1];

    let half = userName.legnth / 2;
    userName = userName.slice(0, userName.legnth - half);
    result.innerText = `${userName}***@ ${domain}`;
    email.value = "";
  }
});
