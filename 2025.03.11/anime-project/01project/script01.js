anime({
  targets: ".box1",
  translateX: 250,
  easing: "linear",
  background: "#000",
  loop: true,
  direction: "alternate",
  borderRadius: "50%",
});

anime({
  targets: ".box2",
  translateX: 280,
  translateY: 300,
  easing: "easeInQuart",
  background: "#f0f0f0",
  loop: true,
  direction: "alternate",
  delay: 1000,
  endDelay: 300,
});

// 해당값에만 따로 옵션값을 적용하고자 한다면 {} 기호로 부여해주면 된다.
anime({
  targets: ".box3",
  translateX: {
    value: 400,
    duration: 1000,
    delay: 1000,
  },
  rotate: {
    value: 360,
    duration: 3000,
    delay: 2000,
    endDelay: 200,
  },
  loop: true,
});
