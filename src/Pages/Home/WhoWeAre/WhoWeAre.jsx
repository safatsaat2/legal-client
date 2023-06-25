import { Player } from "video-react";
import Header from "../../../Component/Header";

const WhoWeAre = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 mx-auto w-full">
        <Header
          heading="Who We Are"
          subHeading="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics "
        ></Header>
        <div className=" w-[677px] h-[442px] w-full mx-auto">
          <Player
            playsInline
            poster="https://i.ibb.co/x59TnD7/cover.jpg"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          ></Player>
        </div>
      </div>
      <div className="h-[350px] bg-[#FAFAFA]"></div>
      <div className="h-[350px] bg-color"></div>
    </div>
  );
};

export default WhoWeAre;
