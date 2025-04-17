type Exclude<T, U> = T extends U ? never : T;
// 서브타입이냐? 슈퍼타입이냐에 따라서 조건부가 갈림

type A = Exclude<number | string | boolean, string>;

// infer : Inferred : 추론된
// 기본적으로 어떤 변수를 선언하고 해당 변수안에 값을 적용 => 타입추론
// infer의 타입은 특정 함수에서 반환값의 타입을 추론!

type ReturnType<T> = T extends () => infer R ? R : never;

// infer T가 함수에 상속되는 서브타입이냐? 아니냐? 이 조건식이 참이 될 수 있게끔 추론해줌

type FuncA = () => string; // 문자로 조건을 검
type FuncB = () => number; // 숫자로 조건을 검


type B = ReturnType<FuncA>;
type C = ReturnType<FuncB>;
