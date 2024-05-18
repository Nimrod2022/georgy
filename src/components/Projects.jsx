import React, { useState, useEffect } from "react";
import data from "./data.json";
import ProjectsDiv from "./ProjectsDiv";

const Projects = ({ darkMode }) => {
  const allCategories = [
    "All Projects",
    "Machine Learning",
    "Power BI",
    "SQL",
    "AI/LLMS",
    "Spatial Data Science",
  ];
  const [activeCategories, setActiveCategories] = useState(["All Projects"]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (activeCategories.length === 0) {
      setActiveCategories(["All Projects"]);
    }
  }, [activeCategories]);

  const toggleCategory = (category) => {
    if (category === "All Projects") {
      setActiveCategories(["All Projects"]);
    } else {
      if (activeCategories.includes("All Projects")) {
        setActiveCategories([category]);
      } else {
        const index = activeCategories.indexOf(category);
        if (index === -1) {
          setActiveCategories([...activeCategories, category]);
        } else {
          setActiveCategories(
            activeCategories.filter((cat) => cat !== category)
          );
        }
      }
    }
  };

  const handleVisitSite = (siteurl) => {
    window.open(siteurl, "_blank");
  };

  const filterProjectByCategories = (project) => {
    if (activeCategories.includes("All Projects")) return true;
    return activeCategories.includes(project.category);
  };

  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="dark:bg-[#1A1A1A] bg-[#E0E8F6] md:pt-32 pt-20 px-5 md:px-36">
        <h1
          id="/projects"
          className="text-center text-[#151C25] dark:text-white text-4xl"
        >
          Projects
        </h1>
        <h3 className="dark:about-text-dark about-text-light font-bold text-md text-center">
          Some of my work
        </h3>

        <div className="flex md:text-md gap-x-5 md:justify-center mt-10">
          {/* Filter buttons for larger screens */}
          <div className="hidden md:flex gap-x-5">
            {allCategories.map((category) => (
              <button
                key={category}
                className={`mr-4 project-border border rounded-2xl px-6 py-2 border-[#484E53] dark:border-[#4FC3F7] ${
                  activeCategories.includes(category)
                    ? "active dark:bg-[#4FC3F7] bg-[#151C25]  text-[#FFFFFF]"
                    : "dark:text-white"
                }`}
                onClick={() => toggleCategory(category)}
              >
                {category === "AI/LLMS" ? "AI/LLMS" : category}
              </button>
            ))}
          </div>

          {/* Dropdown for smaller screens */}
          <div className="md:hidden w-full flex flex-col items-center">
            <button
              className="border rounded-2xl w-2/3 md:w-full px-6 py-2 border-[#484E53] dark:border-[#4FC3F7]   dark:text-white"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {dropdownOpen ? "Close Menu " : "Filter Projects"}
            </button>
            {dropdownOpen && (
              <div className="mt-2 flex flex-col gap-y-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    className={`project-border border rounded-2xl w-full px-6 py-2 border-[#484E53] dark:border-[#4FC3F7] ${
                      activeCategories.includes(category)
                        ? "active dark:bg-[#4FC3F7] bg-[#151C25] text-[#FFFFFF]"
                        : "dark:text-white"
                    }`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category === "AI/LLMS" ? "AI/LLMS" : category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="satoshi flex gap-10 flex-wrap md:py-20 justify-center dark:bg-[#1A1A1A] bg-[#E0E8F6] pt-20">
          {/* Render filtered projects */}
          {data.filter(filterProjectByCategories).map((project, index) => (
            <ProjectsDiv
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              siteurl={project.siteurl}
              darkMode={darkMode}
              handleModal={() => handleModal(project.videourl)}
              handleVisitSite={handleVisitSite}
              isNew={index < 2 && project.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
