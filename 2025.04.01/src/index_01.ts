//제네릭 타입별칭 복습

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

// 인터페이스 방식을 이용한 인덱스 시그니처 타입!!

interface Map<V> {
  [key: string]: V;
}

let stringMap3: Map<string> = {
  key: "value",
};

let booleanMap3: Map<boolean> = {
  key: true,
};

// 제네릭 인터페이스

interface Ikeypair<K, V> {
  key: K;
  value: V;
}

let keyPair: Ikeypair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: Ikeypair<boolean, string[]> = {
  key: true,
  value: ["1"],
};
