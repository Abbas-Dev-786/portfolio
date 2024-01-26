import GetInTouch from "../components/common/GetInTouch";
import ExperienceContainer from "../components/experience/ExperienceContainer";
import HeroSection from "../components/home/HeroSection";
import ProjectContainer from "../components/projects/ProjectContainer";
import SkillSection from "../components/skills/SkillSection";

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
