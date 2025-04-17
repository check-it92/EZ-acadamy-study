// Redux Tool Kit 의 핵심!! (함수)
// 기존 리듀서가 하는 역할을 다 대체함
import { createSlice } from "@reduxjs/toolkit";

let initialState = { contactList: [], keyword: "" };
// 해당함수에 초기값이 포함되어지게 된다.

//인자값으로 객체가 들어온다.
//타입또한 여러개가 들어올수 있기때문에 객체안에 있는 키값으로 불로 올수 있게 한다.
// 기존에 했던 type을 함수로 대체해서 직접 해당함수로 작동되어진가. 그안에 인자값은 (state, action)값을 받는다.
// 대신 각각의 함수에 개별적으로 해당 값들을 넣어줘야한다.

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contactList.push({
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
      });
    },
    searchByusername(state, action) {
      state.keyword = action.payload.keyword;
    },
  },
});

// 여기서 state = 기본 초기화값
// action 개체가 사용자 입력값이 된다.

console.log("test", contactSlice);

export const contactReducer = contactSlice.reducer;
// 이 해당값을 스토어로 송출한다.
// 여러개의 값을 보낼것이기 때문에 default를 쓰지 않는다.

// 해당 함수들을 (기존의 타입->함수 변환) 송출하기 위한 단계
// 구조분해할당으로 불러온다.
export const { addContact, searchByusername } = contactSlice.actions;

/* creatStore 를 썻을때 버전 (전개연산자 -> 비효율성)
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    case "SEARCH_BY_USERNAME":
      return {
        ...state,
        keyword: payload.keyword,
      };

    default:
      return { ...state };
  }
};
export default reducer;
*/
