import React from "react";

const facebookDark = "/assets/facebook-dark.svg";
const facebook = "/assets/facebook-light.svg";

const instagramDark = "/assets/instagram-dark.svg";
const instagram = "/assets/instagram-light.svg";

const linkedinDark = "/assets/linkedin-dark-g.svg";
const linkedin = "/assets/linkedin-light-g.svg";

const twitterDark = "/assets/twitter-dark-g.svg";
const twitter = "/assets/twitter-light-g.svg";
const gmail = "/assets/gmail.svg";

const Footer = ({ darkMode }) => {
  return (
    <>
      <section className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#1A1A1A] bg-[#E0E8F6] md:pt-0 pt-20 ">
          <div className="flex justify-between items-center md:py-16 px-5 md:px-36 ">
            <div className="items-center ">
              <h1 className="md:text-5xl text-md dark:text-[#DEDEDE] text-[#282938]">
                Let’s{" "}
              </h1>
              <p className="md:text-5xl text-md dark:text-[#DEDEDE] pt-3 text-[#282938]">
                Work Together -
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "mailto:mururig@gmail.com";
                }}
                className="border border-[#484E53] md:px-8 rounded-lg p-2 md:p-5"
              >
                <span className="flex items-center gap-2">
                  <img
                    src={gmail}
                    alt="message-icon"
                    className="size-5 md:size-8"
                  />
                  <p className="text-[#484E53] text-xs md:text-lg">
                    mururig@gmail.com
                  </p>
                </span>
              </button>
            </div>
          </div>
          <hr className="border border-[#A9A9A9] dark:border-[#484E53] md:mt-0 mt-3 w-full" />
          <div className="flex flex-col items-center pt-5 md:flex-row md:justify-between md:py-5 md:items-center md:px-36">
            <p className="text-[#282938] dark:text-[#A9A9A9] text-xs md:text-sm">
              © 2024 George Mururi. All Rights Reserved
            </p>

            <div className="flex gap-3 px-2 pt-3 pb-3 md:pt-0">
              <a
                href="www.linkedin.com/in/george-mururi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? linkedinDark : linkedin}
                  alt="linkedin"
                  className="size-8"
                />
              </a>

            
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? facebookDark : facebook}
                  alt="facebook"
                  className="size-8"
                />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? instagramDark : instagram}
                  alt="instagram"
                  className="size-8"
                />
              </a>

              <a
                href="https://twitter.com/mururi_G"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? twitterDark : twitter}
                  alt="twitter"
                  className="size-8"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
