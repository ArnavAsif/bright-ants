import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const SeeOurWork = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://bright-ants-backend.onrender.com/works')
            .then(res => res.json())
            .then(data => setImages(data.data));
    }, []);

    const firstRow = images.filter((_, i) => i % 2 === 0);
    const secondRow = images.filter((_, i) => i % 2 !== 0);

    return (
        <div>
            <h1 className="text-center lg:text-start mb-[30px]">See Our Works</h1>
            <div className="hidden lg:flex flex-col gap-8">
                {/* Scrollable horizontal container */}
                <Marquee>
                    <div className="flex">
                        {firstRow.map(image => (
                            <img
                                key={image.id}
                                src={`https://bright-ants-backend.onrender.com/files/${image.image}`}
                                alt=""
                                className="h-52 object-cover rounded mr-6"
                            />
                        ))}
                    </div>
                </Marquee>

                <Marquee direction="right">
                    <div className="flex">
                        {secondRow.map(image => (
                            <img
                                key={image.id}
                                src={`https://bright-ants-backend.onrender.com/files/${image.image}`}
                                alt=""
                                className="h-52 object-cover rounded mr-6"
                            />
                        ))}
                    </div>
                </Marquee>
            </div>
            <div className={`lg:hidden px-8 flex flex-col gap-5 ${images.length > 4 ? 'max-h-[880px] overflow-y-auto' : ''
                }`}>
                {
                    images.map(image =>
                        <img
                            key={image.id}
                            src={`https://bright-ants-backend.onrender.com/files/${image.image}`}
                            alt="image"
                            className="h-52 object-cover rounded"
                        />)
                }
            </div>
        </div>

    );
};

export default SeeOurWork;
