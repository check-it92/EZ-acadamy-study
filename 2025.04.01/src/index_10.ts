// 유틸리티 타입 내장되어진 제네릭 타입
// Partial = 주어진 타입의 모든 프로퍼티를 optional하게 만들어주는 기능을 제공합니다.

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnail?: string;
}

/*
const draft: Partial<Post> = {
  // 이걸 씀으로써 위에 타입들이 ? 붙은게 된다.
  title: "밥먹자",
  content: "제육볶음",
};

// partial 을 풀어서 쓴다면 이렇게 된다. (공식)
type Partial01<T> = {
  [key in keyof T]: T[key];
};
*/

/*
// required 옵셔널 프로퍼티를 쓰지 않겠다 라는 뜻
// 그럼 타입에 설정해놓은 옵셔널 프로퍼티가 제거된다. 
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "밥은 먹고 다니냐?",
  tags: ["해장국"],
  content: "달래해장국",
  // thumbnail: "https://www.naver.com",
};
*/

// 읽기전용 : Readonly - 수정이 불가하다.(원본유지)
const withThumbnailPost: Readonly<Post> = {
  title: "밥은 먹고 다니냐?",
  tags: ["해장국"],
  content: "달래해장국",
  thumbnail: "https://www.naver.com",
};

// withThumbnailPost.content = "맘스터치"; 오류발생

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
