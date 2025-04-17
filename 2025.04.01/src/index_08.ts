// Maped typeof

interface User {
  id: number;
  name: string;
  age: number;
}

const fetchUser = (): User => {
  return {
    id: 1,
    name: "David",
    age: 20,
  };
};

// 방법1
// type PartialUser = {
//   [key in "id" | "name" | "age"]?: User[key]; // 이 유니온 타입중 하나가 key 값에 들어온다는 것
// };

// 방법2
// keyof 연산자 활용 = 타입을 추출하는게 가능
type PartialUser = {
  [key in keyof User]?: User[key]; // 이 유니온 타입중 하나가 key 값에 들어온다는 것
};

const updateUser = (user: PartialUser) => {};

updateUser({ age: 25 });
