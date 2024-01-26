import ProjectCard from "./ProjectCard";

const data = [
  {
    id: 1,
    name: "Scrape Zone",
    title: "E-Commerce Product Price Tracker",
    description:
      "Worked on some important features like referral reward system for students, dark mode, state management etc.Used nodemailer to send emails as a product price fluctuation notification, these emails are triggered on the basis of cron jobs.",
    siteLink: "https://scrape-zon.vercel.app/",
    repoLink: "https://github.com/rahulmore01/scrapeZon",
  },
  {
    id: 4,
    name: "Scrape Zone",
    title: "E-Commerce Product Price Tracker",
    description:
      "Worked on some important features like referral reward system for students, dark mode, state management etc.Used nodemailer to send emails as a product price fluctuation notification, these emails are triggered on the basis of cron jobs.",
    siteLink: "https://scrape-zon.vercel.app/",
    repoLink: "https://github.com/rahulmore01/scrapeZon",
  },
  {
    id: 2,
    name: "Scrape Zone",
    title: "E-Commerce Product Price Tracker",
    description:
      "Worked on some important features like referral reward system for students, dark mode, state management etc.Used nodemailer to send emails as a product price fluctuation notification, these emails are triggered on the basis of cron jobs.",
    siteLink: "https://scrape-zon.vercel.app/",
    repoLink: "https://github.com/rahulmore01/scrapeZon",
  },
  {
    id: 3,
    name: "Scrape Zone",
    title: "E-Commerce Product Price Tracker",
    description:
      "Worked on some important features like referral reward system for students, dark mode, state management etc.Used nodemailer to send emails as a product price fluctuation notification, these emails are triggered on the basis of cron jobs.",
    siteLink: "https://scrape-zon.vercel.app/",
    repoLink: "https://github.com/rahulmore01/scrapeZon",
  },
];

const ProjectContainer = () => {
  return (
    <div className=" h-full w-screen flex flex-col justify-center items-center my-20 ">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
        My Projects
      </h1>
      <div className="flex justify-center flex-wrap h-full gap-8 px-5 md:px-0">
        {data?.map((el) => (
          <ProjectCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
