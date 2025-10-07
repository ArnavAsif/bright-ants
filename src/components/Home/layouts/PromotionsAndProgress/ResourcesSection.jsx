import tiger from "../../../../assets/resorurces/tiger.svg";

const ResourcesSection = () => {
  return (
    <section className="bg-[#0B0A29] text-white max-w-[1340px] mx-auto rounded-lg overflow-hidden my-[96px] md:my-[148px] px-5 sm:px-10 md:px-0 py-7">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
        {/* Text Content */}
        <div className="lg:w-1/2 md:pl-[60px] w-full">
          <h2 className="text-center md:text-start text-[28px] sm:text-3xl md:text-6xl font-extrabold font-figtree tracking-[-3%] leading-tight">
            Our Resources
          </h2>
          <p className="text-[#D8D8D8] text-sm sm:text-base md:text-lg font-mulish pt-4 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Explore a collection of valuable insights, guides, and tools
            designed to help you stay ahead in the creative and digital world.
            From design tips to industry trends, our resources empower you with
            knowledge to grow your brand effectively.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:flex md:gap-12 md:pl-0 gap-y-6 gap-x-8 justify-center md:justify-start max-w-xl mx-auto md:mx-0">
            {[
              { number: 97, label: "PageSpeed score" },
              { number: 37, label: "Less CSS and JS code files" },
              { number: 92, label: "Improved load times" },
              { number: 37, label: "Optimized assets" },
            ].map(({ number, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start w-full sm:w-auto"
              >
                <div className="flex items-baseline gap-1">
                  <p className="text-5xl sm:text-6xl font-extrabold leading-none">
                    {number}
                  </p>
                  <span className="text-xl sm:text-2xl">%</span>
                </div>
                <p className="text-sm sm:text-base text-[#FAFAFA] font-semibold tracking-[-1px] mt-1 text-center md:text-left max-w-[160px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tiger Image */}
        <div className="hidden md:block lg:w-1/2 w-full">
          <img
            src={tiger}
            alt="Geometric tiger"
            className="w-full h-auto scale-110 object-cover rounded-r-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
