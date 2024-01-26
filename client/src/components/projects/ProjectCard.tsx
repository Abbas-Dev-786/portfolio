interface CardProps {
  name: string;
  title: string;
  description: string;
  siteLink: string;
  repoLink: string;
}

const ProjectCard = (props: CardProps) => {
  const { name, title, description, siteLink, repoLink } = props;

  return (
    <div className="vvs:!min-h-[340px] flex flex-col gap-10 bg-[#232323] p-10  rounded-[20px] md:rounded-[16px] w-auto  lg:w-[400px] md:w-[300px]  md:p-5 border md:h-[200px] md:pb-10 lg:h-[300px] lg:pb-10">
      <div>
        <h1 className="text-[24px] md:text-[20px]  font_tomato_grotesk text-white font-bold">
          {name}
        </h1>
        <h3 className="text-[18px] md:text-[16px] mt-3 mb-2 font_tomato_grotesk text-neutral-200">
          {title}
        </h3>
        {description.split(".").map((sentence: string, i: number) => (
          <p
            className="flex text-[16px] md:text-[14px] mb-[10px]  space_grotesk text-neutral-400"
            key={i}
          >
            {sentence}
          </p>
        ))}
        <div className="flex gap-6 justify-start mt-2">
          <a
            href={siteLink}
            target="_blank"
            className="cursor-pointer text-gray-200 rounded-xl border px-8 py-[10px] mt-4 bg-[#414141] font_tomato_grotesk hover:bg-white hover:text-[#414141] z-[2]"
          >
            Live
          </a>
          <a href={repoLink} target="_blank" className="z-[2]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="w-11 h-11 text-[#414141] rounded-full border mt-4 bg-white  hover:bg-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
