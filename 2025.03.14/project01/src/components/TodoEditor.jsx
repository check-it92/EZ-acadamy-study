import React, { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const inputRef = useRef();
  // 객체화 하기 위해 useRef를 씀
  const onChangeContent = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const onSubmit = () => {
    // e.preventDefault();
    // 여기서 이벤트를 입력을 받아야하기 때문에 provenDefault를 입력하면 안된다.
    if (!content) {
      // 그 어떠한값도 입력되지 "않는다면?"
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onkeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="TodoEditor">
      <h4>
        NEW Todo Edit <br />
        쀼~☆*: .｡. o(≧▽≦)o .｡.:*☆
      </h4>
      <form className="editor_wrapper" name="todolist" action="#" method="get">
        <input
          type="text"
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onkeydown}
          placeholder="새로운 Todo..."
        />
        <input type="button" value="추가" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default TodoEditor;
