import "./App.css";
import Header from "./components/header";
import About from "./sections/about";
import Hero from "./sections/hero";
import { Knowledge } from "./sections/knowledge";
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
        <Knowledge />
        {/*<div className="contentFake"></div>*/}
      </div>
    </div>
  );
}

export default App;
