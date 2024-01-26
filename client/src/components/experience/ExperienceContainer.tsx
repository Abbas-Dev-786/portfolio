import ExperienceCard from "./ExperienceCard";

const data = [
  {
    id: 1,
    company: "Breadzam Ventures",
    jobTitle: "Software Engineer Intern",
    logo: "breadzam-logo.png",
    dates: "Dec 2023 - Mar 2024",
    text: [
      "Working on Frontend side using React.js, Redux.js, Socket.io and many more.",
      "Collaborate with the cross-functional teams to define, design and ship new features of company products.",
      "30% Increase in the website performance.",
    ],
  },
  {
    id: 2,
    company: "Xtreme Infosys",
    jobTitle: "Fullstack Developer",
    logo: "extreme.png",
    dates: "Dec 2022 - Dec 2023",
    text: [
      "Contributed to the development and success of Xtreme Infosys as a Junior Full Stack Developer.",
      "Created 5 impactful web applications using MERN stack.",
      "Key achievements include the creation of more than 5 impactful web applications, showcasing proficiency in full-stack development from conception to deployment.",
    ],
  },
];

const ExperienceContainer = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mb-40 md:mx-20"
      id="experience"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Experience
      </h1>

      <div className="w-full flex gap-7 flex-col items-center justify-center px-5 md:px-0">
        {data?.map((item) => (
          <ExperienceCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContainer;
