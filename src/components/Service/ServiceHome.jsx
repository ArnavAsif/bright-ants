import redBg from '../../assets/bg-we.png'
import blueBg from '../../assets/bg-blue.png'
import graphics from '../../assets/service/Graphics-design.svg'
import digital from '../../assets/service/digital.svg'
import ui from '../../assets/service/ui.svg'
import web from '../../assets/service/web.svg'
import arrow from '../../assets/service/arrow.svg'
import vector from '../../assets/service/Vector.svg'
import wordpress from '../../assets/service/wordpress.svg'
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router'
import ContactSection from '../Home/layouts/PromotionsAndProgress/ContactSection'


const services = [
    {
        title: "Graphics Design",
        icon: graphics,
        link: '/service/graphicsDesign',
        description: "At BrightAnts, we understand that design is more than just aesthetics - it's a powerful tool for communication. Our graphic design services combine creativity, innovation, and functionality to help your brand stand out, convey its message, and connect with its audience.",
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
        link: '/service/digitalMediaDesign',
        description: "In the fast-paced digital world, visuals matter more than ever. At BrightAnts, we craft immersive and engaging digital experiences that elevate your brand across all online platforms. Our expert designers create stunning visuals tailored for web, social media, and digital campaigns that capture attention and drive engagement.From concept to execution, we bring creativity and strategy together to make your brand shine in the digital space. Let's create something remarkable!",
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
        link: '/service/UIandUX',
        description: "Great design isn't just about looks—it's about experience. At BrightAnts, we craft seamless, intuitive, and visually engaging user interfaces that enhance user journeys and drive engagement. Our UI/UX design process blends creativity with usability, ensuring your digital products are not only beautiful but also highly functional.",
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
        link: '/service/webDesign',
        description: "Your website is the digital face of your brand—make it unforgettable. At BrightAnts, we create stunning, responsive, and high-performing websites that captivate visitors and drive results. Our designs blend aesthetics with functionality, ensuring seamless navigation and a flawless user experience across all devices.",
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
        link: '/service/wordPress',
        description: "Powerful, flexible, and easy to manage—WordPress is the backbone of millions of websites worldwide. At BrightAnts, we specialize in crafting custom WordPress solutions that are fast, secure, and built to scale. Whether you need a brand-new site, a redesign, or ongoing support, we've got you covered.",
        items: [
            "Website Design and Development",
            "WooCommerce Solutions",
            "Performance Optimization",
            "Security Audits and Services",
        ],
    },
];

const ServiceHome = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://bright-ants-backend.onrender.com/works')
            .then(res => res.json())
            .then(data => setImages(data.data))
    }, [])
    return (

        <div className='max-w-[1310px] mx-auto pt-[96px] pb-12 relative z-10 overflow-hidden'>
            <div className="hidden lg:block absolute inset-0 max-w-[1173px] mx-auto left-0 right-0 z-0 opacity-50 pointer-events-none">
                <div className="grid grid-cols-2 h-full">
                    <img src={redBg} alt="Red BG" className="w-full object-contain" />
                    <img src={blueBg} alt="Blue BG" className="w-full object-contain" />
                </div>
            </div>
            <div className='relative z-10'>

                <div className='mb-24'>
                    <h1>Our Services </h1>
                    <p className='text-center font-bold mt-[10px]'>{'Home > Services'}</p>
                </div>
                <section className="w-full space-y-8 md:space-y-10 xl:space-y-12">
                    {services.map((service, index) => (
                        <Link key={index} to={service.link}>
                            <div
                                
                                className={`bg-[#1C1A1F] p-6 md:p-8 xl:p-10 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.25)] flex flex-col sm:flex-row gap-6 sm:gap-8 ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Icon */}
                                <div className="flex justify-center items-start flex-shrink-0 mx-auto sm:mx-0">
                                    <img src={service.icon} alt={service.title} className="w-[200px] lg:w-[350px] max-w-full" />
                                </div>

                                {/* Content */}
                                <div>
                                    <div>
                                        <h2 className='text-center lg:text-start'>{service.title}</h2>
                                        <p className="pt-6 pb-12 text-center lg:text-start">{service.description}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-[10px] justify-center sm:justify-start">
                                        {service.items.map((item, i) => (
                                            <div
                                                key={i}
                                                className="rounded-full p-[2px] bg-transparent hover:bg-gradient-to-r hover:from-[#2B70EA] hover:to-[#EA0B24] transition-all duration-300"
                                            >
                                                <button className="bg-[#262628] text-[#FAFAFA] text-[16px] md:text-[16px] xl:text-[18px] px-4 py-2 rounded-full font-mulish hover:bg-white hover:text-[#1C1A1F] transition-all duration-300">
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

            <div className='hidden lg:block my-[148px]'>
                <h1 className='mb-10 text-start'>See Our Work.</h1>
                <Marquee>
                    <div className='flex'>
                        {
                            images.map(image => <img className='w-full h-[389px] object-contain mr-[60px] ' src={`https://bright-ants-backend.onrender.com/files/${image.image}`} />)
                        }
                    </div>
                </Marquee>
            </div>
            <div className='block lg:hidden my-[148px] px-5'>
                <h1 className='mb-10 text-start'>See Our Work.</h1>

                <div className='flex flex-col gap-5'>
                    {
                        images.map(image => <img className='w-full h-[389px] object-contain' src={`https://bright-ants-backend.onrender.com/files/${image.image}`} />)
                    }
                </div>

            </div>
            {/* why bright ant */}
            <div className='flex flex-col lg:flex-row justify-center items-center shadow-[4px_4px_8px_0_rgba(0,0,0,0.25)] py-[30px] lg:py-10 px-[17px] lg:px-[60px] mb-36 '>
                <div className='lg:w-1/2'>
                    <img className='py-16' src={arrow} alt="arrow" />
                </div>
                <div className='lg:w-1/2'>
                    <h1>Why BrightAnts?</h1>
                    <p className='py-[22px] text-center lg:text-start'>We don't just design—we create experiences that captivate, engage, and inspire. Our team of passionate creatives and strategic thinkers is dedicated to delivering high-quality design solutions that set your brand apart. Whether it's branding, web design, digital media, or UI/UX, we bring innovation and expertise to every project.</p>
                    <div className=' flex flex-col justify-center items-center lg:items-start lg:justify-start'>
                        <div className='space-y-[10px]'>
                            <div className='flex gap-2 items-center'>
                                <img src={vector} alt="vector" />
                                <p>Creative Excellence</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={vector} alt="vector" />
                                <p>Tailored Solutions</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={vector} alt="vector" />
                                <p>User-Centered Design</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={vector} alt="vector" />
                                <p>Cutting-Edge Innovation</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <img src={vector} alt="vector" />
                                <p>Reliable & Collaborative</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection/>
        </div>
    );
};

export default ServiceHome;