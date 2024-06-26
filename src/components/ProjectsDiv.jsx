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
    <div className="relative md:h-[340px] md:w-[354.67px] w-[336px] h-[294.33px] inter  rounded-xl md:overflow-hidden  md:my-5 hover:scale-105 transition-transform duration-300 ease-in-out">
      {isNew && (
        <div className="absolute top-4 left-6 md:top-3 text-md  md:left-2 font-semibold bg-[#4FC3F7] text-white px-2 py-2 md:px-3 md:py-2 rounded-lg ">
          New
        </div>
      )}
      <img
        src={image}
        alt={title}
        className=" md:w-[354.67px] md:h-[198.33px]"
      />
      <div className="bg-[#F4FCFF] dark:bg-[#484E53] px-5 md:px-5 pt-3 md:pt-5 text-[#000000] dark:text-white md:w-[354.67px] md:h-[140px] ">
        <h1 className=" text-xl">{title}</h1>
        <p className="text-md text-start pt-3  ">{description}</p>

        <div className="flex justify-between  pb-3 md:pb-5 items-center">
          <div className="gap-5  flex ">
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
              <img src="/assets/send.svg" alt="open" className="size-7 md:size-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDiv;
