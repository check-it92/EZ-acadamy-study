import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const name = "David";

  return (
    <div className="App">
      <Header />
      <Body name={name} />
      <Footer />
    </div>
  );
}

export default App;
