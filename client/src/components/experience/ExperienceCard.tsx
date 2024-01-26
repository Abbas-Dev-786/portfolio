interface CardProps {
  company: string;
  jobTitle: string;
  logo: string;
  dates: string;
  text: string[];
}

const ExperienceCard = (props: CardProps) => {
  const { company, jobTitle, logo, dates, text } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 bg-[#23232386] py-6 px-4 md:py-10 rounded-3xl lg:flex-row lg:gap-4 lg:px-10 lg:py-14 border">
      <div className="h-[200px] w-[200px] flex items-center justify-center border border-slate-500 rounded-full">
        <img
          alt="company-logo"
          width="250"
          height="250"
          src={`./images/${logo}`}
        />
      </div>
      <div className="flex-grow">
        <div className="md:mx-8">
          <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font_tomato_grotesk text-white font-bold">
            {jobTitle}
          </h1>
          <h3 className="text-[16px] md:text-[20px] mb-2 font_tomato_grotesk text-neutral-200 lg:text-[20px]">
            {company}{" "}
            <span className="italic text-[13px] md:text-[16px]">({dates})</span>
          </h3>
          {text?.map((t: string, i: number) => (
            <p
              className="flex text-[16px] md:text-[18px] mb-[10px]  space_grotesk text-neutral-300 "
              key={i}
            >
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 15 15"
                  className="text-4xl text-purple-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 7.5C5 7.22386 5.22386 7 5.5 7H9.5C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
