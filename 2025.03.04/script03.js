/**
 * 데이터 통신을 할때, 데이터가 정상적으로 들어왔는지에 따라 처리해줄수 있는 방법을
 * 이원화 할수 있는데, 그때 사용하는방법이 바로 "예외처리" 방식입니다.
 *
 * 예외처리 방식은
 * 데이터가 정상적으로 들어왔을 때 => try문을 사용하고
 * 데이터가 정상적으로 들어오지 못했을 때 => catch문을 사용합니다.
 * 데이터의 유입과 무관하게 최종적인 메세지를 전달하고자 할 때 => finally문을 사용합니다!
 */

// 오류발생시 처리하는 방식 구문* 에러도 하나의 "객체" 이다.
// 중간에서 멈춤(무한오류) 와 프로세스가 처리되는 과정은 다르다.

/*
try {
  console.log("시작");
  add();
  console.log("실행 중...");
} catch (err) {
  alert(`에러이름 : ${err.name}`);
  alert(`에러내용 : ${err.message}`);
  alert(`전체에러 : ${err}`);
} finally {
  console.log("끝");
}
*/

const json = `{
  "grade": 3,
  "age": 20
}`;

try {
  const user = JSON.parse(json);
  if (!user.name) {
    //throw "사용자 이름이 없습니다.";  부정연산자로 정의하고 그 밑에 throw 로 명시적으로 구문을 준것!
    throw new Error("사용자 이름이 없습니다."); // 이렇게 new 생성자로 구문해서 넣기도 한다.
  }
} catch (err) {
  console.error(err);
}
