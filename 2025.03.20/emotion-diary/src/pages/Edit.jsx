import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Editor from "../components/Editor";
import Header from "../components/Header";
import Button from "../components/Button";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const goBack = () => {
    navigate(-1);
  };

  const onClickDelete = () => {
    if (window.confirm("해당 일기를 삭제하시겠습니까?")) {
      onDelete(id);
      navigate("/");
    } else {
      return;
    }
  };

  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { id, date, content, emotionId } = data;
      // 콘솔로 찍어보았을때 targetID는 없다. 대신 id가 있기 때문에 순서에 맞춰 수정하면 된다.
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };

  // 예외처리 조항 !=부정문
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          title="일기 수정하기"
          leftChild={<Button text="뒤로가기" onClick={goBack} />}
          rightChild={
            <Button text="삭제하기" type="negative" onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;

// useParams : 내가 원하는 URL에 포함된 키와 값 형식의 객체를 반환받는 역할을 합니다. 동적으로 라우팅을 생성하기 위해 사용된다.
