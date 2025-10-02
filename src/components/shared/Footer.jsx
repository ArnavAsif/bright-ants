import React, { useState } from "react";
import footerBg from "../../assets/footer/footer.svg";
import fbIcon from "../../assets/footer/fb.svg";
import linkedinIcon from "../../assets/footer/in.svg";
import twitterIcon from "../../assets/footer/twitter.svg";
import logo from "../../assets/mobile-logo.png";
import { Link } from "react-router";
import ThankYouMail from "./ThankYouMail";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(event.target);

    // Required fields
    formData.append("access_key", "c5b3a1fe-611d-4670-8086-11bf5bd57ccd");

    // ✅ Custom subject line
    formData.append("subject", "🎉 Promotional Offer");

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
    <footer
      className="text-white py-12"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1344px] mx-auto">
        {/* Logo: always left aligned */}
        <div className="ml-4 mb-2">
          <img src={logo} alt="BrightAnts Logo" className="md:w-auto" />
        </div>

        {/* Grid: responsive layout */}
        <div className="max-w-[1344px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <div>
              <span className="pb-[13px] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-[3px] after:border-[#005DAA] text-lg font-bold">
                BrightAnts
              </span>
            </div>
            <p className="text-sm mb-4 mt-3 leading-relaxed">
              We are more than just a creative design agency. We are
              storytellers, innovators, and problem-solvers. Let's collaborate
              and create something amazing together.
            </p>
            <div className="flex gap-4 mt-4">
              <img
                src={fbIcon}
                alt="Facebook"
                className="w-10 h-10 hover:opacity-80 cursor-pointer"
              />
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10 hover:opacity-80 cursor-pointer"
              />
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-10 h-10 hover:opacity-80 cursor-pointer"
              />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="pb-[13px] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-[3px] after:border-[#005DAA] text-lg font-bold">
              Navigation
            </h4>
            <ul className="space-y-[10px] mt-5">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Portfolio</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">
                <Link to="/contact">
                  <span>Help</span>
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="/about">
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="pb-[13px] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-[3px] after:border-[#005DAA] text-lg font-bold">
              Services
            </h4>
            <ul className="space-y-[10px] mt-5">
              <li className="hover:underline cursor-pointer">
                <Link to="service/graphicsDesign">
                  <span>Graphics Design</span>
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="service/digitalMediaDesign">
                  <span>Digital Media Design</span>
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="service/webDesign">
                  <span>Web Design</span>
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="service/UIandUX">
                  <span>UI and UX</span>
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                <Link to="service/wordPress">
                  <span>WordPress</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="pb-[13px] relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:w-1/2 after:border-b-[3px] after:border-[#005DAA] text-lg font-bold">
              Promotional offers
            </h4>
            <p className="text-sm mt-5 mb-4">
              Get in touch today, and let's make your ideas shine!
            </p>
            <form onSubmit={onSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email*"
                className="p-2 rounded text-black bg-[#D9D9D9] outline-none my-[14px]"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded"
              >
                {loading ? "Submitting" : "Submit"}
              </button>
            </form>
            {showModal && <ThankYouMail onClose={() => setShowModal(false)} />}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-gray-400 flex flex-wrap justify-center gap-x-4 gap-y-2 px-4">
          <span>© BrightAnts. All rights reserved.</span>
          <span className="hover:underline cursor-pointer">FAQ</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
