import { weathermap, unsplash } from "./env.js";

// 활용할수 있는 다른 방안
// 전치사 'in'을 활용해서 우리는 쓸수 있다.
/* 
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition();
}
*/

// 함수선언 > 인자값을 부여하기 위해 주소 안쪽으로 위치이동
const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weathermap}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      const city = document.querySelector(".city");
      const weather = document.querySelector(".weather");
      const temp = document.querySelector(".temp");
      const icon = document.querySelector(".icon");

      let cityName;
      switch (result.name) {
        case "Jamwon-dong":
          cityName = "🌏 역삼동";
          break;
      }

      let weatherInfo;
      switch (result.weather[0].main) {
        case "Haze":
          weatherInfo = "😶‍🌫️ 안개";
          break;
      }

      weather.innerText = weatherInfo;
      city.innerText = cityName;
      temp.innerText = `${result.main.temp}℃`;
      icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
    });
};

const getPosition = (position) => {
  // 객체 구조분해 할당으로 (찾아올 값과 변수값이 같으므로)
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude); // 함수호출
};

const errorHandle = (error) => {
  console.error(error);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle);
} else {
  console.log("geolocation is not available");
}

// unsplash 를 통해 랜덤 이미지를 찾아오는 법 ?(쿼리값)client_id 후에 카테고리 설정가능
const imgURL = `https://api.unsplash.com/photos/random?client_id=${unsplash}`;

fetch(imgURL)
  .then((response) => response.json())
  .then(({ urls: { full } }) => {
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(${full})`;
  });
