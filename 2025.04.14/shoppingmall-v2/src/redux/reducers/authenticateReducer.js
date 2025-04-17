// 여기서 store로 보낼것이다.

let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const authenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  // 초기값이 false였는데 로그인 성공 하면 true값으로 바꿔줘
  switch (type) {
    case "LOGIN_SUCCESS":
      // 전개연산자로 불러오는게 먼저 객체 배열상태이므로
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };

    case "LOGOUT_SUCCESS":
      // 전개연산자로 불러오는게 먼저 객체 배열상태이므로
      // 로그아웃을 했으므로 id, password 가 빈값이 되고 초기값이 다시 false가 된다.
      return {
        ...state,
        id: "",
        password: "",
        authenticate: false,
      };

    default:
      return { ...state };
  }
};

export default authenticateReducer;
