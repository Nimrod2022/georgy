const darkMessageIcon = "/assets/message-icon-dark.svg";
const lightMessageIcon = "/assets/message-icon-light.svg";
import { toast } from "react-toastify";
import { useState, useRef, useEffect } from "react";

// bg-[#F0F0F4]

const Contact = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");

  const frontendRadioButtonRef = useRef(null);

  useEffect(() => {
    setInterest("Frontend");

    // trigger the change event for the "Frontend" radio button
    if (frontendRadioButtonRef.current) {
      frontendRadioButtonRef.current.checked = true;
      frontendRadioButtonRef.current.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!name || !email || !message || !phone || !interest) {
      toast.error("Email not sent, Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mjvqjwgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          interest,
        }),
      });

      if (response.ok) {
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setInterest("");
      } else {
        toast.error("Failed to send email", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error.message);
      toast.error("Failed to send email", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <section className={`${darkMode ? "dark" : ""}`}>
        <div
          id="/contact"
          className="inter dark:bg-[#1A1A1A] bg-[#E0E8F6] flex flex-col justify-center items-center relative pt-10 md:pt-10"
        >
          <h1 className=" text-[#26313F] dark:text-[#8987A1] text-2xl md:text-3xl font-extrabold">
            Get in Touch
          </h1>
          <div className="w-full md:flex rounded-xl overflow-hidden   md:w-auto my-10  md:px-0 px-3 ">
            <div className="gap-y-8 lg:grid-cols-5">
              <div className=" rounded-lg md:rounded-none form-height   p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form
                  action="#"
                  className="md:space-y-4 space-y-3 z-50 dark:text-white text-[#282938]"
                  onSubmit={sendEmail}
                >
                  <div className="flex  flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="dark:border-[#D6DDED] border-[#484E53] border dark:bg-[#1A1A1A] bg-[#E0E8F6] rounded-lg p-5"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@gmail.com"
                        className="dark:border-[#D6DDED] border-[#484E53] border dark:bg-[#1A1A1A] bg-[#E0E8F6] rounded-lg p-5"
                      />
                    </div>

                    <div className="flex  flex-col">
                      <label htmlFor="phone">Phone</label>
                      <input
                        placeholder="+43 600 000 000"
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="dark:border-[#D6DDED] border-[#484E53] border dark:bg-[#1A1A1A] bg-[#E0E8F6] rounded-lg p-5"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="interest">Service</label>
                    <select
                      id="interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="dark:border-[#D6DDED] border-[#484E53] border dark:bg-[#1A1A1A] bg-[#E0E8F6] rounded-lg p-5"
                    >
                      <option value="Frontend">Frontend</option>
                      <option value="Geoinformatics">Geoinformatics</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message">Message</label>
                    <textarea
                      placeholder="Message"
                      rows="5"
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="dark:border-[#D6DDED] border-[#484E53] border dark:bg-[#1A1A1A] bg-[#E0E8F6] rounded-lg p-5"
                    ></textarea>
                  </div>

                  <div className="md:pt-5 flex flex-col text items-center justify-center ">
                    <button
                      type="submit"
                      className={` text-md inter w-full rounded-lg bg-[#484E53] dark:bg-white px-3 py-2 md:px-5 md:py-3 font-bold text-white dark:text-black `}
                    >
                      Get in Touch
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
