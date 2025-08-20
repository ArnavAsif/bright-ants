import redBg from '../../assets/bg-we.png'
import blueBg from '../../assets/bg-blue.png'
import graphics from '../../assets/service/Graphics-design.svg'
import SeeOurWork from '../shared/SeeOurWork';
import ps from '../../assets/toolsWeuse/ps.svg'
import ai from '../../assets/toolsWeuse/ai.svg'
import lr from '../../assets/toolsWeuse/lr.svg'
import canva from '../../assets/toolsWeuse/canva.svg'
const items = [

    "Logo design",
    "Branding and identity design",
    "Digital and print advertisements",
    "Packaging design",
    "Print collateral (business cards, brochures, posters)",
]

const Graphics = () => {
    return (
        <div className='w-11/12 mx-auto pt-[96px] pb-12 relative z-10 overflow-hidden'>
            <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-60 pointer-events-none">
                <div className="grid grid-cols-2 h-full">
                    <img src={redBg} alt="Red BG" className="w-full object-contain" />
                    <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
                </div>
            </div>

            <div className='relative z-10 flex flex-col-reverse gap-[60px] lg:gap-0 lg:flex-row'>
                <div className='lg:w-2/3'>
                    <h1 className='text-center lg:text-start mb-6'>Graphics Design</h1>
                    <div className='text-center lg:text-start'>
                        <p>We transform ideas into visually stunning designs that captivate and communicate. Whether you need striking brand visuals, engaging marketing materials, or eye-catching digital graphics, our team of creative experts delivers designs that make a lasting impact.</p>
                        <p>We blend creativity with strategy to ensure your brand's message is powerful and persuasive. Let's bring your vision to life!</p>
                    </div>

                    <div className='flex gap-2 flex-wrap mt-12 justify-center items-center lg:justify-start lg:items-start'>
                        {
                            items.map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#2B70EA] hover:to-[#EA0B24] transition-all duration-300"
                                >
                                    <button className="bg-[#262628] text-[#FAFAFA] text-[16px] md:text-[16px] xl:text-[18px] px-4 py-2 rounded-full font-mulish hover:bg-white hover:text-[#1C1A1F] transition-all duration-300">
                                        {item}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:w-1/3 flex justify-center lg:justify-end'>
                    <img className='w-[60%] lg:w-full' src={graphics} alt="" />
                </div>

            </div>
            <div className='my-[148px]'>
                <SeeOurWork></SeeOurWork>
            </div>
            <div className='shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] py-[60px]'>
                <div className='max-w-[1075px] mx-auto'>
                    <h1 className='pb-10'>Tools We use</h1>
                    <div className="flex justify-center items-center gap-6">
                        {/* Photoshop */}
                        <div className="flex items-center gap-5 relative pr-[60px]">

                            <img src={ps} alt="photoshop" className="w-20 h-20" />
                            <p className='font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]'>Adobe <br /> Photoshop</p>


                            {/* Divider */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 border-r-2 border-[#005DAA]"></div>
                        </div>

                        {/* Illustrator */}
                        <div className="flex items-center gap-5 relative px-[60px]">
                            <img src={ai} alt="illustrator" className="w-20 h-20" />
                            <p className='font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]'>Adobe <br /> Illustrator</p>

                            {/* Divider */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 border-r-2 border-[#005DAA]"></div>
                        </div>

                        {/* Lightroom */}
                        <div className="flex items-center gap-5 relative px-[60px]">
                            <img src={lr} alt="lightroom" className="w-20 h-20" />
                            <p className='font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]'>Adobe <br /> Lightroom</p>

                            {/* Divider */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 border-r-2 border-[#005DAA]"></div>
                        </div>

                        {/* Canva (no divider at the end) */}
                        <div className="flex items-center gap-5 pl-[60px]">
                            <img src={canva} alt="canva" className="w-20 h-20" />
                            <p className='font-figtree font-normal text-[14px] md:text-[20px] leading-[120%] tracking-[-0.03em]'>Canva</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Graphics;