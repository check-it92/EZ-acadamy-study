import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    pointer-events: none;
  }
`;

const Overlay = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    border: 2px solid var(--light-color);
    border-radius: 14px;
    padding: 5px;
  }
`;

const Title = styled.h1`
  width: 50%;
  position: absolute;
  bottom: 50px;
  left: 10px;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgb(255, 255, 255, 0.2);
  /* transition: transform 0.3s ease;
  &:hover {
    transform: translateX(3%);
  } */
`;

const Genre = styled.div`
  position: absolute;
  bottom: 6px;
  right: 10px;
  display: flex;
  gap: 4px;
`;

const Vote = styled.span`
  position: absolute;
  bottom: 30px;
  right: 10px;
  font-size: 1.3rem;
`;

const Adult = styled.div`
  position: absolute;
  top: 3px;
  right: 5px;
  background-color: ${(props) => (props.isAdult ? "#e74c3c" : "#6eaa5e")};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  opacity: 0.5;
  transition: all 0.3s;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  &:hover {
    opacity: 1;
  }
`;

const MovieCard = ({ item }) => {
  // 여기서 state 값은 initstate의 값이 된다.
  const { genresMovie } = useSelector((state) => state.movie);
  return (
    <Wrapper>
      <Overlay className="overlay"></Overlay>
      <Img
        src={`https://media.themoviedb.org/t/p/w500_and_h282_face/${item.backdrop_path}`}
        alt="thumbnail"
      />
      <Title>{item.title}</Title>
      <Adult isAdult={item.adult}>{item.adult ? "성인" : "전체"}</Adult>
      <Genre>
        {item.genre_ids.map((id, index) => (
          <Badge key={index}>
            {genresMovie.find((item) => item.id === id).name}
          </Badge>
        ))}
      </Genre>
      <Vote>⭐{item.vote_average.toFixed(2)}</Vote>
    </Wrapper>
  );
};

export default MovieCard;

/* 추가 부연설명

// 이 코드에서는 isAdult는 styled-components에서 사용하는 사용자 정의 prop입니다
// 이 값을 기반으로 스타일을 동적으로 변경할 수 있게 합니다.
// prop을 Adult 컴포넌트에 전달합니다
<Adult isAdult={item.adult}>{item.adult ? "성인" : "전체"}</Adult>

// 그리고 Adult 스타일 정의에서 이 prop을 사용해 배경색을 조건부로 설정합니다
const Adult = styled.div`
  background-color: ${props => props.isAdult ? '#e74c3c' : '#6eaa5e'};
  // 다른 스타일들...
`;
*/
