const darkHomeProfile = "/assets/home-profile-dark.png";

const lightHomeProfile = "/assets/home-profile-light.png";

const landingDark = "/assets/landing-bg-dark.svg";
const profile = "/assets/profile.png";

const Home = ({ darkMode, scrollToContact }) => {
  return (
    <>
      <div id="/#" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#1A1A1A] bg-[#E0E8F6] md:pt-0 pt-20 md:h-screen poppins flex flex-col justify-center bg-no-repeat  bg-center bg-[url('/assets/landing-bg-light.svg')] dark:bg-[url('/assets/landing-bg-dark.svg')]">
          <div className="px-5   text-white md:flex md:gap-5 md:justify-center  ">
            <div className="items-center flex flex-col   md:w-[50%] ">
              <img className="rounded-full h-56" src={profile} alt="profile " />
              <p className="text-3xl md:text-5xl font-bold md:py-2 md:pt-5 pt-3 text-[#484E53] name dark:text-white md:text-start text-center ">
                George Mururi
              </p>
              <h1 className="md:py-3 py-3 font-extrabold text-2xl md:text-2xl md:text-start text-center">
                <span className="dark:titleDark title">Data Sorcerer</span> 🧙🏽
              </h1>
              <p className="w-full text-xs text-[#484E53] intro dark:text-[#E1E1E1]  text-center ">
                As a passionate data scientist, with expertise in machine
                learning, AI, and data analytics, I thrive on the challenges of
                exploring complex data landscapes and uncovering meaningful
                patterns that drive innovation.
              </p>
              <div className="justify-center  pt-8 md:pt-20 ">
                <button
                  onClick={scrollToContact}
                  type="button"
                  className=" text-[#484E53] dark:text-white border-[#484E53] dark:border-[#4FC3F7] border montserrat font-semibold text-md rounded-3xl px-10 py-3 mr-8"
                >
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
