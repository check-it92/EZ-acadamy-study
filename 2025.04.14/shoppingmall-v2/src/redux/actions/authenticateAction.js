//login.jsx를 가져와서 프로토타입의 형태를 생성해놓는 것 해당값을 받아서 비동기처리방식을 하기 위해
// 하나의 틀을 생성! 후 활용하려고 하는 것(액션개체)
// 여기서 실행된 값이 authenticateRedux로 전달되어야 한다.
// 미들웨어를 거친 것이 된다.

// 여기 dispatch 는 login.jsx에서 선언되었기 때문에 그 값을 끌고오면된다.(내포되어있음)
const getLogin = (id, password) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { id, password },
    });
  };
};

// 로그아웃
const getLogout = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  };
};

//함수로 반환되는 값을 객체로 변환해서 보내겠다는 의미
export const authenticateAction = { getLogin, getLogout };
