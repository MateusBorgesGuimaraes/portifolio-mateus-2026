import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./sections/about";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import { Skills } from "./sections/skills";
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

        <Skills />

        <Contact />
      </div>
      <div className="divisionBoxReverse">
        <Footer />
      </div>
    </div>
  );
}

export default App;
