import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";

import "locomotive-scroll/src/locomotive-scroll.scss";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={
        {
          // smooth: true,
          // scrollbars: true,
        }
      }
      watch={[]}
      containerRef={containerRef}
    >
      <div
        data-scroll-container
        className="bg-[#030014] overflow-x-hidden"
        ref={containerRef}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;
