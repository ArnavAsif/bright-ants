import figma from '../../../assets/promotional-offers/partners/1.svg'
import vecteezy from '../../../assets/promotional-offers/partners/2.svg'
import canva from '../../../assets/promotional-offers/partners/3.svg'
import photoshop from '../../../assets/promotional-offers/partners/4.svg'
import creatopy from '../../../assets/promotional-offers/partners/5.svg'
import marq from '../../../assets/promotional-offers/partners/6.svg'
import uizard from '../../../assets/promotional-offers/partners/7.svg'
import looka from '../../../assets/promotional-offers/partners/8.svg'

const Partners = () => {
    return (
        <div className='pb-[148px]'>
            <h1 className='text-white font-extrabold font-figtree text-center text-[34px]/[100%] md:text-6xl/[64px] tracking-[-3%] pt-6 md:pt-[120px]'>Our Trusted Partners</h1>
            <p className='font-mulish  text-base/[22px] md:text-[18px]/[26px] text-[#D8D8D8] tracking-[0%] text-center pt-[18px] mb-10'>We collaborate with industry-leading partners to deliver innovative, high-quality solutions. <br /> Together, we create exceptional experiences that drive success. <br /> Let's grow together! 🚀</p>

            <div>
                <div className="lg:w-[1015px] mx-auto bg-[#1C1A1F] grid-cols-2 grid lg:grid-cols-4 grid-rows-2 py-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    {/* Row 1 */}
                    <div className="flex items-center justify-center py-8 border-r border-b border-[#005DAA]">
                        <img src={figma} alt="Figma" className="h-6" />
                    </div>
                    <div className="flex items-center justify-center py-8 border-r border-b border-[#005DAA]">
                        <img src={vecteezy} alt="Vecteezy" className="h-6" />
                    </div>
                    <div className="flex items-center justify-center py-8 border-r border-b border-[#005DAA]">
                        <img src={canva} alt="Canva" className="h-6" />
                    </div>
                    <div className="flex items-center justify-center py-8 border-b border-[#005DAA]">
                        <img src={photoshop} alt="Photoshop" className="h-6" />
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-center justify-center py-8 border-b lg:border-b-0 border-r border-[#005DAA]">
                        <img src={creatopy} alt="Creatopy" className="h-6" />
                    </div>
                    <div className="flex items-center justify-center py-8 border-b lg:border-b-0 border-r border-[#005DAA]">
                        <img src={marq} alt="Marq" className="h-6" />
                    </div>
                    <div className="flex items-center justify-center py-8 border-r border-[#005DAA]">
                        <img src={uizard} alt="Uizard" className="h-6" />
                    </div>
                    <div className="flex items-center justify-center py-8">
                        <img src={looka} alt="Looka" className="h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;