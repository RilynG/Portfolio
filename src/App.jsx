import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import TTUMascotBackground from "./components/TTUMascotBackground";
import TortillaBackground from "./components/TortillaBackground";


function App() {
  return (
    <div className="relative min-h-screen">
      <TTUMascotBackground />
      <TortillaBackground />
      <div className="relative z-10">
        <Header />
        {/* Sections */}
        <section className="bg-black/30">
          <About />
        </section>

        <section className="bg-black/20">
          <Projects />
        </section>

        <section className="bg-black/20">
          <Resume />

        </section>
      </div>
    </div>
  );
}

export default App;
