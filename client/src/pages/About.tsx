import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      className="w-full min-h-[75vh] mt-20"
      data-scroll-section
    >
      <div className="min-h-[75vh] w-100 flex flex-col gap-5 items-center justify-center text-white">
        <h1 className="text-[50px]">Working on this page ⚒</h1>
        <Link
          to="/"
          className="bg-purple-700 px-10 py-3 text-lg font-semibold rounded-full hover:bg-purple-600"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default About;
