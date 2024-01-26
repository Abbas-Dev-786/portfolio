import { motion } from "framer-motion";
import ProjectContainer from "../components/projects/ProjectContainer";

const Projects = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
      className="w-full min-h-[75vh] mt-40"
      data-scroll-section
    >
      <ProjectContainer />
    </motion.div>
  );
};

export default Projects;
