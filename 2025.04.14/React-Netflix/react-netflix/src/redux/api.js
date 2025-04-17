// api 인스턴스 만들기
import axios from "axios";

// api 초기설정
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: { "Content-type": "application.json" },
});

// 요청 인터셉트
api.interceptors.request.use(
  function (config) {
    //정상적 작동
    // console.log("Request Start", config);

    return config;
  },
  function (error) {
    console.log("Request Error", error);

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // console.log("Response Get", response);
    return response;
  },
  function (error) {
    console.log("Response Error", error);
    return Promise.reject(error);
  }
);

export default api;
