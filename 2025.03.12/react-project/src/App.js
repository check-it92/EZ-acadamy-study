import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body01 from "./components/Body01";

function App() {
  return (
    <div className="App">
      <Header />
      <Body01 />
      {/* <Body {...BodyProps}/> 이렇게 전개 연산자로 가능능*/}
      <Footer />
    </div>
  );
}
export default App;
