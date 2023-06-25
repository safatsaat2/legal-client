import Banner from "./Banner/Banner";
import Consultation from "./Consultation/Consultation";
import Features from "./Features/Features";
import OurLawyers from "./OurLawyers/OurLawyers";
import Testimonial from "./Testimonial/Testimonial";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Features/>
      <WhoWeAre></WhoWeAre>
      <Testimonial></Testimonial>
      <OurLawyers></OurLawyers>
      <Consultation/>
    </div>
  );
};

export default Home;
