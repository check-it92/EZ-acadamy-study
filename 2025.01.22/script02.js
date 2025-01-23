// 사용자에게 어떤 숫자를 받을 예정입니다.
// 그 숫자가 소수인지 아닌지를 판별하는 프로그램 제작!!
// 소수 > 소수점x // 1과 본인자신만 나눌 수 있는 숫자 = 소수

const number = parseInt(prompt("자연수를 입력하세요!"));
let isPrime; // 스위치문 변수 (값을 정하지 않고 입력값에 따라 변경되기 때문에 let 변수로)

if (!isNaN(number)) {
  // isNaN으로 인해서 숫자가 아닌 답이 참이 된다. 거기에 !를 줌으로써 부정문을 만듦 즉, 참은 숫자가 다시 참이 되는 것이다.
  if (number === 0 || number === 1) {
    alert(`${number}(은)는 소수도 합성수도 아닙니다!`);
    location.reload();
  } else if (number === 2) {
    isPrime = true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
        // but, 2로는 나누어지지 않지만 5의배수 7의배수 가 오류가 날수 있다. 그럴땐 "switch 구문을 쓸것이다." 조건문x
      }
    }
  }
} else {
  alert("😌 숫자가 아닙니다!");
}

if (isPrime) {
  alert(`${number}(은)는 소수입니다!`);
} else {
  alert(`${number}(은)는 소수가 아닙니다!`);
}
