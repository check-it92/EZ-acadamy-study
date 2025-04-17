import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  color: var(--light-color);
  /* &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  } */
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(80%);
`;

const BannerInfo = styled.div`
  position: absolute;
  top: 65%;
  left: 40px;
  transform: translateY(-30%);
`;

const MovieTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  margin-bottom: 20px;
`;

const MovieOverview = styled.p`
  width: 55%;
  letter-spacing: 2;
  font-size: 1.8rem;
  line-height: 25px;
`;

const Banner = ({ movie }) => {
  return (
    <Wrapper>
      <Img
        src={`https://image.tmdb.org/t/p/w1920/${movie.backdrop_path}`}
        alt="bgimg"
      />
      <BannerInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieOverview>{movie.overview}</MovieOverview>
      </BannerInfo>
    </Wrapper>
  );
};

export default Banner;
