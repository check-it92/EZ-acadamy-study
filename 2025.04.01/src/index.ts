//

import { title } from "process";

interface Post {
  title: string;
  tags: string[];
  content: string;
  thunbnailURL: string;
}

/*
// Pick 내가 원하는 타입만 뽑아서 쓸수 있는 기능 다중요소도 가능 | 이렇게
// const legacyPost: Pick<Post, "title" | "content"> = {
//   title: "힘내자",
//   content: "할 수있잖아!!!",
// }

// 픽을 담당하는 해당요소에서 가져와서 상속이 합당한지 판단후 해당 값을 찾아오게 하는 용도
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};
*/

/*
// Omit => 생략하다 란 뜻
// TYPE에서 KEY로 속성을 생략하고 나머지를 선택한 새로운 타입 반환
// 해당 title를 제외한 3가지로 수정함

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thunbnailURL: "string",
};
*/

// Exclude : 제거
// TYPE1에서 TYPE2를 제외한 새로운 타입 반환
type A = Exclude<string | boolean, string>;

// Extract: 추출
//TYPE1에서 TYPE2를 추출한 새로운 타입 반환
type B = Extract<string | boolean, boolean>;
