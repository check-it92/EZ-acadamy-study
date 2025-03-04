const url = "https://reqres.in/api/products";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true); // 초기화 단계
xhr.send(); // 라이브서버에서 볼 수있는 출력단계

// const rederHTML = (items) => {
//   let output = ""; // 빈문자열로 재선언
//   const result = document.querySelector("#result");
//   products.forEach((item) => {
//     output += `
//     <h2>${item.name}</h2>
//     <ul>
//     <li>${item.year}</li>
//     </ul>
//     <hr/>
//     `; // 빈 문자열 안에 재할당 한것!
//   });
//   result.innerHTML = output;
//   // output은 내부에서만 쓸수 있는 지역 요소이다. 그렇기 때문에 선언을 하고 재할당을 해줘야 한다.
// };

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 예외조항처리
    const products = JSON.parse(xhr.responseText);
    products.data.forEach((product) => {
      result.innerHTML += `
      <div>
      <p>상품명 : ${product.name}</p>
      <p>생산년도 :${product.year}</p>
      </div>
      `;
    });
  }
});

// let resultText = "";
// products.forEach((item) => {
//   resultText += `${products.name} 상품명, ${products.year} 생산년도 입니다.`;
// });

// result.innerHTML = resultText;
