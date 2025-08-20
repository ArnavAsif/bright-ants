import { useState } from 'react';
import i1 from '../../../../assets/promotional-offers/promo-add.svg'
import i2 from '../../../../assets/promotional-offers/promo-add.svg'
import i3 from '../../../../assets/promotional-offers/promo-add.svg'

const offersData = [
  {
    title: 'Get Amazon robusting feature images at 70% promotional offer',
    description:
      'Stand out in the crowded Amazon marketplace with high-quality, conversion-driven product images.',
    images: [i1, i2, i3],
  },
  {
    title: 'Launch your brand with stunning Amazon A+ content',
    description:
      'Drive more conversions with compelling visual storytelling tailored to your product niche.',
    images: ['/images/aPlus1.png', '/images/aPlus2.png', '/images/aPlus3.png'],
  },
  {
    title: 'Boost trust with infographic-style product images',
    description:
      'Use clean, data-rich visuals to educate buyers and increase purchase confidence.',
    images: ['/images/infographic1.png', '/images/infographic2.png', '/images/infographic3.png'],
  },
  {
    title: 'Turn browsers into buyers with lifestyle shots',
    description:
      'Show your product in real-life scenarios to build emotional connection and drive sales.',
    images: ['/images/lifestyle1.png', '/images/lifestyle2.png', '/images/lifestyle3.png'],
  },
];

const Offers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOffer = offersData[activeIndex];

  return (
    <div className="bg-gray-900 text-white px-8 py-16">
      {/* Tabs */}
      <div className="flex space-x-8 text-sm font-medium mb-10">
        {offersData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`pb-1 transition-all ${
              activeIndex === index
                ? 'border-b-2 border-blue-500 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Promotional Offer {index + 1}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {activeOffer.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">{activeOffer.description}</p>
        </div>

        {/* Images Section */}
        <div className="relative flex-1 h-[400px]">
          {activeOffer.images.map((src, i) => {
            const zIndex = 10 + i * 10;
            const left = i * 96; // 0, 96px, 192px
            const top = i === 1 ? 0 : 32; // center image higher
            const width = i === 1 ? 'w-80' : 'w-72';

            return (
              <img
                key={i}
                src={src}
                alt={`Offer ${activeIndex + 1} Image ${i + 1}`}
                className={`absolute ${width} rounded-lg shadow-lg`}
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  zIndex: zIndex,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
