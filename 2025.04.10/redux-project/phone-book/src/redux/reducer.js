// 연산처리하는 공간 = (초기값 세팅이 필요!)
// 배열형태로 되어 있어야 유리하다.

let initialState = { contactList: [], keyword: "" };
// 초기값을 관리하는 전역 변수
// state의 파이널 복제본이 배열안에 들어가게 된다.

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT": // 트리거
      return {
        ...state, // 전개연산자 그 배열안에 contactList를 찾아옴
        contactList: [
          ...state.contactList, //마찬가지로 배열이기 때문에 한번 더 풀어헤침
          {
            name: payload.name, // 추가를 바라는 요소들
            number: payload.number,
          },
        ],
      };
    case "SEARCH_BY_USERNAME": {
      return {
        ...state,
        keyword: payload.keyword,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
