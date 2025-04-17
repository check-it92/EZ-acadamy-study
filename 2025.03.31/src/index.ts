// 타입별칭 - 타입시그티처 (고정에서) 열린 방식으로 변경가능
/*
type Map2<T> = {
  [key: string]: T;
};

let stringMap2: Map2<string> = {
  key: "Hello",
  // let stringMap2: Map2<number> = {
  //   key: 10, 이렇게 변경 가능
};
*/

// <>변수를 활용해서 최초선언(틀)이후 활용해서 쓰면된다.
interface IkeyPair<k, v> {
  key: k;
  value: v;
}

/*
interface IkeyPair2 {
  key: boolean;
  value: string[];
}


let keypair: KeyPair = {
  key: "Key",
  value: 10,
};

let keypair2: KeyPair2 = {
  key: true,
  value: ["i"],
};
*/
// 여러모로 값이 달라질때마다 그럼 새로 창출해야 할까? no class 처럼 사용하자 <>활용

// 틀 활용 <타입값만 맞게 변화시켜 사용>
let keypair: IkeyPair<string, number> = {
  key: "Key",
  value: 10,
};

let keypair2: IkeyPair<boolean, string[]> = {
  key: true,
  value: ["i"],
};
