import "./App.css";
import Header from "./components/header";
import Hero from "./sections/hero";

function App() {
  return (
    <div className="wrapper">
      <div className="divisionBox"></div>
      <div className="padding contentDisplay">
        <Header />
        <Hero />
        {/*<div className="contentFake"></div>*/}
      </div>
    </div>
  );
}

export default App;
