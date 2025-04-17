/*
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "David",
    age: 20,
  },
};

// 대괄호 표기법, 온점표기법 => indexed access 의 방식이다.
// 인덱스를 활용한 방법
// post["author"], post.author

// 이렇게 해야 Post["author"] 해당 author의 key값들을 불러올수 있다. (대괄호 표기법으로 써야한다.)
// 중첩으로도 쓸수 있다. Post["author"]["id"] 이런식으로
const printAuthor = (author: Post["author"]) => {
  console.log(`${author.id} - ${author.name}`);
};

// 유연하게 쓸 수 있다. (객체, 함수, 배열 등등 가능)
// type PostList = {};

// 예시) 객체가 모여있는 타입배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 튜플은 각각의 값을 지정해줘서 고유의 값으로 써야함
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
*/

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

type Person = typeof person;

const person = {
  name: "David",
  age: 20,
  location: "seoul",
};

// 이렇게 다양한 프로퍼티를 다 유니온 처럼 쓰기 곤란하니 연사자를 활용함
// key: "name" | "age" | "location" => keyof Person 으로 대체 가능 대신 "타입"에만 활용가능!! 그래서 Person에 적용

const getPropertyKey = (person: Person, key: keyof Person typeof person) => {
  return person[key];
};
