import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const VideoSection = () => {
    const stats = [
        { value: 10, suffix: "+", label: "Years Experience" },
        { value: 99, suffix: "%", label: "Accuracy Rate" },
        { value: 500, suffix: "+", label: "Positive Reviews" },
        { value: 600, suffix: "+", label: "Trusted Partners" },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3, 
    });
    return (
        <div>
            <div className='px-[37px] py-10 lg:px-[95px] lg:py-20 shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] '>
                <h1 className='text-2xl lg:text-6xl'>Take a vital look <br className='hidden lg:flex' /> at out <br className='flex lg:hidden' /> application working</h1>
                <p className='text-center mt-[7px]'>See our application in motion! Experience its seamless functionality, intuitive design, and powerful features that <br /> enhance user experience. Discover how it works today!</p>
                <div className='flex justify-center items-center mt-[30px]'>
                    <video className='w-[300px] h-[143px] lg:w-[1120px] lg:h-[539px] max-w-full object-contain rounded-[12px]' controls src="https://bright-ants-backend.onrender.com/files/video.mp4"></video>
                </div>
            </div>
            <section ref={ref} className="py-8 my-[75px] lg:my-36">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 text-center">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="py-4 flex flex-col items-center justify-center relative"
                            >
                                {/* Divider */}
                                {idx !== stats.length - 1 && (
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 border-r-2 border-[#005DAA]"></span>
                                )}

                                <h1>
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    ) : (
                                        `0${stat.suffix}`
                                    )}
                                </h1>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoSection;