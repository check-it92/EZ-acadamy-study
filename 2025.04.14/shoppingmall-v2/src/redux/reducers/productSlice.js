// 필수요소
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// createAsyncThunk로 인해 리듀서 + 액션이 되었다.
import { build } from "vite";

let initialState = {
  productList: [],
  isLoading: false,
  error: null,
};
/*
// initialState초기값은 객체형태이어야한다 몇개가 들어올 지 모르기때문에
// productList : 빈배열의 값이 초기 값이다. 해당 키

// 상품정보가져오기 전용 Reducer
//초기값과 상태관리 필요
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
};
// return 은 초기값에 대입할 값을 반환해서 보내겠다는 의미

export default productReducer;
*/

// 첫번째 인자값에 사용하고자 하는 이름 (액션)
export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      const url = `https://my-json-server.typicode.com/Divjason/reactshop/products?q=${searchQuery}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      // 외부에서 못찾아올시 그만 값을 배출해줘 라는 뜻
      thunkApi.rejectWithValue(error.message);
    }
  }
);

// 리듀서부분
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// addCase 함수가 상황별로 실행을 적용시켜서 대처할수 있게 해줌
// extraReducers 가 위쪽에서 행해진 반환값에 따라 상태변화
// (준비, 진행중, 완료)pending fullfield, rejected

// 해당요소 출력
export const productActions = productSlice.actions;
// 전체요소 출력
export default productSlice.reducer;
