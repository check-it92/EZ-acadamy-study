/* 사용자에게 12달 중 좋아하는 월의 정보를 입력받으세요!! 
예) 1 > 1월 7 > 7월

12월 ~ 2월 : 스키의 계절, 겨울을 좋아하시네요!
3월 ~ 5월 : 책 읽기 좋은 봄을 좋아하시네요!
6월 ~ 8월 : 여행가기 좋은 여름을 좋아하시네요!
9월 ~ 11월 : 선선한 날씨인 가을을 좋아하시네요!

if 조건문을 활용해서 위 코드를 출력 */

let fmonth = prompt("어느 달을 좋아하세요?");

if (fmonth !== "" || fmonth !== null);
{
  fmonth = parseInt(fmonth);
  if (3 <= fmonth && fmonth <= 5) {
    alert("책 읽기 좋은 봄을 좋아하시네요!");
  } else if (6 <= fmonth && fmonth <= 8) {
    alert("여행가기 좋은 여름을 좋아하시네요!");
  } else if (9 <= fmonth && fmonth <= 11) {
    alert("선선한 날씨인 가을을 좋아하시네요!");
  } else if (isNaN(fmonth) || 0 === fmonth) {
    alert("정상적인 월을 입력하세요.");
  } else {
    console.log(fmonth, typeof fmonth);
    alert("스키의 계절, 겨울을 좋아하시네요!");
  }

  window.location.reload(); // 새로고침하는 함수
}

//   if ((Number(month) == 12, 1, 2)) {
//     alert("스키의 계절, 겨울을 좋아하시네요!");
//   } else if ((Number(month) == 3, 4, 5)) {
//     alert("책 읽기 좋은 봄을 좋아하시네요!");
//   } else if ((Number(month) == 6, 7, 8)) {
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//   } else {
//     Number(month) == 9, 10, 11;
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//   }
// }
