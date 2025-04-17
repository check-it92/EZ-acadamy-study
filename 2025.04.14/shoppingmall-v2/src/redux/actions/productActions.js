// 액션 개체를 생성할 틀 을 만든다.
// 미들웨어 =변환단계 를 거쳐 비동기로 처리 할 수 있게 만듦
// dispatch를 써서 값을 보내려 하기 때문에 필요하다. => 액션개체 생성
// 인자값으로 dis, getState 값을 쓸수 있다.

/*
import { productActions } from "../reducers/productReducer";

// 여기 함수가 미들웨어를 거쳐 비동기로 될수 있게끔 해준다.
const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/Divjason/reactshop/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(productActions.getAllproducts({ data }));
  };
};

// 겟 프로덕트의 반환값을 프로덕트 올에서 가져갈 수 있게 해줄 것이다.
// 무조건 객체의 형식으로 보내야 한다. (문법!)
export const productAction = { getProduct };
*/

// createAsyncThunk로 합쳐져서 역할이 없어짐
