/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import weDo from '../../../assets/weDo.png';
import ant from '../../../assets/hero-ant.png';
import textBg from '../../../assets/bg-we.png'


const headings = [
    "UX Research",
    "UI and UX Design",
    "App Design",
    "Graphics Design",
    "Digital Media Design",
    "WordPress"
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % headings.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (

        
            <div className="mt-2 md:mt-[140px] w-11/12 text-white overflow-hidden pt-16 pb-12 md:pb-40 px-6 mx-auto flex flex-col-reverse lg:flex-row lg:justify-baseline 2xl:justify-between items-center relative">

                {/* Text Section */}
                <div className="max-w-[739px] w-full relative z-20">
                    <div className="relative z-50">
                        <img
                            src={weDo}
                            alt="We Do"
                            className="w-full max-w-[159px] md:max-w-[350px] h-auto mb-2 bg-transparent"
                        />

                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.4 }}
                                className="text-[31px] md:text-[70px] font-extrabold font-figtree leading-tight"
                            >
                                {headings[index]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>
                    <p className="font-mulish text-white md:text-[22px] leading-relaxed mt-5">
                        Partnering with BrightAnts means working with a team you love and<br />
                        achieving results you can trust. Efficiently, affordably, and sustainably.
                    </p>

                    {/* Background Decoration (Desktop) */}
                    <div className='hidden lg:block absolute -top-[100px] -left-[90px] z-0'>
                        <img
                            src={textBg}
                            className='rounded-full w-full h-auto'
                            alt="Text Background"
                        />
                    </div>
                </div>

                {/* Ant Image (Desktop) */}
                <div className="flex overflow-hidden lg:scale-120 z-10 bg-[#1A191C] items-start lg:justify-start justify-end pr-5 lg:pr-14 max-w-[500px] w-full">
                    <img
                        src={ant}
                        alt="Hero Ant"
                        className="w-[70%] lg:w-full h-auto scale-120 object-contain mix-blend-luminosity"
                    />
                </div>
            </div>
        


    );
};

export default Hero;
