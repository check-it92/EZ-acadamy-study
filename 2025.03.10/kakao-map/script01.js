const url =
  "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=4127&pageNo=1&MobileOS=ETC&MobileApp=Go-camping&serviceKey=ycPZ0hovyN9MlCh5gW43FP0ao42Gq6Xaj%2BNeh3Abq9%2FP5CiZjtnhBWclKnvKJjit6oEi2KgaE2xkNNIbz4Ez2w%3D%3D&_type=json";

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const data = result.response.body.items.item;
    console.log(data);

    const showPosition = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      var container = document.getElementById("map");

      var options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };

      var map = new kakao.maps.Map(container, options);

      var clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        // Create marker
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

        markers.push(marker);

        (function (marker, campName) {
          var infowindow = new kakao.maps.InfoWindow({
            content: campName,
          });

          kakao.maps.event.addListener(marker, "mouseover", function () {
            infowindow.open(map, marker);
          });

          kakao.maps.event.addListener(marker, "mouseout", function () {
            infowindow.close();
          });
        })(marker, data[i].facltNm);
      }

      clusterer.addMarkers(markers);
    };

    const errorPosition = (err) => {
      alert(err.message);
    };

    window.navigator.geolocation.getCurrentPosition(
      showPosition,
      errorPosition
    );
  });
