import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Features/>
      <WhoWeAre></WhoWeAre>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
