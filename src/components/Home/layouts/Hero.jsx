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
        <div className='mt-2 md:mt-[170px]'>
            <div className="relative w-full text-white overflow-hidden pt-16 pb-12 md:pb-40 px-6 md:px-12">
                <div className="max-w-[1344px] mx-auto relative flex flex-col md:flex-row items-start justify-between">

                    {/* Text Section */}
                    <div className="max-w-[739px] z-20">
                        <div>
                            <div>
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
                                        className="text-[31px] md:text-[70px] font-extrabold font-figtree leading-tight "
                                    >
                                        {headings[index]}
                                    </motion.h2>
                                </AnimatePresence>
                            </div>
                            <div className='md:hidden absolute top-[-70px] left-[120px]'>
                                <img src={ant} alt="" />
                            </div>
                        </div>

                        <p className="font-mulish text-white md:text-[22px] leading-relaxed mt-5">
                            Partnering with BrightAnts means working with a team you love and<br />
                            achieving results you can trust. Efficiently, affordably, and sustainably.
                        </p>
                        <div className='absolute rounded-full -top-[100px] -left-[90px]'>
                            <img src={textBg} 
                            className='rounded-full'
                            alt="" />
                        </div>
                    </div>

                    {/* Ant Image */}
                    <div className=" hidden md:flex absolute top-[-190px] right-[-80px] w-[822px] max-w-none z-10 pointer-events-none">
                        <img

                            src={ant}
                            alt="Hero Ant"
                            className="w-full h-auto object-contain mix-blend-luminosity"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
