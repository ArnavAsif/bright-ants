import image1 from '../../../assets/hero2nd/image1.svg'
import image2 from '../../../assets/hero2nd/image2.svg'
import image3 from '../../../assets/hero2nd/image3.svg'
import image4 from '../../../assets/hero2nd/image4.svg'
import image5 from '../../../assets/hero2nd/image5.svg'
import image6 from '../../../assets/hero2nd/image6.svg'
import image7 from '../../../assets/hero2nd/image7.svg'
import image8 from '../../../assets/hero2nd/image8.svg'
import image9 from '../../../assets/hero2nd/image9.svg'
import image10 from '../../../assets/hero2nd/image10.svg'
import image11 from '../../../assets/hero2nd/image11.svg'
import m1 from '../../../assets/hero2nd/mobile/m1.png'
import m2 from '../../../assets/hero2nd/mobile/m2.png'
import m3 from '../../../assets/hero2nd/mobile/m3.png'
import m4 from '../../../assets/hero2nd/mobile/m4.png'
import m5 from '../../../assets/hero2nd/mobile/m5.png'
import avatar from '../../../assets/hero2nd/avatar.svg'
import colon from '../../../assets/hero2nd/colon.svg'
import threeDot from '../../../assets/hero2nd/three-dot.svg'
import avatarM from '../../../assets/hero2nd/avatarM.svg'
import Marquee from 'react-fast-marquee'



const OurClient = () => {
    return (
        <div className='max-w-fit mx-auto overflow-hidden'>
            {/* image section for desktop*/}
            <div className='hidden md:flex justify-center items-center mt-[53px]'>

                <div>
                    <Marquee>
                        <div className='flex gap-7 mb-[35px]'>
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                            <img src={image3} alt="" />
                            <img src={image4} alt="" />
                            <img src={image5} alt="" />
                            <img src={image6} alt="" />
                        </div>
                    </Marquee>
                    <Marquee direction='right'>
                        <div className='flex gap-7'>
                            <img src={image7} alt="" />
                            <img src={image8} alt="" />
                            <img src={image9} alt="" />
                            <img src={image10} alt="" />
                            <img src={image11} alt="" />
                        </div>
                    </Marquee>

                </div>

            </div>
            {/* image section for mobile*/}
            <div className='md:hidden overflow-hidden mt-[53px]'>
                <Marquee>
                    <div className='flex gap-7 mb-[35px]'>
                        <img src={m1} alt="" />
                        <img src={m2} alt="" />
                        <img src={m3} alt="" />
                    </div>
                </Marquee>
                <Marquee direction='right'>
                    <div className='flex gap-7'>
                        <img src={m4} alt="" />
                        
                        <img src={m5} alt="" />
                    </div>
                </Marquee>

            </div>

            {/* text section for desktop */}

            <div className='flex justify-center items-center md:w-[938px] mx-auto pt-12 md:py-[147px]'>
                <div>
                    <h1 className='hidden md:block font-figtree text-6xl/[64px] font-extrabold text-center text-white mb-[18px]'>Our Clients Say...</h1>

                    <div className='flex flex-col-reverse justify-center items-center md:flex-row px-5 md:px-0'>
                        {/* mobile */}
                        <div className='md:hidden font-figtree flex gap-5 justify-center items-center w-[240px] py-[15.5px]'>
                            <img src={avatarM} alt="avatar" />
                            <div>
                                <h3 className='text-base/[100%] mb-[10px] font-extrabold text-[#FAFAFA]'>Mate Varju</h3>
                                <p className='text-base/[100%] text-[#FAFAFA]'>Front End Developer</p>
                            </div>
                        </div>
                        {/* desktop */}
                        <div className='hidden font-figtree md:flex flex-col justify-center items-center w-[205px] '>
                            <img src={avatar} alt="avatar" />
                            <h3 className='mt-[15px] text-base/[100%] mb-[10px] font-extrabold text-[#FAFAFA]'>David Sulaivan</h3>
                            <p className='mb-[5px] text-[#FAFAFA]'>Chief Program Manager</p>
                            <p className='text-[#FAFAFA] text-base/[21px] '>Google LLC</p>
                        </div>

                        <div className='w-full md:w-[743px] pl-10 py-[15px]  md:mx-2 flex flex-col gap-6 justify-center items-start border-l-2 border-borderOur'>
                            <img width={33} height={30} src={colon} alt="" />
                            <p className='text-[#D8D8D8]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br className='hidden md:block' />incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br className='hidden md:block' /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <img width={36} height={8} src={threeDot} alt="" />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurClient;