import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--light-color);
  font-size: 2rem;
  padding: 10px 14px;
  margin: 20px 0px 20px 40px;
  background: var(--accent-color);
  width: 220px;
  text-align: center;
  border-radius: 10px 2px 30px 0;
`;

const Home = () => {
  const dispatch = useDispatch();
  const {
    nowPlayingMovie,
    popularMovie,
    topRatedMovie,
    upComingMovie,
    loading,
  } = useSelector((state) => state.movie); // 반환하지 않고 바로 하기 때문에 return 생략가능

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#2c568c",
  };

  // 컴포넌트가 딱한번 마운트 되는 시점에서 활용하는 빈 의존성 배열
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" cssOverride={override} size={120} />
      </Wrapper>
    );
  } else {
    return (
      <>
        {nowPlayingMovie.results && (
          <Banner movie={nowPlayingMovie.results[19]} />
        )}
        <Title>Now Playing</Title>
        <MovieSlide movies={nowPlayingMovie} />
        <Title>Popular</Title>
        <MovieSlide movies={popularMovie} />
        <Title>Up Coming</Title>
        <MovieSlide movies={upComingMovie} />
        <Title>Top Rated</Title>
        <MovieSlide movies={topRatedMovie} />
      </>
    );
  }
};

export default Home;

// 무비라는 객체 안에 0번째 배열값이 적용이 되었다.
// 이 마운트 되는게 home 과 동시에 진행이 되면 충돌이 일어나므로
// > 순서대로 진행시킬 필요가 있다. 그때 조건부랜더링 를 입력하여 나타낸다 (앤드단락회로)
