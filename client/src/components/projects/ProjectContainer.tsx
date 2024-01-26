import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const data = [
  {
    id: 1,
    name: "Homyz",
    title: "Property Management System",
    description:
      "A full-stack real estate website that combines a React front-end, Nodejs back-end, MongoDB database, and user authentication via Google OAuth. This webapp helps realtors list and manage properties and a seamless user experience for potential buyers.",
    siteLink: "https://homyz-amb.netlify.app/",
    repoLink: "https://github.com/Abbas-Dev-786/homyz",
  },
  {
    id: 2,
    name: "Hatimi Retreats",
    title: "Sports Court Booking Platform",
    description:
      "It  aims to revolutionize the way sports enthusiasts book and enjoy their favorite activities, providing a centralized and efficient platform for sports court reservations.This platform offers a interface for users to  book, and manage reservations for various sports courts.",
    siteLink: "https://sports.hatimiproperties.com/",
    repoLink: "https://github.com/Abbas-Dev-786/Hatimi_retreats",
  },
  {
    id: 3,
    name: "Finanseer",
    title: "Machine Learning Dashboard",
    description:
      "A dashboard tailored for predicting prices using linear regression models. It is an ideal tool for users seeking straightforward price predictions using Scatter plots, trend lines, and histograms by linear regression techniques.",
    siteLink: "https://finanseer-ruby.vercel.app/",
    repoLink: "https://github.com/Abbas-Dev-786/finanseer",
  },
  {
    id: 4,
    name: "Realtime Multiplayer Game",
    title: "Rock Paper Scissor Game",
    description:
      "This is a simple yet exciting realtime multiplayer Rock Paper Scissors game built using React, SocketIO, Nodejs, and Express. Players can engage in thrilling battles with their friends or other online opponents or also they can play with bot.",
    siteLink: "https://rrp-amb.netlify.app/",
    repoLink: "https://github.com/Abbas-Dev-786/rrp",
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

      <Link
        to="/projects"
        className="px-6 py-3 text-l font-semibold button-primary hover:bg-purple-700 text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-10"
      >
        View More Projects!
      </Link>
    </div>
  );
};

export default ProjectContainer;
