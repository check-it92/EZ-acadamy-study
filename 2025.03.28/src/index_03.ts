type Person = {
  name: string;
  age: number;
}; // 우리가 커스텀한 타입

// 타입가드
const func = (value: number | string | Date | Person) => {
  // value.toUpperCase();
  // value.toFixed(); 오류가 난다.
  if (typeof value === "number") {
    // 해당타입을 지정해서 쓸수 있게끔 (다른 타입에 영향받지 않도록)
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // instanceof 내장클래스타입에서 파생되어진 프로토타입 객체 전용이다.
    console.log(value.toLocaleDateString());
  } else if (value && "age" in value) { // 우리가 커스텀한 타입을 쓰고자 할때 우리가쓴 조건 중 1개만이라도 있으면 된다.
    console.log(`${value.name}은 ${value.age} 세 입니다.`);
  } 
  // } else if ( typeof value === Date) 내장되어진 프로토타입 객체는 다르게 써야한다.
};

func("value");
