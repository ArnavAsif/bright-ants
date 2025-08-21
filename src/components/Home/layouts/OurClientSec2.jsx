import colon from '../../../assets/hero2nd/colon.svg';


const API = "https://bright-ants-backend.onrender.com";

const OurClientSec2 = ({ client }) => {


    return (
        <div>
            <h1 className="hidden md:block font-figtree text-6xl/[64px] font-extrabold text-center text-white mb-[18px]">
                Our Clients Say...
            </h1>

            <div className="flex flex-col-reverse justify-center items-center md:flex-row px-5 md:px-0">
                {/* Mobile avatar */}
                <div className="md:hidden font-figtree flex gap-5 justify-center items-center w-[240px] py-[15.5px]">
                    <div className='w-[57px] h-[57px]'>
                        <img className='w-full h-full rounded-full object-cover' src={`${API}/files/${client.image}`} alt="avatar" />
                    </div>
                    <div>
                        <h3 className="text-base/[100%] tracking-[-3%] mb-[5px] font-bold text-[#FAFAFA]">
                            {client.name}
                        </h3>
                        <p className="mb-[5px] leading-[100%] text-[#FAFAFA]">{client.designation}</p>
                        <p className="text-[#FAFAFA] leading-[100%]">{client.company}</p>
                    </div>
                </div>

                {/* Desktop avatar */}
                <div className="hidden lg:flex flex-col justify-center items-center w-[250px] px-3 font-figtree">
                    <div className='w-[57px] h-[57px]'>
                        <img className='w-full h-full rounded-full object-cover' src={`${API}/files/${client.image}`} alt="avatar" />
                    </div>
                    <h3 className="mt-[15px] text-base/[100%] mb-[10px] font-extrabold text-[#FAFAFA]">
                        {client.name}
                    </h3>
                    <p className="mb-[5px] text-[#FAFAFA]">{client.designation}</p>
                    <p className="text-[#FAFAFA] text-base/[21px]">{client.company}</p>
                </div>

                <div className="w-full md:w-[743px] pl-10 py-[15px] md:mx-2 flex flex-col gap-6 justify-center items-start border-l-2 border-borderOur">
                    <img width={33} height={30} src={colon} alt="" />
                    <p className="text-[#D8D8D8]">
                        {client.content}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default OurClientSec2;