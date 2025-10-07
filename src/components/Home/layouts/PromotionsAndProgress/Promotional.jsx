/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import promoLogo from "../../../../assets/promotional-offers/promotion-logo.svg";
import { Link } from "react-router";

const API = "https://bright-ants-backend.onrender.com";

const PromoBlock = ({ title, description, images = [], reverse = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`rounded-[12px] flex flex-col-reverse ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center p-5 justify-between gap-8 mt-10 lg:p-[58px] ${
        reverse ? "bg-[#111013] shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      {/* Text Content */}
      <div
        className={`lg:w-[590px] w-full text-center ${
          reverse ? "lg:text-end" : "lg:text-start"
        }`}
      >
        <h2 className="font-figtree font-extrabold text-[34px] leading-[100%] tracking-[-0.03em] lg:text-[60px] lg:leading-[65px]">
          {title}
        </h2>

        <p className="font-mulish font-normal text-[16px] leading-[22px] tracking-[0] text-center lg:text-[18px] lg:leading-[26px] lg:text-justify text-[#D8D8D8] pt-[18px] pb-5">
          {description}
        </p>

        <div className="flex gap-6 flex-col lg:flex-row">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#EA1B26] hover:bg-white hover:text-[#EA1B26] text-white px-6 py-2.5 font-bold text-lg transition-all duration-200"
          >
            Get a Quote
          </button>
          <Link
            to="offers"
            className="bg-[#005DAA] hover:bg-[#2374F2]  text-white px-6 py-2.5 font-bold text-lg transition-all duration-200"
          >
            <button>See all Promotional Offers</button>
          </Link>
        </div>
      </div>
      {/* Image with arrows */}
      <div className="lg:w-[540px] w-full px-4 md:px-0 py-6 relative">
        {images.length > 0 && (
          <>
            <img
              key={images[currentIndex]} // for animation refresh
              src={`${API}/files/${images[currentIndex]}`}
              alt={`${title} - ${currentIndex + 1}`}
              className="w-full object-cover h-[197px] lg:h-[362px] max-h-full rounded-md"
              onError={(e) => (e.target.src = "/placeholder-image.jpg")}
            />
            {/* Left arrow */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
              aria-label="Previous Image"
              type="button"
            >
              ‹
            </button>
            {/* Right arrow */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
              aria-label="Next Image"
              type="button"
            >
              ›
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

const PromoSection = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const res = await fetch(`${API}/promotional-offers`);
        const data = await res.json();
        setPromos(data.data || []);
      } catch (err) {
        console.error("Failed to load promotional offers:", err);
      }
    };

    fetchPromos();
  }, []);

  return (
    <section className="w-[335px] md:w-auto lg:w-[1340px] mx-auto text-white rounded-lg mb-[100px] overflow-hidden">
      {/* Logo */}

      <div className="flex justify-center items-center mb-10">
        <img className="w-[80%] lg:w-auto" src={promoLogo} alt="Promo Logo" />
      </div>

      {/* Dynamic Promo Blocks */}
      {promos.slice(0, 1).map((promo, index) => (
        <PromoBlock
          key={promo.id}
          title={promo.title}
          description={promo.description}
          images={promo.images || []}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
};

export default PromoSection;
