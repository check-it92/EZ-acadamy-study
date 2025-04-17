import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// bootstrap 를 쓸경우 인스톨후 이 css를 꼭 깔아줘야 한다.
import styled from "styled-components";
import Globalstyles from "./styles/GlobalStyles.styles";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ img }) => `url(${img}) center/cover no-repeat`};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [apiError, setApiError] = useState("");
  const [background, setBackground] = useState(null);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  // 위도와 경도 : 비동기적처리(가상돔)이라 순차적으로 불러올 필요가 있다. 그래야 오류가 안남
  // 그래서 async 랑 await를 같이 써줘야 한다.
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      // 한국온도로 구성 == &units=metric 대입
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      // 로딩 = 에러가 생길때 보이게 해달라!
      setApiError(err.message);
      setLoading(false); // true 값일 경우 계속해서 돌아가면서 보일것이다.
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null); // setCity state함수가 안에 들어온것이다. (강화시킨 것)!
    } else {
      setCity(city);
    }
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setApiError(err.message);
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  //언스플래쉬를 이용한 랜덤포토 방식(get을 쓴 방식)
  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random?client_id=${API_UNSPLASH_KEY}`;

    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => setBackground(full))
      .catch((error) => console.error("에러발생!"));
  };

  /* 상태 업데이트 관리를 해주는 곳 */
  // 백그라운드 이미지 랜덤 발생 (마운트 될때마다.)
  useEffect(() => {
    getBackground();
    getCurrentLocation();
  }, []);

  // 통합본 a가 아니라면 b가 되게 해줘
  useEffect(() => {
    if (city === null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);
  /*
  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    getWeatherByCity();
  }, [city]);
  */

  return (
    <>
      <Globalstyles />
      {loading ? ( // 로딩스피너에 대한 삼항연산식
        <div>
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : (
        <Wrapper img={background}>
          <Container>
            <WeatherBox weather={weather} />
            <WeatherButton
              cities={cities}
              handleCityChange={handleCityChange}
              selectedCity={city}
            />
          </Container>
        </Wrapper>
      )}
    </>
  );
}

export default App;
