import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import TTUMascotBackground from "./components/TTUMascotBackground";
import TortillaBackground from "./components/TortillaBackground";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <TTUMascotBackground />
      <TortillaBackground />
      <div className="relative z-10">
        {/* Sections */}
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
