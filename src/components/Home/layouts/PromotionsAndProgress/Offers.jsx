import { useEffect, useState } from "react";
import redBg from "../../../../assets/bg-we.png";
import blueBg from "../../../../assets/bg-blue.png";
import promo from "../../../../assets/promotional-offers/logo.svg";
import vector from "../../../../assets/service/Vector.svg";
import arrow from "../../../../assets/service/arrow.svg";
import ContactSection from "./ContactSection";
import Offer from "./Offer";

const API = "https://bright-ants-backend.onrender.com";

const Offers = () => {
  const [offersData, setOffersData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOffers = async () => {
    try {
      const res = await fetch(`${API}/promotional-offers`);
      const data = await res.json();
      setOffersData(data.data || []);
    } catch (err) {
      console.error("Failed to fetch offers:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  const activeOffer = offersData[activeIndex];

  if (isLoading) {
    return (
      <div className="text-center text-white py-20">Loading offers...</div>
    );
  }

  if (!offersData.length) {
    return (
      <div className="text-center text-white py-20">
        No promotional offers available.
      </div>
    );
  }

  return (
    <div className="max-w-[1310px] mx-auto pt-12 lg:pt-[96px] pb-12 relative z-10 overflow-hidden">
      <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-70 pointer-events-none">
        <div className="grid grid-cols-2 h-full">
          <img src={redBg} alt="Red BG" className="w-full object-contain" />
          <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
        </div>
      </div>
      <div className="relative z-10 justify-center flex flex-col items-center px-5 lg:px-0">
        <img className="w-[335px] lg:w-[707px]" src={promo} alt="promoLogo" />
        <p className="text-center pt-5">
          Unlock amazing deals with BrightAnts' special promotional offers! We
          create visually stunning, conversion-optimized{" "}
          <br className="hidden lg:block" /> product images that grab attention
          and drive more sales. We have limited-time discounts and exclusive
          packages tailored to <br className="hidden lg:block" /> your needs.
        </p>
      </div>
      <div className="lg:bg-[rgba(32,33,35,1)] px-4 lg:my-[60px] pt-[35px] lg:pt-[30px] lg:pb-[83px] lg:w-[1308px] mx-auto rounded-[10px]">
        {/* Desktop Tabs */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mb-[78px] w-full max-w-full text-lg font-bold">
          {offersData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-center py-5 relative transition-all duration-300 ${
                activeIndex === index
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Promotional Offer {index + 1}
              {/* Underline border transition */}
              <span
                className={`absolute bottom-0 left-1/4 h-[2px] w-1/3 bg-[rgba(0,93,170,1)] transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Mobile Active Tab Only */}
        <div className="lg:hidden mb-6 text-[20px] font-bold text-center">
          <span className="text-white border-b-2 border-[rgba(0,93,170,1)] pb-2">
            Promotional Offer {activeIndex + 1}
          </span>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row justify-center items-start lg:gap-12 lg:pl-4 lg:pr-8">
          {/* Text Section */}
          <div className="w-[335px] mx-auto lg:w-[554px]">
            <h1 className="mb-6 lg:text-start text-center leading-[100%] lg:leading-16">
              {activeOffer.title}
            </h1>
            <p className="text-center lg:text-start">
              {activeOffer.description}
            </p>
          </div>

          {/* Images Section */}
          <div className="relative w-[335px] h-[211px] lg:w-[690px] lg:h-[434px] mx-auto lg:mx-0 mt-10 lg:mt-0 pr-9">
            {activeOffer.images.length >= 3 && (
              <>
                {/* Desktop side images */}
                <img
                  src={`${API}/files/${activeOffer.images[1]}`}
                  alt="Left background"
                  className="absolute object-cover rounded-lg shadow-lg opacity-50 hidden lg:block w-[230px] h-[390px] top-[44px] left-0"
                  onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                />
                <img
                  src={`${API}/files/${activeOffer.images[2]}`}
                  alt="Right background"
                  className="absolute object-cover rounded-lg shadow-lg opacity-50 hidden lg:block w-[230px] h-[390px] top-[44px] left-[460px]"
                  onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                />

                {/* Mobile side images */}
                <img
                  src={`${API}/files/${activeOffer.images[1]}`}
                  alt="Left mobile"
                  className="absolute object-cover rounded-lg shadow-lg opacity-50 block lg:hidden w-[100px] h-[180px] top-[15px] left-0"
                  onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                />
                <img
                  src={`${API}/files/${activeOffer.images[2]}`}
                  alt="Right mobile"
                  className="absolute object-cover rounded-lg shadow-lg opacity-50 block lg:hidden w-[100px] h-[180px] top-[15px] right-0"
                  onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                />

                {/* Center image */}
                <img
                  src={`${API}/files/${activeOffer.images[0]}`}
                  alt="Main offer"
                  className="absolute object-cover rounded-lg shadow-2xl z-30 w-[200px] h-[211px] top-0 left-1/2 -translate-x-1/2 lg:w-[400px] lg:h-[434px] lg:left-[145px] lg:translate-x-0"
                  onError={(e) => (e.target.src = "/placeholder-image.jpg")}
                />
              </>
            )}
          </div>

          {/* Mobile dots for navigation */}
          <div className="flex lg:hidden justify-center mt-6 gap-2 w-full">
            {offersData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-white" : "bg-gray-500 opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* offer section */}
      <div className="my-24 lg:mt-[60px] lg:mb-[148px]">
        <Offer></Offer>
      </div>
      {/* why bright ants */}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-[#1C1A1F] shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] py-[30px] lg:py-10 px-[17px] lg:px-[60px] mb-36 rounded-[12px]">
        <div className="lg:w-1/2">
          <img className="py-16" src={arrow} alt="arrow" />
        </div>
        <div className="lg:w-1/2">
          <h1>Why BrightAnts?</h1>
          <p className="py-[22px] text-center lg:text-start">
            We don't just design—we create experiences that captivate, engage,
            and inspire. Our team of passionate creatives and strategic thinkers
            is dedicated to delivering high-quality design solutions that set
            your brand apart. Whether it's branding, web design, digital media,
            or UI/UX, we bring innovation and expertise to every project.
          </p>
          <div className=" flex flex-col justify-center items-center lg:items-start lg:justify-start">
            <div className="space-y-[10px]">
              <div className="flex gap-2 items-center">
                <img src={vector} alt="vector" />
                <p>Creative Excellence</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={vector} alt="vector" />
                <p>Tailored Solutions</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={vector} alt="vector" />
                <p>User-Centered Design</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={vector} alt="vector" />
                <p>Cutting-Edge Innovation</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={vector} alt="vector" />
                <p>Reliable & Collaborative</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Offers;
