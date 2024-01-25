const ExperienceCard = ({ company, jobTitle, logo, dates, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-[#232323] py-6 px-4 md:py-10 mb-10 rounded-[28px] mx-4 md:mx-14  lg:flex-row lg:gap-4 lg:mx-20 lg:px-10 lg:py-14 border border-card_border ">
      <div className="h-[200px] w-[200px] flex items-center justify-center border border-slate-500 rounded-full">
        <img
          alt="company-logo"
          width="250"
          height="250"
          src={`./../../../public/images/${logo}`}
        />
      </div>
      <div>
        <div className=" md:mx-8">
          <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font_tomato_grotesk text-white font-bold">
            {jobTitle}
          </h1>
          <h3 className="text-[16px] md:text-[20px] mb-2 font_tomato_grotesk text-neutral-200 lg:text-[20px]">
            {company}{" "}
            <span className="italic text-[13px] md:text-[16px]">({dates})</span>
          </h3>
          {text?.map((t) => (
            <p className="flex text-[16px] md:text-[18px] mb-[10px]  space_grotesk text-neutral-300 ">
              <span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  className="text-4xl text-purple-400"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
