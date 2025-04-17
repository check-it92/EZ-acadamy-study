import React, { useState, useEffect, useContext } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";
import { getMonthRangeByDate } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  // 내가 찾아오고자 하는 컨택스트 (인자값)으로 찾아온것 프로바이딩 해온것

  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  // 필터링

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        // 해당되는 각 월안에서의 값을 찾아올수 있도록 만들어줌 (시작과 끝) 예) 3월 1일 ~ 3월 31일 그 사이의 값들
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <>
      <Header
        title={headerTitle}
        leftChild={<Button text="<" onClick={onDecreaseMonth} />}
        rightChild={<Button text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </>
  );
};

export default Home;
