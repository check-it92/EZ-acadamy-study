/* [1,3,5,7,9,11,13,15,17,19] 배열 a 가 있다.
10보다 큰 값만 찾아서 콘솔창에 출력해주세요! */

// 조건문 & 반복문을 활용해서 해보기!

const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

arrs.forEach((arr) => {
  if (arr > 10) console.log(arr);
});

for (i = 0; i < arrs.length; i++) {
  if (arrs[i] > 10) console.log(`${arrs[i]}`);
}
// 재활용성을 살려서 arrs.length 로 인덱스의 길이로 제한을 건것이다.
