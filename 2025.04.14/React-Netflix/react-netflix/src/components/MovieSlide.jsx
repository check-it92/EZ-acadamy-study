import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const Wrapper = styled.div`
  color: var(--light-color);
  padding-left: 40px;
`;

const MovieSlide = ({ movies }) => {
  // 캐러셀 = 반응형 슬라이드 생성!
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 400 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={4000}
      >
        {movies.results.map((item, index) => (
          <MovieCard key={index} item={item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MovieSlide;
