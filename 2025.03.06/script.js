// 캔버스 기초 세팅
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// canvas 초기화!!

// context 생성하기!!
// 그림을 캔버스위에 그리기 위한 환경요소들의 실체!! 혹은 집합체
// 문맥, 맥락, 목차 등등 사전적 정의

const ctx = canvas.getContext("2d");
// ctx.fillStyle = "rgb(200, 0, 0)";
// ctx.fillRect(10, 10, 50, 100);

// 각도의 대한 개념이 중요 !!! = 도씨사용불가! & 호도법!!

// 사각형 그리기!!
// >> 내장함수 및 속성이 지원!
// fillReac - 사각형 (rectangle)을 의미!! = 인자값(x, y, width, height)
// strokeRect - (x, y, width, height) = 선(획) 그리기
// clearRect - (x, y, width, height) = 지우고 싶을때
// fillStyle = "색상" (채우기)
// strokeStyle = "색상" (선)

/* 1)사각형 그리기
ctx.fillStyle = "rgb(200, 0, 0)"; // 첫번째 물감
ctx.strokeStyle = "#000";

ctx.fillRect(10, 10, 200, 100);
ctx.strokeRect(10, 10, 200, 100);

ctx.fillStyle = "#00f";
ctx.fillRect(50, 50, 120, 120);

ctx.clearRect(10, 10, 80, 45);
*/

// 2)삼각형 그리기
/* 경로설정 : 선언 = beginPath() , 종료 = closePath() why? 선이 계속 늘어날수 있기 때문에 점과 점이 만나
            하나의 선이 생기는 것이므로 설정을 해줘야 한다. 만일, 시작을 하고 종료되면 자동으로 종료시점으로 받아들여 생략도 가능
  * 직선경로를 설정할 때 > lineTo(x, y) (시작, 종료)
  * 해당 선에 대한 색을 채울때 > stroke()
  * 설정 및 그린 직선경로들을 활용해서 어떤 도형이 생성 되었을때, 그 안에 색상을 넣고자 한다면
  => fill()
  * 현재 그림을 그리고 있는 위치에서 경로를 이동하고자 할때, moveTo(x,y)
 */

// 1.직선그리기
/*
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 200);
ctx.stroke();
*/

// 2.삼각형 그리기
/*
ctx.beginPath();
ctx.moveTo(50, 50); // 시작점
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// 이렇게 될 경우 자동으로 본인이 완결되어서 종료를 시킴
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 100); // 시작점
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "rgb(0, 200, 0)";
ctx.fill();
*/

// 3) 원 및 호 그리기
// 아치형 구조 => 양화대교 같은 반 원 구조!
// arc(x, y, r, 0(시작각도), 360(종료각도))
// arc(x, y, r, startAngle, endAngle, counterClockWise = true = 반시계방향);
// counterClockWise = true값이 디폴트 값 이고 설정을 해줘야 돌아간다.
/*
// 1. 원그리기
ctx.beginPath();
ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "#ff0";
ctx.fill();

// 2. 반원 그리기
ctx.beginPath();
ctx.arc(120, 100, 50, 0, Math.PI, true);
ctx.arc(280, 100, 50, 0, Math.PI, false);
ctx.fillStyle = "#f00";
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, Math.PI * 0.5, Math.PI * 1.5, false);
ctx.closePath();
ctx.stroke();

// 3. 호(부채꼴) 그리기
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 3), false);
// 3.14(파이) /(나누기) (180*60) = 3 이므로 계산식이 이렇게 된다.
ctx.stroke();
*/

// 4. 타원그리기
// 반지름이 중요(radius), / 타원의 각도를 결정해야함(어떤모양으로 할지)
// 설정값 (회전각이 있는 경우)
// ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterClockWise = true = 반시계방향);

/*
ctx.beginPath();
ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
ctx.strokeStyle = "#f00";
ctx.stroke();

ctx.beginPath();
ctx.ellipse(150, 200, 80, 50, Math.PI / -6, 0, Math.PI * 2);

ctx.strokeStyle = "#00f";
ctx.stroke();

// 스타일을 재설정하지 않거나 종료(close)를 하지 않는다면 상위요소의 값을 그대로 상속받게 되고
// 재설정시 해당 값을 우선적으로 상속받게 된다.
*/

/*
ctx.beginPath();
ctx.save(); // 특정구간을 저장하겠단 뜻
ctx.scale(1, 0.7); // x, y 의 비례함을 의미 , 원을 그리기전 먼저 설정을 해야한다. (크기(틀)=모양값 설정)
// scale 로 인해 압축이 되어 모양도 위치도 조금 달라진다.
ctx.arc(200, 150, 80, 0, Math.PI * 2, true); // 스케일값에 맞춰서 원이 만들어지게 된것
ctx.stroke();
ctx.restore(); // 특정구간 이후 다시 돌리겠다 = 원상복구하겠다 라는 지점 설정! / 이 이후부터 초기화된다.

ctx.beginPath();
ctx.arc(200, 150, 30, 0, Math.PI * 2, true);
ctx.stroke();
*/

// 5) 곡선 그리기!
// TTF: 2차 베지에 / OTF: 3차 베지에
// 2차베지에 : quadraticCurvto()
/*
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.quadraticCurveTo(200, 50, 350, 200); // 조절점 좌표값(x, y), 종결되는 지점(x, y)로 총 삼각구조로 그 안에서 선이 그려지는 것
ctx.stroke();
*/
/*
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.quadraticCurveTo(100, 50, 150, 100);
ctx.quadraticCurveTo(200, 150, 250, 100);
ctx.quadraticCurveTo(300, 50, 350, 100);
ctx.stroke();
*/

// 3차 베지에 : bezierCurveto()  1번째 조절점 좌표값(x, y), 2번째 조절점 좌표값(x, y), 종결되는 지점(x, y)
/*
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.stroke();
*/

// 6) 특정 경로값을 저장해놓고 가져와서 사용하고자 할 때!

// new 예약어를 사용하여 프로토타입(인스턴스 객체)를 활용하여 반복문을 사용할 것
// new Path2D();

const triangle = new Path2D(); // 생성자 함수선언

triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

const circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.stroke(triangle); // 함수호출
ctx.fillStyle = "#87CEFA";
ctx.fill(circle);
