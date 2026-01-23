import "./App.css";
import Header from "./components/header";
import About from "./sections/about";
import Hero from "./sections/hero";
import { Projects } from "./sections/projects";

function App() {
  return (
    <div className="wrapper">
      <div className="divisionBox"></div>
      <div className="padding contentDisplay">
        <Header />
        <Hero />
        <About />
        <Projects />
        {/*<div className="contentFake"></div>*/}
      </div>
    </div>
  );
}

export default App;
