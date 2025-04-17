import React, { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const [diary, setDiary] = useState();
  const data = useContext(DiaryStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    const matchDiary = data.find((it) => String(it.id) === String(id));
    if (matchDiary) {
      setDiary(matchDiary);
    } else {
      alert("일기가 존재하지 않습니다.");
      navigate("/");
    }
  }, [id, data]);
  return diary;
};

export default useDiary;

/* 수업 point 
1. id는 인자값
2. 참인값을 찾아와서 반환하는 함수중
- 복수를 찾아와서 비교하는것은 = filter()
- 하나의 단일값을 가져와서 봔환하는것은 = find() 이다.
3.  data.find((it) => String(it.id) === String(id));
- 하나의 값을 가져와서 그 매개변수의 id값과 다이어리의 id값을 형변환(문자열)로 해서 찾겠다.
*/
