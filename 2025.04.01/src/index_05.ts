// fetch 함수

interface Post {
  id: number;
  title: string;
  content: string;
}

const fetchPost = (): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        // 객체 형태
        id: 1,
        title: "게시글 제목",
        content: "게시글 본문",
      });
    }, 3000);
  });
};
