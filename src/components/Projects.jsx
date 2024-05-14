// Projects.jsx

import React, { useState } from "react";
import data from "./data.json";
import ProjectsDiv from "./ProjectsDiv";

const Projects = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProjects(data);
    } else {
      const filtered = data.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  const handleModal = (videourl) => {
    setSelectedVideoUrl(videourl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleVisitSite = (siteurl) => {
    window.open(siteurl, "_blank");
  };

  return (
    <section className={darkMode ? "dark" : ""}>
      <div className=" dark:bg-[#1A1A1A] bg-[#E0E8F6] md:pt-32 pt-20 px-5 md:px-36">
        <h1
          id="/projects"
          className="text-center text-[#151C25] dark:text-white text-4xl"
        >
          Projects
        </h1>
        <h3 className="dark:about-text-dark about-text-light font-bold text-md text-center">
          Some of my work
        </h3>
        <div className="flex md:text-md gap-x-5 md:justify-center mt-10 ">
          {/* Filter buttons */}
          {/* Filter buttons */}
          <button
            className={`mr-4 project-border border hidden md:block rounded-2xl  px-6 py-2 border-[#484E53] dark:border-[#4FC3F7]   ${
              activeCategory === "all"
                ? "active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("all")}
          >
            All Projects
          </button>
          <button
            className={`md:mr-4 project-border px-5 border rounded-2xl   md:px-6 py-2 border-[#484E53] dark:border-[#4FC3F7]  ${
              activeCategory === "ML"
                ? "active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("ML")}
          >
            Machine learning
          </button>
          <button
            className={`project-border  border rounded-2xl   px-6 py-2 border-[#484E53] dark:border-[#4FC3F7]  ${
              activeCategory === "powerBI"
                ? " active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("powerBI")}
          >
            Power BI
          </button>

          <button
            className={`project-border  border rounded-2xl   px-6 py-2 border-[#484E53] dark:border-[#4FC3F7]  ${
              activeCategory === "sql"
                ? " active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("sql")}
          >
            SQL
          </button>

          <button
            className={`project-border  border rounded-2xl   px-6 py-2 border-[#484E53] dark:border-[#4FC3F7]  ${
              activeCategory === "AI/LLMS"
                ? " active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("AI/LLMS")}
          >
            AI/LLMS
          </button>

          <button
            className={`project-border  border rounded-2xl   px-6 py-2 border-[#484E53] dark:border-[#4FC3F7]  ${
              activeCategory === "spatial"
                ? " active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("spatial")}
          >
            Spatial data science
          </button>
        </div>
        <div className="satoshi flex gap-10 flex-wrap md:py-20 justify-center dark:bg-[#1A1A1A] bg-[#E0E8F6] pt-20">
          {/* Render filtered projects */}
          {filteredProjects.map((project, index) => (
            <ProjectsDiv
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              siteurl={project.siteurl}
              videourl={project.videourl}
              darkMode={darkMode}
              handleModal={() => handleModal(project.videourl)}
              handleVisitSite={handleVisitSite}
              isNew={index < 2 && project.isNew}
            />
          ))}
        </div>

        {/* <div className=" justify-center md:pt-0 pt-8 pb-3 md:pb-0 items-center flex flex-col">
          <button className="mr-4 project-border  md:text-xl px-3 md:px-6 py-2 dark:border-[#55e5a4] border-[#26313F]  hover:border-none hover:bg-[#00142D] dark:hover:bg-[#00A359]  dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]">
            View all Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
