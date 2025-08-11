
import React from 'react';
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
        triggerOnce: true, // only trigger once
        threshold: 0.3, // triggers when 30% of the section is visible
    });
    return (
        <div>
            <div>
                <h1>Take a vital look <br /> at out application working</h1>
                <p className='text-center mt-[7px]'>See our application in motion! Experience its seamless functionality, intuitive design, and powerful features that <br /> enhance user experience. Discover how it works today!</p>
                <video src=""></video>
            </div>
            <section ref={ref} className="py-8">
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

                                <h1 className="text-3xl font-bold text-white">
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
                                <p className="text-gray-300">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoSection;