// 초기 세팅
let initialState = {
  nowPlayingMovie: {},
  popularMovie: {},
  upComingMovie: {},
  topRatedMovie: {},
  genresMovie: [],
  loading: true,
}; // 초기 값(기본매개변수)

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        nowPlayingMovie: payload.nowPlayingMovie,
        popularMovie: payload.popularMovie,
        upComingMovie: payload.upComingMovie,
        topRatedMovie: payload.topRatedMovie,
        genresMovie: payload.genresMovie,
        loading: false,
      };
    case "GET_MOVIES_FAIL":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default movieReducer;
