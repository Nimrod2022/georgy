const darkModeProfileAbout = "/assets/about-profile-dark.svg";
const lightModeProfileAbout = "/assets/about-profile-light.svg";

const About = ({ darkMode }) => {
  return (
    <>
      <div id="/about" className={darkMode ? "dark" : ""}>
        <div className=" dark:bg-[#1A1A1A] bg-[#E0E8F6] md:gap-16 px-5 md:px-80 inter md:flex md:pt-40 pt-10  justify-center ">
          {/* Image */}

          {/* Text */}
          <div >
            <h1 className="text-3xl pt-10 md:pt-0 text-center md:text-center font-extrabold text-[#000000] dark:text-white">
              About Me
            </h1>
            <h3 className="dark:about-text-dark about-text-light font-bold text-sm text-center">
              Get to know me
            </h3>
            <div className=" text-lg pt-5 text-[#1C1E53] dark:text-[#E1E1E1] flex flex-col gap-3  text-center">
              <p>
                Hi there! I'm George Mururi, a data scientist specializing in
                data analytics, predictive modeling, natural language
                processing, machine learning, and AI chatbots. With a passion
                for unraveling insights from complex datasets, I'm dedicated to
                helping businesses make informed decisions and stay ahead in
                today's data-driven world.{" "}
              </p>
              <p>
                I bring a blend of technical expertise, hands-on experience, and
                a commitment to clear communication to every project. Whether
                it's uncovering hidden patterns, predicting future trends, or
                automating processes with AI, I'm here to help you harness the
                full potential of your data.
              </p>{" "}
              <p>
                Let's work together to transform your data into actionable
                insights that drive real results. Get in touch, and let's start
                unlocking the power of your data today!
              </p>
            </div>

            <div className="pt-8 pb-20 flex justify-center ">
              <button
                type="button"
                className="text-[#484E53] dark:text-white border-[#484E53] dark:border-[#4FC3F7] border montserrat font-semibold text-md rounded-3xl px-10 py-3"
              >
                <a href="/assets/resume.pdf" download="Nimrod Kibet CV">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
