import promoAdd from '../../../../assets/promotional-offers/promo-add.svg'
import promoLogo from '../../../../assets/promotional-offers/promotion-logo.svg'

const PromoBlock = ({ reverse = false }) => (
  <div className={`rounded-[12px] flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8 p-5 lg:p-[58px] ${reverse ? 'bg-[#0D0D11]' : ''}`}>
    {/* Image */}
    <div className="lg:w-[540px] w-full px-4 md:px-0 py-6">
      <img
        src={promoAdd}
        alt="Social Media Posts / Ads"
        className="w-full object-cover rounded-md"
      />
    </div>

    {/* Text Content */}
    <div className="lg:w-1/2 w-full text-center lg:text-left">
      <h2 className="text-white text-3xl md:text-5xl lg:text-6xl tracking-[-0.03em] font-extrabold font-figtree leading-tight">
        Get your <br />
        <span className="text-white">Amazon sell lifted</span><br />
        70% with robusting <br />
        feature images
      </h2>

      <p className="font-mulish text-base md:text-lg leading-relaxed pt-5 pb-6 text-[#D8D8D8]">
        Stand out in the crowded Amazon marketplace with high-quality,
        conversion-driven product images. We create visually compelling and
        professionally enhanced feature images that attract buyers,
        build trust, and drive more sales.
      </p>

      <button
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-[#EA1B26] hover:bg-white hover:text-[#EA1B26] text-white px-6 py-2.5 font-bold text-lg transition-all duration-200"
      >
        Get a Quote
      </button>
    </div>
  </div>
);

const PromoSection = () => {
  return (
    <section className="container mx-auto px-4 text-white rounded-lg mb-[100px]">
      {/* Logo */}
      <div className="flex justify-center items-center mb-10">
        <img className="w-[80%] lg:w-auto" src={promoLogo} alt="Promo Logo" />
      </div>

      {/* Blocks */}
      <PromoBlock reverse={false} />
      <PromoBlock reverse={true} />
      <PromoBlock reverse={false} />
      <PromoBlock reverse={true} />
    </section>
  );
};

export default PromoSection;
