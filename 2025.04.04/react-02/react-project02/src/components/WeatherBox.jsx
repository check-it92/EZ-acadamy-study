import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 200px;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  gap: 20px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.6);
`;

const City = styled.h1`
  font-size: 2.2rem;
`;

const Weather = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Desc = styled.h3`
  font-size: 2.5rem;
`;

const WeatherBox = ({ weather }) => {
  let cityName = "";
  switch (weather && weather?.name) {
    case "Jamwon-dong":
      cityName = "서울시 서초구";
      break;
    case "Paris":
      cityName = "프랑스 파리";
      break;
    case "New York":
      cityName = "미국 뉴욕";
      break;
    case "Tokyo":
      cityName = "일본 도쿄";
      break;
    case "Seoul":
      cityName = "대한민국 서울";
      break;
  }

  // 날씨관리 재할당 구간
  let weatherMain = "";
  switch (weather && weather?.weather?.[0]?.main) {
    case "Clouds":
      weatherMain = "오늘 날씨 구름";
      break;
    case "Clear":
      weatherMain = "오늘 날씨 맑음";
      break;
    case "Mist":
      weatherMain = "오늘 날씨 안개";
      break;
    case "Haze":
      weatherMain = "오늘 날씨 미세안개";
      break;
  }

  return (
    <Container>
      <City>도시 : {cityName}</City>
      <Weather>
        온도 : {weather && weather?.main?.temp}℃ | 습도 :{" "}
        {/* 온도 : {weather && weater.main ? weather?.main.temp : ""}℃ | 습도 :{" "} - 다른방법*/}
        {weather && weather?.main?.humidity}%
      </Weather>
      <Desc>현재날씨 : {weatherMain} 🚎</Desc>
    </Container>
  );
};

export default WeatherBox;
