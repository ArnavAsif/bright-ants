import icon1 from '../../../assets/working/icon-1.svg'
import icon2 from '../../../assets/working/icon-2.svg'
import icon3 from '../../../assets/working/icon-3.svg'
import one from '../../../assets/working/1.svg'
import two from '../../../assets/working/2.svg'
import three from '../../../assets/working/3.svg'


const WorkingProcess = () => {
    return (
        <div>
            <div className="max-w-[1310px] mx-auto font-figtree">
                <h1 className='text-6xl/[64px] font-extrabold text-center text-white mb-10'>Our Working Process</h1>
            </div>
            <div className="max-w-[1310px] mx-auto flex flex-wrap justify-between gap-6 font-figtree">
                {/* Card 1 */}
                <div className="group transition-all ease-in-out duration-500 hover:pt-[60px] w-[410px] h-[484px] bg-[linear-gradient(to_bottom_right,rgba(62,53,245,1),rgba(71,255,175,0.8))] text-white px-10 pt-10 relative rounded-lg">
                    <h3 className="text-[22px]/[100%] font-extrabold mb-[10px]">CONSULTATION</h3>
                    <p className="text-base/21px mb-10">
                        We have a detailed conversation with you to fully understand your goals and industry. From there, we conduct thorough market research to guide the process.
                    </p>
                    <h4 className="text-[22px]/[100%] font-extrabold mb-[10px]">PROPOSAL & AGREEMENT</h4>
                    <p className="text-base/21px">
                        We provide you with a detailed proposal outlining the project scope, timeline, and costs. Once you're happy and give approval, we'll move forward with a formal agreement.
                    </p>
                    {/* Number & Icon */}
                    <img src={one} alt="Step 1" className="absolute bottom-[-48px] left-4 w-[106px] h-[105px] transition-all duration-500 ease-in-out group-hover:bottom-[-24px]" />
                    <img src={icon1} alt="Icon 1" className="absolute bottom-4 right-4 w-[192px] h-[240px]" />
                </div>

                {/* Card 2 */}
                <div className="group transition-all ease-in-out duration-500 hover:pt-[60px] w-[410px] h-[484px] bg-[linear-gradient(to_bottom_right,rgba(225,41,41,1),rgba(45,49,198,1))] text-white pt-10 px-10 relative rounded-lg">
                    <h3 className="text-[22px]/[100%] font-extrabold mb-[10px]">CONCEPT DEVELOPMENT</h3>
                    <p className="text-base/21px mb-10">
                        Our team creates initial concepts, sketches, and prototypes based on your vision, ensuring each design aligns with your expectations and needs.
                    </p>
                    <h4 className="text-[22px]/[100%] font-extrabold mb-[10px]">FEEDBACK AND AMENDS</h4>
                    <p className="text-base/21px">
                        We collaborate closely with you, presenting designs for your feedback and making necessary adjustments to ensure alignment with your goals and vision.
                    </p>
                    <img src={two} alt="Step 1" className="absolute bottom-[-48px] left-4 w-[106px] h-[105px] transition-all duration-500 ease-in-out group-hover:bottom-[-24px]" />
                    <img src={icon2} alt="Icon 1" className="absolute bottom-4 right-4 w-[192px] h-[240px]" />
                </div>

                {/* Card 3 */}
                <div className="group w-[410px] h-[484px] pt-10 px-10 bg-[linear-gradient(to_bottom_right,rgba(255,166,0,1),rgba(248,15,94,1))] text-white relative rounded-lg transition-all duration-500 ease-in-out hover:pt-[60px]">
                    <h3 className="text-[22px]/[100%] font-extrabold mb-[10px]">FINALIZATION AND DELIVERY</h3>
                    <p className="text-base/21px mb-10">
                        Upon approval, we finalize all design assets, ensuring they meet technical specifications. Delivery of completed assets is then made to the client.
                    </p>
                    <h4 className="text-[22px]/[100%] font-extrabold mb-[10px]">SUPPORT</h4>
                    <p className="text-base/21px">
                        We conduct quality assurance checks to maintain high standards. Ongoing support, including training and assistance, is provided as needed.
                    </p>
                    <img src={three} alt="Step 3" className="absolute bottom-[-48px] left-4 w-[106px] h-[105px] transition-all duration-500 ease-in-out group-hover:bottom-[-24px]"
                    />
                    <img src={icon3} alt="Icon 3" className="absolute bottom-4 right-4 w-[192px] h-[240px]"
                    />
                </div>

            </div>
        </div>

    );
};

export default WorkingProcess;