import HeroSection from "../components/home/HeroSection";
import ProjectContainer from "../components/projects/ProjectContainer";
import SkillSection from "../components/skills/SkillSection";
import ExperienceContainer from "../components/experience/ExperienceContainer";
import GetInTouch from "../components/common/GetInTouch";

const Home = () => {
  return (
    <div className="w-100 h-100" data-scroll-section>
      <HeroSection />
      <ProjectContainer />
      <SkillSection />
      <ExperienceContainer />
      <GetInTouch />
    </div>
  );
};

export default Home;
