let initialState = {
  count: 1,
};

const reducer = (state = initialState, action) => {
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // }
  // return { ...state };

  //스위치문
  switch ((action, type)) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
};

export default reducer;
