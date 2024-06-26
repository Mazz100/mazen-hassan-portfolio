import { useEffect, useRef, useState } from "react";
import NavbarHeader from "./Components/NavbarHeader";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  const [isScroll, setIsScroll] = useState(0);

  useEffect(() => {
    const checkScroll = () => setIsScroll(window.scrollY > 0);

    console.log(isScroll);

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg-color font-Inter-font-family text-text-color">
        <header className="z-10 w-full">
          <NavbarHeader />
        </header>

        <main className="flex max-w-[25rem] flex-col desktop:max-w-[80rem] tablet:max-w-[32rem]">
          <Home />
          <About />
          <Skills />
          <Projects />

          <a
            href="#top"
            className="fixed bottom-0 right-0 m-6 rounded-md bg-secondary-color p-4 transition-opacity"
            style={isScroll ? { opacity: "1.0" } : { opacity: "0" }}
          >
            <span>Back to Top</span>
          </a>
        </main>

        <footer className="w-full">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
