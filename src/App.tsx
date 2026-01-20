import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="wrapper">
      <div className="divisionBox"></div>
      <div className="padding">
        <Header />
        <div className="contentFake"></div>
      </div>
    </div>
  );
}

export default App;
