const servicesDark = "/assets/bulb-services-dark.svg";
const servicesLight = "/assets/bulb-services-light.svg";
const chatbotDark = "/assets/chatbot-dark.svg";
const chatbotLight = "/assets/chatbot-light.svg";
const mlDark = "/assets/ml-dark.svg";
const mlLight = "/assets/ml-light.svg";

const Services = ({ darkMode }) => {
  return (
    <>
      <div id="/services" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#1A1A1A] bg-[#E0E8F6]">
          <h1 className="text-3xl pt-10 md:pt-0 text-center md:text-center font-extrabold text-[#000000] dark:text-white">
            What I do
          </h1>
          <h3 className="dark:about-text-dark about-text-light font-bold text-md text-center">
            My services
          </h3>

          <div className="flex flex-col md:pt-20 pt-5 md:gap-16 gap-10 justify-center">
            {/* Upper container */}
            <div className="flex flex-col md:flex-row gap-10 justify-center md:px-0 px-5 ">
              <div className="inter service-box rounded-xl border-[#2B2B2B] dark:bg-[#1C1C1C] bg-[#edf5ff] px-5">
                <img
                  src={darkMode ? servicesDark : servicesLight}
                  alt="service"
                  className="pt-10 pb-5"
                />

                <h3 className="dark:text-white font-semibold text-[#484E53] py-3">
                  {" "}
                  Data Analytics & Visualization
                </h3>
                <p className="dark:text-[#E1E1E1] text-[#1C1E53] text-md ">
                  From data inception to actionable insights, I design
                  compelling analytics and visualization solutions that
                  illuminate trends, empower decision-making, and drive your
                  business forward.
                </p>
              </div>

              <div className="inter service-box rounded-xl border-[#2B2B2B] dark:bg-[#1C1C1C] bg-[#edf5ff] px-5">
                <img
                  src={darkMode ? servicesDark : servicesLight}
                  alt="service"
                  className="pt-10 pb-5"
                />

                <h3 className="dark:text-white font-semibold text-[#484E53] py-3">
                  {" "}
                  Predictive Analytics and Forecasting
                </h3>
                <p className="dark:text-[#E1E1E1] text-[#1C1E53] text-md ">
                  From data to foresight, I craft predictive analytics and
                  forecasting solutions that steer your business with precision,
                  empowering strategic decisions and ensuring future success
                </p>
              </div>

              <div className="inter service-box rounded-xl border-[#2B2B2B] dark:bg-[#1C1C1C] bg-[#edf5ff] px-5">
                <img
                  src={darkMode ? servicesDark : servicesLight}
                  alt="service"
                  className="pt-10 pb-5"
                />

                <h3 className="dark:text-white font-semibold text-[#484E53] py-3">
                  {" "}
                  Natural Language Processing
                </h3>
                <p className="dark:text-[#E1E1E1] text-[#1C1E53] text-md ">
                  From text to insight, I craft Natural Language Processing
                  solutions that decode language intricacies, revolutionizing
                  data comprehension and empowering your business for success in
                  the digital age
                </p>
              </div>
            </div>

            {/* Lower container */}

            <div className="md:flex gap-10 justify-center px-5">
              <div className="inter md:hidden block pb-10 chatbotboxmobile rounded-xl border-[#2B2B2B] dark:bg-[#1C1C1C] bg-[#edf5ff] px-5">
                {/* Mobile chatbot start*/}
                <div>
                  <img
                    src={darkMode ? chatbotDark : chatbotLight}
                    alt="service"
                    className="pt-10 pb-5"
                  />

                  <h3 className="dark:text-white font-semibold text-[#484E53] py-3">
                    {" "}
                    AI Chatbots
                  </h3>
                  <p className="dark:text-[#E1E1E1] md:w-[90%] text-[#1C1E53] text-md ">
                    From design to deployment, I build AI Chatbots that enhance
                    customer interactions, streamline processes, and elevate
                    your brand's engagement, bringing innovative solutions to
                    your audience's fingertips
                  </p>
                </div>
                <img
                  src="/assets/ai-chatbot.png"
                  alt="chatbox"
                  className="size-60 rounded-xl mt-10"
                />
              </div>

              {/* Mobile chatbot end*/}

              <div className="inter hidden md:flex gap-5 chatbotbox rounded-xl border-[#2B2B2B] dark:bg-[#1C1C1C] bg-[#edf5ff] px-5">
                <div>
                  <img
                    src={darkMode ? chatbotDark : chatbotLight}
                    alt="service"
                    className="pt-10 pb-5"
                  />

                  <h3 className="dark:text-white font-semibold text-[#484E53] py-3">
                    {" "}
                    AI Chatbots
                  </h3>
                  <p className="dark:text-[#E1E1E1] md:w-[90%] text-[#1C1E53] text-md ">
                    From design to deployment, I build AI Chatbots that enhance
                    customer interactions, streamline processes, and elevate
                    your brand's engagement, bringing innovative solutions to
                    your audience's fingertips
                  </p>
                </div>
                <img
                  src="/assets/ai-chatbot.png"
                  alt="chatbox"
                  className="size-60 rounded-xl mt-10"
                />
              </div>
              <div className="inter mt-10 md:mt-0 service-box rounded-xl border-[#2B2B2B] dark:bg-[#1C1C1C] bg-[#edf5ff] px-5">
                <img
                  src={darkMode ? mlDark : mlLight}
                  alt="service"
                  className="pt-10 pb-5"
                />

                <h3 className="dark:text-white font-semibold text-[#484E53] py-3">
                  {" "}
                  Machine Learning
                </h3>
                <p className="dark:text-[#E1E1E1] text-[#1C1E53] text-md ">
                  From concept to automation, I craft Machine Learning solutions
                  that decode patterns and optimize performance, driving your
                  business into the era of intelligent automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
