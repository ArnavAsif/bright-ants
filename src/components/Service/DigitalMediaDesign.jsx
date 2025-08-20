import redBg from '../../assets/bg-we.png'
import blueBg from '../../assets/bg-blue.png'
import SeeOurWork from '../shared/SeeOurWork';

const DigitalMediaDesign = () => {
    return (
        <div className='max-w-[1310px] mx-auto pt-[96px] pb-12 relative z-10 overflow-hidden'>
            <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-60 pointer-events-none">
                <div className="grid grid-cols-2 h-full">
                    <img src={redBg} alt="Red BG" className="w-full object-contain" />
                    <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default DigitalMediaDesign;