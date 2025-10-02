import graphics from "../../../assets/team-img/gd.svg";
import digital from "../../../assets/team-img/dm.svg";
import ui from "../../../assets/team-img/ui.svg";
import web from "../../../assets/team-img/web.svg";
import wordpress from "../../../assets/team-img/wordpress.svg";
import idea from "../../../assets/team-img/Idea.svg";
import Partners from "./Partners";
import { Link } from "react-router";

const services = [
  {
    title: "Graphics Design",
    icon: graphics,
    link: "/service/graphicsDesign",
    items: [
      "Logo design",
      "Branding and identity design",
      "Digital and print advertisements",
      "Packaging design",
      "Print collateral (business cards, brochures, posters)",
    ],
  },
  {
    title: "Digital Media Design",
    icon: digital,
    link: "/service/digitalMediaDesign",
    items: [
      "Social media graphics",
      "Digital marketing materials",
      "Email marketing templates",
      "Banner ads and display ads",
      "Infographics and data visualizations",
    ],
  },
  {
    title: "UI and UX",
    icon: ui,
    link: "/service/UIandUX",
    items: [
      "Wireframing and prototyping",
      "Interface for web and mobile applications",
      "Interaction design",
      "User experience research and testing",
    ],
  },
  {
    title: "Web Design",
    icon: web,
    link: "/service/webDesign",
    items: [
      "Partial or full Website design",
      "Design audit",
      "UX optimization",
      "User journey design for modules and widgets",
      "Creative strategy development",
    ],
  },
  {
    title: "WordPress",
    icon: wordpress,
    link: "/service/wordPress",
    items: [
      "Website Design and Development",
      "WooCommerce Solutions",
      "Performance Optimization",
      "Security Audits and Services",
    ],
  },
];

const Teams = () => {
  return (
    <div className="relative max-w-[1344px] mx-auto">
      <div className="relative w-full mx-auto py-16 flex flex-col lg:flex-row lg:justify-between gap-10 md:gap-16 lg:gap-[124px] z-20">
        {/* Left Column */}
        <div className="w-full lg:w-[461px] lg:sticky lg:top-32 lg:self-start">
          <div className="max-w-[480px] w-full text-center lg:text-start mx-auto lg:mx-0">
            <h1 className="font-figtree font-extrabold lg:text-left text-[34px] md:text-[44px] xl:text-[54px] 2xl:text-[64px] leading-[120%] tracking-[-0.03em] text-white">
              What Our <br /> Team Offers:
            </h1>

            <p className="font-mulish text-[18px] md:text-[20px] xl:text-[22px] text-[#D8D8D8] mt-6 mb-8 leading-[28px] md:leading-[30px]">
              As your design partner, we offer tailored, cost-efficient design
              solutions whether for ongoing support or specific projects so you
              can focus on your priorities while we manage the creative side.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#EA1B26] hover:bg-white hover:text-[#EA1B26] text-white px-[25px] py-[10px] font-bold text-lg transition-all duration-200"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Right Column */}
        <section className="w-full lg:w-[725px]">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <div className="bg-[#1C1A1F] p-6 md:p-8 xl:p-10 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.25)] flex flex-col sm:flex-row gap-6 sm:gap-8 mb-[30px] hover:bg-[#191B24]">
                {/* Icon */}
                <div className="w-[80px] flex justify-center items-start flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full max-w-[80px]"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[28px] md:text-[32px] xl:text-[36px] font-extrabold text-[#FAFAFA] font-figtree text-center sm:text-left">
                    {service.title}
                  </h3>

                  <div className="flex flex-wrap gap-[10px] mt-4 justify-center sm:justify-start">
                    {service.items.map((item, i) => (
                      <div
                        key={i}
                        className="relative rounded-full p-[2px] group"
                      >
                        {/* Gradient border layer */}
                        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#2B70EA] to-[#EA0B24] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                        {/* Inner button (content always above) */}
                        <button className="relative bg-[#262628] text-[#FAFAFA] text-[16px] md:text-[16px] xl:text-[18px] px-4 py-2 rounded-full font-mulish transition-all duration-700 ease-in-out">
                          {item}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>

      {/* Background Illustration (Idea Image) */}
      <div className="hidden lg:block absolute bottom-[500px] pl-16">
        <img src={idea} alt="Idea" />
      </div>

      {/* Partners Section */}
      <div className="relative z-20">
        <Partners />
      </div>
    </div>
  );
};

export default Teams;
