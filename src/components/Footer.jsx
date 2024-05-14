import { Link } from "react-scroll";

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
        <div className="dark:bg-[#1A1A1A] bg-[#E0E8F6] ">
          <div className="flex justify-between items-center md:py-16 px-5 md:px-36 ">
            <div className="items-center ">
              <h1 className="md:text-5xl dark:text-[#DEDEDE] text-[#282938]">
                Let’s{" "}
              </h1>
              <p className="md:text-5xl dark:text-[#DEDEDE] pt-3 text-[#282938]">
                Work Together -
              </p>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "mailto:mururig@gmail.com";
                }}
                className="border border-[#484E53] px-8 rounded-lg p-5"
              >
                <span className="flex items-center gap-2">
                  <img src={gmail} alt="message-icon" className="size-8" />
                  <p className="text-[#484E53]">mururig@gmail.com</p>
                </span>
              </button>
            </div>
          </div>
          <hr className="border border-[#A9A9A9] dark:border-[#484E53]  w-full" />
          <div className="flex justify-between md:py-5 items-center md:px-32">
            <p className="text-[#282938] dark:text-[#A9A9A9] md:text-sm">
              © 2024 Nimrod Kibet. All Rights Reserved
            </p>

            <div className="flex gap-3 px-2  ">
              <a
                href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? linkedinDark : linkedin}
                  alt="github"
                  className="size-8"
                />
              </a>

              {/* <a
                href="https://github.com/Nimrod2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? githubDark : github}
                  alt="xing"
                  className="size-20"
                />
              </a> */}

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? facebookDark : facebook}
                  alt="github"
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
                  alt="github"
                  className="size-8"
                />
              </a>

              <a
                href="https://twitter.com/MandelaGI?t=ejgoi2MMFnyuNXcdNoMXtA&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={darkMode ? twitterDark : twitter}
                  alt="github"
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
