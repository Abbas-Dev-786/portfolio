import ParallaxText from "../common/ParallaxText";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <div
      className="relative flex flex-col h-full w-full md:mb-40"
      id="about-me"
    >
      <div
        className="rotate-180 absolute opacity-90 h-full w-full hidden xl:block"
        style={{ top: "-40%" }}
      >
        <video autoPlay muted loop className="object-cover">
          <source src="./images/blackhole.webm" type="video/webm" />
        </video>
      </div>

      <HeroContent />

      <section>
        <ParallaxText
          baseVelocity={-5}
          text={[
            "Full stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "Web Apps",
            "Progessive Web Apps",
            "Animated Websites",
          ]}
        />
        <ParallaxText
          baseVelocity={5}
          text={[
            "Chrome Extensions Development",
            "React Native App",
            "Server side web apps",
            "Dashboards",
            "Progessive Web Apps",
            "Animated Websites",
          ]}
        />
      </section>
    </div>
  );
};

export default HeroSection;
