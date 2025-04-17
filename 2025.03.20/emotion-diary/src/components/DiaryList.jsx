import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import Button from "./Button";
import styled from "styled-components";

const DiaryContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0;
`;

const LeftContents = styled.div`
  flex: 1;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  background: var(--input-color);
  border: none;
  border-radius: 4px;
  font-size: 2rem;
  font-family: var(--nanum-font);
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const RightContents = styled.div`
  flex: 3;
  & > button {
    width: 100%;
  }
`;

const ListContents = styled.div``;

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setsortdeData] = useState([]);
  const navigate = useNavigate();

  // 함수설정 반환값을 어떻게 하냐에 따라 최신순, 오래된순으로 갈림 if조건문으로
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(data));
    // 배열데이터를 문자열로 바꿨따가 => 다시 데이터 로 바꾼 기법
    copyList.sort(compare);

    setsortdeData(copyList);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  return (
    <>
      <DiaryContents>
        <LeftContents>
          <Select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, index) => (
              <option key={index} value={it.value}>
                {it.name}
              </option>
            ))}
          </Select>
        </LeftContents>
        <RightContents>
          <Button text="새 일기 쓰기" type="positive" onClick={onClickNew} />
        </RightContents>
      </DiaryContents>
      <ListContents>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </ListContents>
    </>
  );
};

export default DiaryList;

// 우리가 만약 form 요소를 쓴다면 사용자가 상태를 관리해야 하므로
// 그럼 바로 {useState} 쓰면된다. 마찬가지로 이와 같은 필수요소로
// useRef, useEffect는 같은요소이다.
