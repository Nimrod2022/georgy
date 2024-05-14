import React from "react";

const ProjectsDiv = ({
  darkMode,
  title,
  description,
  image,
  technologies,
  siteurl,
  videourl,
  isNew,
  handleModal,
  handleVisitSite,
}) => {
  return (
    <div className="relative md:h-[297.33px] md:w-[354.67px] w-[336px] h-[294.33px] inter md:px-0 px-4 rounded-xl  md:my-5 hover:scale-105 transition-transform duration-300 ease-in-out">
      {isNew && (
        <div className="absolute top-4 left-6 md:top-3 text-md md:left-5 font-semibold bg-red-500 text-white px-2 py-2 md:px-3 md:py-2 rounded-lg ">
          New
        </div>
      )}
      <img
        src={image}
        alt={title}
        className=" md:w-[354.67px] md:h-[198.33px]"
      />
      <div className="dark:bg-[#1A1A1A] pt-3 md:pt-5 bg-[#E0E8F6] text-[#000000] dark:text-white md:w-[354.67px] md:h-[140px]">
        <h1 className=" text-xl">{title}</h1>
        <p className="text-md text-start pt-3 ">{description}</p>

        <div className="flex justify-between items-center">
          <div className="gap-5 pt-2 md:pt-3 flex ">
            {technologies.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Technology icon ${index}`}
                className="md:size-7 size-5"
              />
            ))}
          </div>
          <div>
            <button type="button" onClick={() => handleVisitSite(siteurl)}>
              <img src="/assets/send.svg" alt="open" />
            </button>
          </div>
        </div>
        {/* <div className="md:mt-8 mt-5 text-md">
          <button
            className={`${
              darkMode ? "live-demo-dark" : "live-demo-light"
            } text-md md:text-lg md:mr-10 mr-8 px-3 py-2 md:py-3 hover:bg-[#00142D] hover:text-white dark:hover:bg-[#00A359]`}
            type="button"
            onClick={handleModal}
          >
            Live Demo
          </button>
          <button
            className="visit-site border text-md md:text-lg px-3 md:px-6 py-2 md:py-3 text-white hover:border-none hover:bg-[#00142D] "
            type="button"
            onClick={() => handleVisitSite(siteurl)}
          >
            Visit Site
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsDiv;
