import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";

import "locomotive-scroll/src/locomotive-scroll.scss";

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
        <Home />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
};

export default App;
