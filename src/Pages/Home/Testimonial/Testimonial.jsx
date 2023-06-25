import Rating from "react-rating";
import Header from "../../../Component/Header";
import { Icon } from "@iconify/react";

const Testimonial = () => {
  return (
    <div className="bg-[#F3F3F3] -pt-4 pb-9 flex flex-col justify-center items-center">
      <Header
        heading="What Clients Say"
        subHeading="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
      ></Header>
      {/* END OF HEADING */}

      <div className="grid lg:grid-cols-3 gap-x-8 mt-9 mb-20">
        <div className="bg-[#FFFFFF] border border-[#DEDEDE] rounded-sm w-[327px] py-8 px-9">
          <Rating
            className="text-[#F3CD03] mb-5 text-3xl"
            readonly
            placeholderRating={3}
            emptySymbol={<Icon icon="material-symbols:star-outline" />}
            placeholderSymbol={<Icon icon="material-symbols:star" />}
            fullSymbol={<Icon icon="material-symbols:star" />}
          />
          <p className="font-para text-sec-col font-bold mb-5">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="flex">
            <img
              className="w-12"
              src="https://i.ibb.co/L6HY8SW/Ellipse-2.png"
              alt=""
            />
            <div>
              <h4 className="font-bold text-[#D0A144] pl-3">Regina Miles</h4>
              <h4 className="font-bold pl-3">Designer</h4>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] border border-[#DEDEDE] rounded-sm w-[327px] py-8 px-9">
          <Rating
            className="text-[#F3CD03] mb-5 text-3xl"
            readonly
            placeholderRating={3}
            emptySymbol={<Icon icon="material-symbols:star-outline" />}
            placeholderSymbol={<Icon icon="material-symbols:star" />}
            fullSymbol={<Icon icon="material-symbols:star" />}
          />
          <p className="font-para text-sec-col font-bold mb-5">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="flex">
            <img
              className="w-12"
              src="https://i.ibb.co/L6HY8SW/Ellipse-2.png"
              alt=""
            />
            <div>
              <h4 className="font-bold text-[#D0A144] pl-3">Regina Miles</h4>
              <h4 className="font-bold pl-3">Designer</h4>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] border border-[#DEDEDE] rounded-sm w-[327px] py-8 px-9">
          <Rating
            className="text-[#F3CD03] mb-5 text-3xl"
            readonly
            placeholderRating={3}
            emptySymbol={<Icon icon="material-symbols:star-outline" />}
            placeholderSymbol={<Icon icon="material-symbols:star" />}
            fullSymbol={<Icon icon="material-symbols:star" />}
          />
          <p className="font-para text-sec-col font-bold mb-5">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <div className="flex">
            <img
              className="w-12"
              src="https://i.ibb.co/L6HY8SW/Ellipse-2.png"
              alt=""
            />
            <div>
              <h4 className="font-bold text-[#D0A144] pl-3">Regina Miles</h4>
              <h4 className="font-bold pl-3">Designer</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
