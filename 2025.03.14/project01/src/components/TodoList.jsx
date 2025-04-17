import React, { useState, useEffect, useMemo, useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext, TodoDispatchContext } from "../App";

const TodoList = () => {
  const todo = useContext(TodoStateContext) || [];
  const { onUpdate, onDeleteMultiple } = useContext(TodoDispatchContext) || {};

  const [search, setSearch] = useState("");
  const [selectAll, setSelectAll] = useState(false);

  // todo 배열이 변경될 때마다 전체선택 상태 체크
  useEffect(() => {
    // 모든 항목이 완료 상태인지 확인
    const allSelected = todo.length > 0 && todo.every((item) => item.isDone);
    setSelectAll(allSelected);
  }, [todo]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  // 최적화 시키기
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  // 전체선택 토글 함수
  const handleSelectAll = () => {
    const newSelectAllState = !selectAll;
    setSelectAll(newSelectAllState);

    // 전체 항목의 ID 배열 생성, 모든 항목의 상태를 한 번에 업데이트
    const allItems = [...todo];

    allItems.forEach((item) => {
      // 현재 상태와 원하는 상태가 다를 때만 업데이트
      if (item.isDone !== newSelectAllState) {
        onUpdate(item.id);
      }
    });
  };

  // 선택된 항목 삭제 함수
  const handleDeleteSelected = () => {
    // 선택된 항목만 필터링
    const selectedItems = todo.filter((item) => item.isDone);

    // 선택된 항목이 없으면 알림
    if (selectedItems.length === 0) {
      alert("삭제할 항목을 선택해주세요.");
      return;
    }

    // 확인 메시지 표시 (선택 사항)
    if (
      window.confirm(
        `선택한 ${selectedItems.length}개 항목을 삭제하시겠습니까?`
      )
    ) {
      // 선택된 항목 ID 배열 생성

      const selectedIds = selectedItems.map((item) => item.id);
      // 한 번에 모든 선택된 항목 삭제
      onDeleteMultiple(selectedIds);
    }
  };

  return (
    <div className="TodoList">
      <h4>TodoList 🍎</h4>
      <div className="count">
        <div>Total : {totalCount}</div>
        <div>Succeed : {doneCount}</div>
        <div> ...ing : {notDoneCount}</div>
      </div>
      <input
        className="searchbar"
        type="text"
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="todolist_header">
        <div className="todolist-inner">
          <label className="select_all">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <span>
              <b>전체선택</b>
            </span>
          </label>
          <button onClick={handleDeleteSelected}>All Del</button>
        </div>
      </div>
      <div className="list_wrapper">
        {getSearchResult().map((it) => {
          return <TodoItem key={it.id} {...it} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
