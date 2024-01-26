import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  MAIN_SKILL,
  MORE_SKILLS,
  Other_skill,
  TOOLS,
} from "../../constants";
import SkillBadge from "./SkillBadge";
import SkillText from "./SkillText";

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="pattern py-5 flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mb-35"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {FRONTEND_SKILL.map((image, index) => (
          <SkillBadge
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {BACKEND_SKILL.map((image, index) => (
          <SkillBadge
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {MORE_SKILLS.map((image, index) => (
          <SkillBadge
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {TOOLS.map((image, index) => (
          <SkillBadge
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillBadge
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {MAIN_SKILL.map((image, index) => (
          <SkillBadge
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="./images/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
