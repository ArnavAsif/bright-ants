import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Offer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [offers, setOffers] = useState([]);


    useEffect(() => {
        fetch('https://bright-ants-backend.onrender.com/offers')
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setOffers(data.data)
            })
    }, [])

    const handleClick = () => {
        if (location.pathname === '/') {
            const section = document.getElementById('contact');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/contact');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row bg-[rgba(32,33,35,1)] justify-between items-center px-[23.5px] py-[30px] gap-10 lg:gap-0 lg:px-8 lg:py-[30px] ">
            {/* Left Text */}
            <p className='text-lg'>
                Unlock amazing deals with our <br /> special promotional offers!
            </p>

            {/* Offers Box */}
            <div className="relative text-[#D8D8D8]">
                {/* SVG border layer */}
                <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: 'none' }}
                >
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        rx="12"
                        ry="12"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        strokeDasharray="8,8"
                    />
                </svg>

                {/* Content inside */}
                <div className="flex flex-wrap gap-9 relative z-10 p-5">
                    {/* Offers */}
                    {
                        offers.map(offer => {
                            const descriptionParts = offer.description.split("|||");

                            return (
                                <div key={offer.id} className="flex flex-col gap-1">
                                    <p className="text-sm lg:text-base font-bold">{offer.title}</p>

                                    {/* Show each part of the description */}
                                    {descriptionParts.map((part, index) => (
                                        <p key={index} className="text-sm lg:text-base">{part.trim()}</p>
                                    ))}

                                    <p className="text-sm lg:text-base font-bold mt-1">$ {offer.price}</p>
                                </div>
                            );
                        })
                    }


                </div>
            </div>

            {/* Button */}
            <div className=''>
                <button
                    onClick={handleClick}
                    className="bg-[#EA1B26] text-white font-bold transition-all duration-200 text-xs sm:text-sm md:text-base xl:text-lg px-[96px] py-2 hover:bg-white hover:text-[#EA1B26]"
                >
                    Get in Touch
                </button>
            </div>
        </div>
    );
};

export default Offer;
