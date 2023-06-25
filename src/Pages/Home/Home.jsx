import Banner from "./Banner/Banner";
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
    </div>
  );
};

export default Home;
