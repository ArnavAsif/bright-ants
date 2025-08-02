import tiger from '../../../../assets/resorurces/tiger.svg'

const ResourcesSection = () => {
    return (
        <section className="bg-[#0B0A29] text-white md:w-[1310px] mx-auto rounded-lg overflow-hidden my-[96px] md:my-[148px]">
            <div className="flex flex-col lg:flex-row items-center justify-between">

                {/* Text Content */}
                <div className="md:pl-[60px] px-5 md:px-0 py-10 lg:w-1/2">
                    <h2 className="text-center md:text-start text-[34px]/[100%] md:text-6xl/[100%] font-extrabold font-figtree tracking-[-3%]">Our Resources</h2>
                    <p className="text-[#D8D8D8] text-base/[26px] md:text-lg/[26px] font-mulish pt-4">
                        Explore a collection of valuable insights, guides, and tools designed
                        to help you stay ahead in the creative and digital world. From design
                        tips to industry trends, our resources empower you with knowledge to
                        grow your brand effectively.
                    </p>

                    {/* Stats */}
                    <div className="md:flex grid grid-cols-2 pl-7 md:pl-0 gap-6 pt-[30px] font-figtree">
                        <div className='w-[106px]'>
                            <div className='flex gap-1'>
                                <p className="text-6xl/[100%] font-extrabold">97</p>
                                <span className='text-[20px]'>%</span>
                            </div>
                            <p className="text-lg/[100%] text-[#FAFAFA] font-semibold tracking-[-3%] mt-1">PageSpeed score</p>
                        </div>
                        <div className='w-[111px]'>
                            <div className='flex gap-1'>
                                <p className="text-6xl/[100%] font-extrabold">37</p>
                                <span className='text-[20px]'>%</span>
                            </div>
                            <p className="text-lg/[100%] text-[#FAFAFA] font-semibold tracking-[-3%] mt-1">Less CSS and JS code files</p>
                        </div>
                        <div className='w-[111px]'>
                            <div className='flex gap-1'>
                                <p className="text-6xl/[100%] font-extrabold">92</p>
                                <span className='text-[20px]'>%</span>
                            </div>
                            <p className="text-lg/[100%] text-[#FAFAFA] font-semibold tracking-[-3%] mt-1">Less CSS and JS code files</p>
                        </div>
                        <div className='w-[111px]'>
                            <div className='flex gap-1'>
                                <p className="text-6xl/[100%] font-extrabold">37</p>
                                <span className='text-[20px]'>%</span>
                            </div>
                            <p className="text-lg/[100%] text-[#FAFAFA] font-semibold tracking-[-3%] mt-1">Less CSS and JS code files</p>
                        </div>
                    </div>
                </div>

                {/* Tiger Image */}
                <div className="hidden md:block lg:w-1/2">
                    <img
                        src={tiger}
                        alt="Geometric tiger"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
