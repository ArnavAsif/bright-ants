import redBg from "../../assets/bg-we.png";
import blueBg from "../../assets/bg-blue.png";
import mission from "../../assets/aboutUs/mission.svg";
import ContactSection from "../Home/layouts/PromotionsAndProgress/ContactSection";
import VideoSection from "./VideoSection";
import Attorneys from "./Attorneys";

const About = () => {
  return (
    <div className="max-w-[1310px] mx-auto pt-[96px] pb-12 relative z-10 overflow-hidden">
      <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-90 pointer-events-none">
        <div className="grid grid-cols-2 h-full">
          <img src={redBg} alt="Red BG" className="w-full object-contain" />
          <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
        </div>
      </div>
      <div className="max-w-[1034px] mx-auto px-[43px] space-y-[10px] relative z-10">
        <h1>About Us</h1>
        <p className="text-center font-bold">{"Home > About"}</p>
      </div>
      <div className="pt-[48px] pb-24 lg:pb-[148px] relative z-10">
        <div className="lg:max-w-[1120px] mx-auto flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:px-0 px-5 text-center lg:text-start lg:w-[524px]">
            <h1 className="text-center lg:text-start">
              We help on <br /> creating legal briefs
            </h1>
            <p className="mt-[10px]">
              We understand that legal documents need to be both professional
              and visually compelling. Our design expertise extends to crafting
              well-structured, clear, and polished legal briefs that enhance
              readability and presentation. Whether you need formatting,
              typography adjustments, or custom branding elements, we ensure
              that your legal documents maintain a high standard of clarity and
              professionalism.
            </p>
          </div>
          <div className="lg:w-1/2 lg:flex py-[33px] px-5 lg:px-0 lg:justify-end relative z-10 ">
            <img src={mission} alt="img" />
          </div>
        </div>
      </div>
      <VideoSection></VideoSection>
      <Attorneys></Attorneys>
      <ContactSection></ContactSection>
    </div>
  );
};

export default About;
