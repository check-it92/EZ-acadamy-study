/*연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때, N명의 학생수를 입력한다면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
(예를 들어 25명의 학생수가 있다면 3다스가 필요합니다. / 178명의 학생수가 있다면 15다스가 필요합니다.) */

const student = parseInt(prompt("학생수를 입력하세요"));

const pencilBox = (pencil) => {
  // 함수 선언
  const pens = 12;
  const box = Math.floor(pencil / pens); // 내림방식 .나머지 버리고 몫만 구하는 역할
  const pNumber = pencil % pens;

  const totalpenBox = pNumber > 0 ? box + 1 : box;

  console.log(
    `${pencil} 명의 학생에게 연필을 나눠 주려면 ${totalpenBox} 다스가 필요합니다.`
  );
};

pencilBox(student); // 함수 호출
