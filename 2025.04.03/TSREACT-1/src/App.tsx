import { useState, useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import Button from "./components/Button";
import Form from "./components/Form";
// import mockPosts from "./mock/posts.json";

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-color);
  overflow: scroll;
  /* position: fixed; */
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

interface Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [showForm, setShowForm] = useState(false); // 초기값 : 평상시에 나오지 않게

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    // setTimeout(() => {
    //   setPosts(mockPosts);
    // }, 1000);
    fetch(url)
      .then((response) => response.json()) // 찾아와라 json을
      .then((json) => setPosts(json)) // 찾아온다면 json의 값들을 대입
      .catch((err) => console.error(err)); // 찾아오지 못한다면
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        {posts.map((post) => (
          <BlogPost key={post.id} title={post.title} body={post.body} />
        ))}
        <ButtonContainer>
          <Button label="등록" onClick={() => setShowForm(true)} />
            {/* 초기에 보이지 않게 하는 요소 */}
        </ButtonContainer>
        {showForm && <Form onClose={() => setShowForm(false)} />}
      </Container>
    </>
  );
}

export default App;
