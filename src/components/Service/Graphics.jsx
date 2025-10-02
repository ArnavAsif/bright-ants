import redBg from "../../assets/bg-we.png";
import blueBg from "../../assets/bg-blue.png";
import graphics from "../../assets/service/Graphics-design.svg";
import SeeOurWork from "../shared/SeeOurWork";
import ps from "../../assets/toolsWeuse/ps.svg";
import ai from "../../assets/toolsWeuse/ai.svg";
import lr from "../../assets/toolsWeuse/lr.svg";
import canva from "../../assets/toolsWeuse/canva.svg";
import WorkingProcess from "../Home/layouts/PromotionsAndProgress/WorkingProcess";
import { Navigate, useLocation, useNavigate } from "react-router";
const items = [
  "Logo design",
  "Branding and identity design",
  "Digital and print advertisements",
  "Packaging design",
  "Print collateral (business cards, brochures, posters)",
];

const Graphics = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to /contact route if not on homepage
      navigate("/contact");
    }
  };
  return (
    <div className="max-w-[1310px] mx-auto pt-[96px] pb-12 relative z-10 overflow-hidden">
      <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-60 pointer-events-none">
        <div className="grid grid-cols-2 h-full">
          <img src={redBg} alt="Red BG" className="w-full object-contain" />
          <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col-reverse gap-[60px] lg:gap-0 lg:flex-row">
        <div className="lg:w-2/3">
          <h1 className="text-center lg:text-start mb-6">Graphics Design</h1>
          <div className="text-center lg:text-start">
            <p>
              We transform ideas into visually stunning designs that captivate
              and communicate. Whether you need striking brand visuals, engaging
              marketing materials, or eye-catching digital graphics, our team of
              creative experts delivers designs that make a lasting impact.
            </p>
            <p>
              We blend creativity with strategy to ensure your brand's message
              is powerful and persuasive. Let's bring your vision to life!
            </p>
          </div>

          {/* <div className="flex gap-2 flex-wrap mt-12 justify-center items-center lg:justify-start lg:items-start">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#2B70EA] hover:to-[#EA0B24] transition-all duration-300"
              >
                <button className="bg-[#262628] text-[#FAFAFA] text-[16px] md:text-[16px] xl:text-[18px] px-4 py-2 rounded-full font-mulish  transition-all duration-300">
                  {item}
                </button>
              </div>
            ))}
          </div> */}
          {/* chat gpt */}
          <div className="flex gap-2 flex-wrap mt-12 justify-center items-center lg:justify-start lg:items-start">
            {items.map((item, i) => (
              <div key={i} className="relative rounded-full p-[2px] group">
                {/* Gradient border layer */}
                <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#2B70EA] to-[#EA0B24] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                {/* Inner button (content always above) */}
                <button className="relative bg-[#262628] text-[#FAFAFA] text-[16px] md:text-[16px] xl:text-[18px] px-4 py-2 rounded-full font-mulish transition-all duration-500 ease-in-">
                  {item}
                </button>
              </div>
            ))}
          </div>
          {/* chat gpt */}
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <img className="w-[60%] lg:w-fit" src={graphics} alt="" />
        </div>
      </div>
      <div className="my-24 lg:my-[148px]">
        <SeeOurWork></SeeOurWork>
      </div>
      <div className="shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] py-[60px] mb-24 lg:mb-[148px]">
        <div className="max-w-[1075px] mx-auto">
          <h1 className="pb-[10px] lg:pb-10">Tools We use</h1>
          <div className="grid grid-cols-2 lg:flex justify-center items-center gap-[30px] p-3 lg:p-0 lg:gap-6">
            {/* Photoshop */}
            <div className="flex items-center gap-5 relative lg:pr-[60px]">
              <img
                src={ps}
                alt="photoshop"
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <p className="font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]">
                Adobe <br /> Photoshop
              </p>

              {/* Divider */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-1/2 border-r-2 border-[#005DAA]"></div>
            </div>

            {/* Illustrator */}
            <div className="flex items-center gap-5 relative lg:px-[60px]">
              <img
                src={ai}
                alt="illustrator"
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <p className="font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]">
                Adobe <br /> Illustrator
              </p>

              {/* Divider */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-1/2 border-r-2 border-[#005DAA]"></div>
            </div>

            {/* Lightroom */}
            <div className="flex items-center gap-5 relative lg:px-[60px]">
              <img
                src={lr}
                alt="lightroom"
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <p className="font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]">
                Adobe <br /> Lightroom
              </p>

              {/* Divider */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-1/2 border-r-2 border-[#005DAA]"></div>
            </div>

            {/* Canva (no divider at the end) */}
            <div className="flex items-center gap-5 lg:pl-[60px]">
              <img
                src={canva}
                alt="canva"
                className="w-10 h-10 lg:w-20 lg:h-20"
              />
              <p className="font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]">
                Canva
              </p>
            </div>
          </div>
        </div>
      </div>
      <WorkingProcess></WorkingProcess>
      <div className="my-24 lg:my-[148px] py-[60px] shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)]">
        <div className=" max-w-[1107px] mx-auto text-center ">
          <h1 className="mb-[30px]">Need Some Help?</h1>
          <p>
            Got a project in mind but not sure where to start? Whether you need
            a stunning new design, a website revamp, or expert advice on your
            digital presence, BrightAnts is here to help! Our team of creative
            professionals is ready to bring your vision to life with innovative
            design solutions tailored to your needs.
          </p>
          <p>
            Let's collaborate and create something amazing together. Get in
            touch today, and let's make your ideas shine!
          </p>
          <div className="mt-10">
            <button
              onClick={handleClick}
              className="bg-[#EA1B26] text-white font-bold transition-all duration-200
                 text-xs sm:text-sm md:text-base xl:text-lg 
                 px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 lg:px-7 lg:py-3 
                 hover:bg-white hover:text-[#EA1B26]"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphics;
