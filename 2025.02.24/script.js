// 문자열
// substring(), slice() => 문자열 안에 있는 문자를 추출하고자 할때 사용가능한 메서드
// => 공통점 : 첫번째 인자값은 해당 문자열 내 시작하는 문자의 인덱스를 의미,
// 두 번째 인자값은 찾아오고자 하는 문자열의 인덱스 + 1
// => 차이점 : slice()는 문자열의 뒤에서부터 문자를 찾아올수 있도록 하는 -(음수값)을 사용가능
//            substring() 음수사용불가

// 배열 메서드!!

const subject = ["html", "css", "js", "ts", "react"];

//subject.splice(1);
subject.splice(1, 3);
//배열 내 특정 위치부터 원하는 갯수 만큼 아이템값을 추출할 떄 사용할수 있다.
// (내가 선택한 구간을 추출 할 수 있다.) ===> 원본 배열의 데이트를 변경시킨다.
// 두 번째 인자값을 줄 경우 : 우리가 찾아오고자 하는 아이템의 갯수를 의미

console.log(subject);

const colors = ["red", "green", "blue", "white", "black"];
// console.log(colors.slice(2));  2번부터 시작 2번부터의 인덱스값을 반환 그 이전을 잘라냄
console.log(colors.slice(2, 4)); // 두번째 인자값을 부여하면 인자값 -1 의 인덱스값을 추출한다. 
console.log(colors);

// 두 함수의 차이점 : 원본배열에 영향을 끼치느냐? 아니냐 의 차이
