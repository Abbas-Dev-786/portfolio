// import StarsCanvas from "../components/common/StarBackground";
import ExperienceContainer from "../components/experience/ExperienceContainer";
import HeroSection from "../components/home/HeroSection";
import ProjectSection from "../components/home/ProjectSection";
import SkillSection from "../components/skills/SkillSection";

const Home = () => {
  return (
    <div className="w-100 h-100" data-scroll-section>
      <HeroSection />
      <ExperienceContainer />
      {/* <StarsCanvas /> */}
      <SkillSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
