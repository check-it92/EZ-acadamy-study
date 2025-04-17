// in 타입가드

type Admin = {
  tag: "ADMIN";
  name: string;
  KickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 변수설정 user안에 3가지요소가 다있기 때문에 밑에서 사용이 가능한것것
/*
const login = (user: User) => {
  if ("kickCount" in user) {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명을 추방했습니다.`);
  } else if ("point" in user) {
    console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
  } else if ("visitCount" in user) {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
};
*/

//태그를 활용한 간소화 방법 (switch 문 활용)
const login = (user: User) => {
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name}님 현재까지 ${user.KickCount}명을 추방했습니다.`
      );
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
};

// 3가지 요소를 모두 충족시키는 타입 겹치는건(단락회로 ) 겹치지 않는건(선택적프로퍼티 적용)
type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

const loading = {
  state: "LOADING",
};

const failed = {
  state: "FAILED",
  error: {
    message: "because error is...",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "data...",
  },
};

const processResult = (tesk: AsyncTask) => {
  switch (tesk.state) {
    case "LOADING": {
      console.log("로딩중...");
      break;
    }
    case "FAILED": {
      console.log(`에러발생 : ${tesk.error!.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${tesk.response!.data}`);
      break;
    }
  }
};

processResult(success);
