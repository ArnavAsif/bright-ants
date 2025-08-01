import ContactSection from "./layouts/ContactSection";
import Hero from "./layouts/Hero";
import OurClient from "./layouts/OurClient";
import WorkingProcess from "./layouts/WorkingProcess";

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <OurClient></OurClient>
            <WorkingProcess></WorkingProcess>
            <ContactSection></ContactSection>
        </div>
    );
};

export default HomePage;