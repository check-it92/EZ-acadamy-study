anime({
  targets: "ul li",
  translateY: (el, i) => {
    // 해당 짝수의 값
    if (i % 2 === 0) {
      return 80;
    } else {
      return -80;
    }
  },
  easing: "linear",
  duration: 1500,
  opacity: 1,
  /*이 아니메의 장점은 타겟층을 일일히 설정하지 않아도 초기의 설정값을 그대로 가져간다.
  delay: (el, i) => {
    return i * 300;
  },
  */
  delay: anime.stagger(300),
  loop: true,
  direction: "alternate",
});
