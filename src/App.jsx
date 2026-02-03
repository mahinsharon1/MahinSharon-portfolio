import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/sections/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Resume } from "./components/sections/Resume";
import { Footer } from "./components/sections/Footer";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />

        {/* Combined Section: Resume (Left) and Contact (Right) */}
        {/* pt-10 moves the section up, gap-8 controls spacing between boxes */}
        <section id="resume-contact" className="max-w-6xl mx-auto px-4 pt-10 pb-20">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
            
           <section className="min-h-screen flex items-start justify-center px-6 py-20">
  <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    <Resume />
    <Contact />
  </div>
</section>

            
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
