import { motion } from "framer-motion";
import SkillSection from "../components/skills/SkillSection";

const Skills = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      className="w-full min-h-[75vh] mt-20"
      data-scroll-section
    >
      <SkillSection />
    </motion.div>
  );
};

export default Skills;
