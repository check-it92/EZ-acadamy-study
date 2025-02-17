// 1도  = 파이 / 180 (분자 / 분모)
// 12 / 360도 = 파이 / 6 = 각 30도 씩 유지

const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
  if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;
  // 3,6,9,12 의 경우에는 건너 띄워라 라는 뜻 continue
  const angle = (i + 1) * (Math.PI / 6);
  //            i가 1 = 0+1 일때 수학함수.파이 / 6
  const x =
    132 - nums[i].offsetWidth + 132 * Math.abs(Math.sin(angle).toFixed(2));
  //132 = 반지름 값 (패딩값 8을 제외한)
  const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));

  if (i + 1 > 6) {
    nums[i].style.right = `${x}px`;
  } else {
    nums[i].style.left = `${x}px`;
  }

  if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3)) {
    nums[i].style.top = `${y}px`;
  } else {
    nums[i].style.bottom = `${y}px`;
  }
}

const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");

const clock = () => {
  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6; // 초는 60개의 숫자를  360도 나누기로 나온 값 (각도)
  let secondAngleValue = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6; // 분 또한 60개의 숫자를  360도 나누기로 나온 값 (각도)
  let minuteAngleValue = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle = hour * 30 + (minute / 60) * 30;
  // 각각 숫자 사이에 시각이 올때도 있다 분의 영향을 받고 있고 계속 진행되는 상황인거고
  // 보다 느리게 가기 때문이다.
  // 그래서 분의 값을 더하고 * 30은 각 시의 사이 값의 100% 너비값 을 곱하면 된다.
  let hourAngleVlaue = `rotate(${hourAngle}deg)`;

  secondPointer.style.transform = secondAngleValue;
  minutePointer.style.transform = minuteAngleValue;
  hourPointer.style.transform = hourAngleVlaue;
};

setInterval(clock, 1000);
