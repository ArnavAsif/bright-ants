import Hero from "./layouts/Hero";
import OurClient from "./layouts/OurClient";
import EveryPromotions from "./layouts/PromotionsAndProgress/EveryPromotions";
import Teams from "./layouts/Teams";


const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <OurClient></OurClient>
            <Teams></Teams>
            <EveryPromotions></EveryPromotions>
        </div>
    );
};

export default HomePage;