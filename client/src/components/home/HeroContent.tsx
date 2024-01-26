import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../utils";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-7 md:px-20 mt-40 w-full z-[20] mb-10"
    >
      <div className="flex grow flex-col gap-5 items-center md:items-start justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box animate-bounce py-[8px] px-[7px] border border-[#7042f8fd]"
        >
          <SparklesIcon className="text-[#7348f7] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Available For Oppotunities
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-3 text-5xl md:text-6xl font-bold text-white max-w-[1000px] w-auto h-auto text-center md:text-left"
        >
          <span>
            Crafting
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" Powerful Web Experiences "}
            </span>
            from Concept to Deployment
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 max-w-[900px] text-center md:text-left"
        >
          I&apos;m a Experienced Full Stack Developer dedicated to building
          high-performing web applications with a focus on scalability. Proven
          track record in translating concepts into robust solutions that
          deliver optimal performance. Optimizing web applications for
          efficiency and scalability.
        </motion.p>
        <Link to="/projects">
          <motion.button
            variants={slideInFromLeft(1)}
            className="px-6 py-3 text-l font-semibold button-primary hover:bg-purple-700 text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-3"
          >
            View Projects!
          </motion.button>
        </Link>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="hero-img">
        <img
          src="./images/mainIconsdark.svg"
          alt="work icons"
          className="w-full h-full hidden md:block"
          // height={650}
          // width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
