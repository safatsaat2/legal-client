import { Icon } from "@iconify/react";
import Header from "../../../Component/Header";

const OurLawyers = () => {
  return (
    <div className="-pt-4 flex flex-col justify-center items-center mb-20">
      <Header
        heading="Meet Our Attorneys
            "
        subHeading="Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics "
      ></Header>
      <div className="grid grid-cols-3 gap-x-8">
        <div className="card w-[328px] rounded-none bg-base-100 border border-[#EEE]">
          <img src="https://i.ibb.co/BNGFSMq/cover.png" alt="Shoes" />

          <div className=" my-8">
            <h2 className="text-[#252B42] font-header mb-1.5 font-bold text-center">
              Ashley Fletcher
            </h2>
            <p className="text-sec-col mb-1.5 font-bold font-para text-center text-sm">
              LAYER & CEO
            </p>
            <div className="flex gap-x-2.5 justify-center">
              <Icon
                className="text-2xl text-color"
                icon="ant-design:facebook-filled"
              />
              <Icon className="text-2xl text-color" icon="mdi:instagram" />
              <Icon className="text-2xl text-color" icon="mdi:twitter" />
            </div>
          </div>
        </div>

        <div className="card w-[328px] rounded-none bg-base-100 border border-[#EEE]">
          <img src="https://i.ibb.co/zrFPxVV/cover-1.png" alt="Shoes" />

          <div className=" my-8">
            <h2 className="text-[#252B42] font-header mb-1.5 font-bold text-center">
              Rodney Stratton
            </h2>
            <p className="text-sec-col mb-1.5 font-bold font-para text-center text-sm">
              CEO
            </p>
            <div className="flex gap-x-2.5 justify-center">
              <Icon
                className="text-2xl text-color"
                icon="ant-design:facebook-filled"
              />
              <Icon className="text-2xl text-color" icon="mdi:instagram" />
              <Icon className="text-2xl text-color" icon="mdi:twitter" />
            </div>
          </div>
        </div>

        <div className="card w-[328px] rounded-none bg-base-100 border border-[#EEE]">
          <img src="https://i.ibb.co/Jd6hZ1F/cover-2.png" alt="Shoes" />

          <div className=" my-8">
            <h2 className="text-[#252B42] font-header mb-1.5 font-bold text-center">
              Avie Beaton
            </h2>
            <p className="text-sec-col mb-1.5 font-bold font-para text-center text-sm">
              LAYER CIVIL LAW
            </p>
            <div className="flex gap-x-2.5 justify-center">
              <Icon
                className="text-2xl text-color"
                icon="ant-design:facebook-filled"
              />
              <Icon className="text-2xl text-color" icon="mdi:instagram" />
              <Icon className="text-2xl text-color" icon="mdi:twitter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLawyers;
