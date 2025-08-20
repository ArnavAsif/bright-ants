import redBg from '../../assets/bg-we.png';
import blueBg from '../../assets/bg-blue.png';
import mission from '../../assets/aboutUs/mission.svg'
import vision from '../../assets/aboutUs/vision.svg'
import value from '../../assets/aboutUs/value.svg'
import ContactSection from '../Home/layouts/PromotionsAndProgress/ContactSection';
import { useState } from 'react';
import VideoSection from './VideoSection';
import Attorneys from './Attorneys';

const About = () => {
    const [btn, setBtn] = useState('mission')
    return (
        <div className='max-w-[1310px] mx-auto pt-[96px] pb-12 relative z-10 overflow-hidden'>
            <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-45 pointer-events-none">
                <div className="grid grid-cols-2 h-full">
                    <img src={redBg} alt="Red BG" className="w-full object-contain" />
                    <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
                </div>
            </div>
            <div className='max-w-[1034px] mx-auto px-[43px] space-y-[10px] relative z-10'>
                <h1>About Us</h1>
                <p className='text-center font-bold'>{'Home > About'}</p>
            </div>
            <div className='pt-[48px] pb-[148px] relative z-10'>
                <div className='lg:max-w-[1120px] mx-auto flex lg:flex-row flex-col justify-between'>
                    <div className='lg:px-0 px-5 text-center lg:text-start lg:w-[524px]'>
                        <h1 className='text-center lg:text-start'>We help on <br /> creating legal briefs</h1>
                        <p className='mt-[10px] '>We understand that legal documents need to be both professional and visually compelling. Our design expertise extends to crafting well-structured, clear, and polished legal briefs that enhance readability and presentation. Whether you need formatting, typography adjustments, or custom branding elements, we ensure that your legal documents maintain a high standard of clarity and professionalism.</p>
                        <hr className='text-[#005DAA] my-[18px]' />
                        {/* buttons */}
                        <div className='flex gap-1 md:gap-5 text-lg/[100%] tracking-normal font-semibold mb-[18px] justify-center items-center'>
                            <button
                                onClick={() => setBtn('mission')}
                                className={`px-[20.5px] py-[7.5px] md:px-[30px] md:py-[7px] rounded-full transition-all ${btn === 'mission' ? 'bg-[#EA1B26] text-white' : 'text-[#EA1B26]'
                                    }`}
                            >
                                Mission
                            </button>
                            <button
                                onClick={() => setBtn('vision')}
                                className={`px-[20.5px] py-[7.5px] md:px-[30px] md:py-[7px] rounded-full transition-all ${btn === 'vision' ? 'bg-[#EA1B26] text-white' : 'text-[#EA1B26]'
                                    }`}
                            >
                                Vision
                            </button>
                            <button
                                onClick={() => setBtn('value')}
                                className={`px-[20.5px] py-[7.5px] md:px-[30px] md:py-[7px] rounded-full transition-all ${btn === 'value' ? 'bg-[#EA1B26] text-white' : 'text-[#EA1B26]'
                                    }`}
                            >
                                Our Value
                            </button>
                        </div>
                        {/* buttons contains */}
                        <div>
                            {/* mission contain */}
                            {
                                btn === 'mission' && <p>Our mission is to bring brands to life through visually compelling and strategically crafted designs. From branding and web design to digital media and UI/UX, we create seamless experiences that captivate and engage audiences.</p>
                            }
                            {/* vision contain */}
                            {
                                btn === 'vision' && <p>We envision a world where design transforms ideas into unforgettable experiences. Our goal is to become a leading creative agency that pushes the boundaries of innovation, helping businesses of all sizes establish a strong, engaging, and future-ready brand presence.</p>

                            }
                            {/* Our value contain */}
                            {
                                btn === 'value' && <p>Our values define who we are and how we approach every project. We are committed to delivering creative solutions that inspire, engage, and drive results. Our passion for design fuels everything we do. Let's create something extraordinary together!</p>
                            }
                        </div>
                    </div>
                    <div className='lg:w-1/2 lg:flex py-[33px] px-5 lg:px-0 lg:justify-end relative z-10 '>
                        {btn === 'mission' && <img src={mission} alt="" />}
                        {btn === 'vision' && <img src={vision} alt="" />}
                        {btn === 'value' && <img src={value} alt="" />}

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