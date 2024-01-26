import { motion } from "framer-motion";
import ExperienceContainer from "../components/experience/ExperienceContainer";

const Experience = () => {
  return (
    <motion.div
      className="w-100 min-h-[75vh] mt-20"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      data-scroll-section
    >
      <ExperienceContainer />
    </motion.div>
  );
};

export default Experience;
