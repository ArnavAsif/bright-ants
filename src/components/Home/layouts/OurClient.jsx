import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import OurClientSec2 from "./OurClientSec2";

const API = "https://bright-ants-backend.onrender.com";

const OurClient = () => {
    const [imagesRow1, setImagesRow1] = useState([]);
    const [imagesRow2, setImagesRow2] = useState([]);
    const [clients, setClients] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch(`${API}/carousel-images/row/1`)
            .then(res => res.json())
            .then(data => setImagesRow1(data.data || []))
            .catch(err => console.error(err));

        fetch(`${API}/carousel-images/row/2`)
            .then(res => res.json())
            .then(data => setImagesRow2(data.data || []))
            .catch(err => console.error(err));

        fetch(`${API}/testimonials`)
            .then(res => res.json())
            .then(data => setClients(data.data || []))
            .catch(err => console.error(err));
    }, []);

    // ✅ Auto-slide every 3 seconds
    useEffect(() => {
        if (clients.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval); // Clear on unmount
    }, [clients]);

    const renderMarqueeImages = (images) =>
        images.map((img) => (
            <img
                key={img.id}
                src={`${API}/files/${img.filename}`}
                alt={img.filename}
                className="w-full h-full mr-7 object-cover"
            />
        ));

    return (
        <div className="w-11/12 mx-auto overflow-hidden">
            {/* Desktop Marquees */}
            <div className="hidden md:flex justify-center items-center mt-[53px]">
                <div>
                    <Marquee gradient={false}>
                        <div className="flex h-[191px] mb-[35px]">
                            {renderMarqueeImages(imagesRow1)}
                        </div>
                    </Marquee>
                    <Marquee gradient={false} direction="right">
                        <div className="flex h-[191px] mb-[35px]">
                            {renderMarqueeImages(imagesRow2)}
                        </div>
                    </Marquee>
                </div>
            </div>

            {/* Mobile Marquees */}
            <div className="md:hidden overflow-hidden mt-[53px]">
                <Marquee gradient={false}>
                    <div className="flex h-[100px] mb-[35px]">
                        {renderMarqueeImages(imagesRow1)}
                    </div>
                </Marquee>
                <Marquee gradient={false} direction="right">
                    <div className="flex h-[100px] mb-[35px]">
                        {renderMarqueeImages(imagesRow2)}
                    </div>
                </Marquee>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col justify-center items-center md:w-[938px] mx-auto pt-12 md:py-[147px]">
                {clients.length > 0 && (
                    <OurClientSec2 key={clients[activeIndex].id} client={clients[activeIndex]} />
                )}

                {/* Navigation Dots */}
                <div className="flex gap-2 mt-6">
                    {clients.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex
                                    ? 'bg-white scale-125'
                                    : 'bg-gray-400'
                                }`}
                            onClick={() => setActiveIndex(idx)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurClient;
