import React, { useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ content, created, id, isDone }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onchangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onchangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">{new Date(created).toLocaleDateString()}</div>
      <div className="btn_col">
        <button onClick={onClickDelete}>Delete</button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
// export default TodoItem;
