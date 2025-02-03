// value 를 찾아오는 첫 번째 방법 (실시간으로 불러오진 못함)
//console.log(document.querySelector("#order-name").value);

const fruitsItems = document.querySelector("#items");

const displayfruit = () => {
  let selectedText = fruitsItems.options[fruitsItems.selectedIndex].innerText;
  alert(`${selectedText} (을)를 선택했습니다.`);
};

fruitsItems.addEventListener("change", displayfruit);
