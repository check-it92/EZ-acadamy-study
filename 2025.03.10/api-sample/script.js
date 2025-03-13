const button = document.querySelector("button");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerHTML = `
  <b>위도 :  </b>${position.coords.latitude}, <b>경도 : </b>${position.coords.longitude}
  `;
};

const errorPosition = (err) => {
  alert(err.message);
};

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition); // 1회성

    // 옵션의 종류들 => 재활용 가능
    const options = {
      // 제한된 시간을 주고 못찾아오면 정보를 리셋해주는것 마치 새로고침
      // 사용자의 정보확인을 위한 유효시간 설정하는 옵션 (제한시간)
      // 또한, 이동한 경로에 맞춰 새로이 사용자의 바뀐 위치값을 즉각 확인하도록 하는 옵션
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
});
