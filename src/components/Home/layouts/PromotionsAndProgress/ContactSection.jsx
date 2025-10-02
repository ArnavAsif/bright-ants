/* eslint-disable no-unused-vars */
import { useState } from "react";
import UpgradeThankYouModal from "../../../shared/UpgradeThankYouModal";

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5b3a1fe-611d-4670-8086-11bf5bd57ccd");
    formData.append("subject", "🎉 New Project Inquiry from BrightAnts!"); // optional

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setShowModal(true);
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Network error", error);
      setResult("Network error occurred");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section id="contact" className=" text-white px-4 py-12">
      <div className="max-w-[1173px] mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="flex-1 flex justify-center md:justify-start items-center">
          <div>
            <h2 className="text-[34px] md:text-6xl text-[#FAFAFA] font-extrabold mb-[30px]">
              Contact Us
            </h2>

            <div className="flex flex-col md:flex-row gap-10 md:gap-[54px]">
              {/* Bangladesh Office */}
              <div className="mb-8">
                <h4 className="font-semibold text-[#FAFAFA] mb-[9px]">
                  BANGLADESH OFFICE
                </h4>
                <p className="text-[#FAFAFA] leading-relaxed">
                  House 19, Road 6,
                  <br />
                  Block E, Banasree
                  <br />
                  Dhaka-1219
                </p>
                <p className="mt-3 md:mt-[52px]">
                  Phone:{" "}
                  <a
                    href="tel:+8801309296713"
                    className="text-[#2176F5] hover:underline"
                  >
                    +880 1309296713
                  </a>
                </p>
                <p className="mt-[13px]">
                  Email:{" "}
                  <a
                    href="mailto:info@brightants.com"
                    className="text-[#2176F5] hover:underline"
                  >
                    info@brightants.com
                  </a>
                </p>
              </div>

              {/* UK Office */}
              <div className="mb-8">
                <h4 className="font-semibold text-[#FAFAFA] mb-[9px]">
                  UK OFFICE
                </h4>
                <p className="text-[#FAFAFA] leading-relaxed">
                  China Works
                  <br />
                  100 Black Prince Rd
                  <br />
                  London
                  <br />
                  SE1 7SJ
                </p>
                <p className="mt-[24px]">
                  Phone:{" "}
                  <a
                    href="tel:+36306358061"
                    className="text-[#00A3FF] hover:underline"
                  >
                    +36306358061
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 max-w-[514px] max-h-[609px] w-full h-full bg-[#202123] shadow-sm rounded-lg ">
          <div className="py-[55px] px-[42px]">
            <h3 className="text-xl font-bold mb-[34px]">Ask Us Anything!</h3>
            <form className="space-y-[18px]" onSubmit={onSubmit}>
              <div className="flex flex-col md:flex-row gap-[30px]">
                <div className="flex-1">
                  <label className="block text-sm mb-1">First name*</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">Last name*</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  What can we help you with?
                </label>
                <textarea
                  name="message"
                  rows="5"
                  className="w-full p-2 rounded bg-[#D9D9D9] text-black outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E40017] text-white font-semibold py-2 rounded hover:bg-red-700 transition-colors"
              >
                {loading ? "Submitting" : "Submit"}
              </button>

              {status && <p className="text-sm mt-3">{status}</p>}
            </form>
            {/* Show Modal */}
            {showModal && (
              <UpgradeThankYouModal onClose={() => setShowModal(false)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
