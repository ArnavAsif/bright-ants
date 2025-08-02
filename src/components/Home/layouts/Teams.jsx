import graphics from '../../../assets/team-img/gd.svg';
import digital from '../../../assets/team-img/dm.svg';
import ui from '../../../assets/team-img/ui.svg';
import web from '../../../assets/team-img/web.svg';
import wordpress from '../../../assets/team-img/wordpress.svg';
import Partners from './Partners';
import idea from '../../../assets/team-img/Idea.svg'
import { Link } from 'react-router';

const services = [
    {
        title: "Graphics Design",
        icon: graphics,
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
        <div className='relative'>
            <div className="relative max-w-[1310px] w-full mx-auto py-16 px-4 flex flex-col lg:flex-row gap-10 z-20">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-20 lg:self-start">
                    <div className="max-w-[461px] w-full text-center lg:text-start">
                        <h1 className="font-figtree font-extrabold text-[34px]/[100%] md:text-6xl md:leading-[64px] tracking-[-3%] text-white">
                            What Our <br /> Team Offers:
                        </h1>
                        <p className="font-mulish text-[18px] leading-[26px] text-[#D8D8D8] my-[30px]">
                            As your design partner, we offer tailored, cost-efficient design solutions
                            whether for ongoing support or specific projects so you can focus on your
                            priorities while we manage the creative side.
                        </p>
                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-[#EA1B26] hover:bg-white hover:text-[#EA1B26] text-white px-[25px] py-[9px] font-bold text-lg transition-all duration-200"
                        >
                            Get a Quote
                        </button>
                    </div>
                </div>

                {/* Right Column */}
                <section className="w-full lg:w-1/2 z-20">
                    {services.map((service, index) => (
                        <Link key={index}>
                            <div className="bg-[#1C1A1F] p-6 gap-[30px] flex flex-col sm:flex-row rounded-lg shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] mb-[30px]">
                                {/* Icon */}
                                <div className="w-[80px] flex justify-center items-center flex-shrink-0 mx-auto sm:mx-0">
                                    <img src={service.icon} alt={service.title} className="w-full" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-[30px] font-extrabold text-[#FAFAFA] font-figtree mt-4 sm:mt-0 text-center sm:text-left">
                                        {service.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-[10px] mt-4 justify-center sm:justify-start">
                                        {service.items.map((item, i) => (
                                            <div className="inline-block rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#2B70EA] hover:to-[#EA0B24] transition-all duration-300">
                                                <button
                                                    key={i}
                                                    className="bg-[#262628] text-[#FAFAFA] text-[18px]/[100%] tracking-[0%] px-4 py-2 rounded-full font-mulish hover:bg-white hover:text-[#1C1A1F] w-full h-full transition-all duration-300"
                                                >
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
            <div className='hidden lg:block absolute bottom-[500px] pl-16'>
                <img src={idea} alt="" />
            </div>
            <div className='relative z-20'>
                <Partners />
            </div>



        </div>
    );
};


export default Teams;
