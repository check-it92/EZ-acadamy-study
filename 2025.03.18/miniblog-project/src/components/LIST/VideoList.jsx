import React, { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 168px;
  height: 108px;
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;

const VideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const ImageContent = styled.img`
  width: 100%;
  height: 100%;
`;

const VideoList = ({ thumbnailUrl, videoUrl }) => {
  const videoRef = useRef();
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 1;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <VideoContent ref={videoRef} src={videoUrl} muted autoPlay></VideoContent>
      {/* // 비디오 요소에서 썸네일에서 소리가 나오면 정책상 오류로 잡혀서 muted autoPlay 를 설정해줘야 한다. */}
      <ImageContent src={thumbnailUrl} alt="비디오 썸네일" />
    </Wrapper>
  );
};

export default VideoList;
