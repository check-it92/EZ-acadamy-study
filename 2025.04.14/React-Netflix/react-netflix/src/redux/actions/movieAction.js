// 미들웨어를 거쳐서 리듀서에게 가기 위해 return 값으로 반환하여 그값이 가는 것이다.
/*
const getMovies = () => {
  return async(dispatch) => {
    const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=3a2332bc992338228c56ad4c39cf6f20&language=ko-KR&page=1"
    const response = await fetch(url);
    const data = await response.json();

    dispatch({
      type: "nowPlaying",
      payload: data
    })
  };
};

export const movies = { getMovies };
*/
// axios 미들웨어를 사용하기 위해 찾아옴
// 외부에서 api를 끌고 올때는 async방식을 써야한다.

import api from "../api";
// api 키 환경변수에서 끌고와서 설정하기 meta는 CLI방식을 불러온 vite인걸 말해준다.
const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        loading: true,
      });

      // 현재상영작
      const nowPlayingMovieApi = api.get(
        `movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
      );

      // 인기상영작
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      // 개봉예정작
      const upComingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      // 명작
      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      // 장르
      const genresMovieApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      // 한번에 종합적으로 위에 정리하기
      const [
        nowPlayingMovie,
        popularMovie,
        upComingMovie,
        topRatedMovie,
        genresMovie,
      ] = await Promise.all([
        nowPlayingMovieApi,
        popularMovieApi,
        upComingMovieApi,
        topRatedMovieApi,
        genresMovieApi,
      ]);

      //리듀서로 보내기 위해 payload로 키값과 밸류값 설정
      //tmdb공통 양식 data로 찾아오고, 그 하위 세부 카테고리들 또한 불러올수 있다.
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          nowPlayingMovie: nowPlayingMovie.data,
          popularMovie: popularMovie.data,
          upComingMovie: upComingMovie.data,
          topRatedMovie: topRatedMovie.data,
          genresMovie: genresMovie.data.genres,
          loading: false,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_MOVIES_FAIL",
        loading: false,
      });
    }
  };
};

export const movieAction = { getMovies };
