const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[#FAFAFA]">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-7xl w-full my-5 font-bold leading-[65px] text-color font-header">
            Help to reclaim your life <br /> and freedom
          </h1>
          <p className="py-6 w-1/2 mx-auto mb-5 font-para leading-7  text-lg text-sec-col">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </p>
          <div>
            <button className="btn bg-[#FAFAFA] border-2 font-bold  text-sm px-9 py-3 mr-1.5 text-btn border-btn hover:bg-btn hover:text-[#FAFAFA] rounded-full">
              Get Quote Now
            </button>
            <button className="btn bg-[#FAFAFA] border-2 font-bold text-sm px-9 py-3 ml-1.5 text-btn border-btn hover:bg-btn hover:text-[#FAFAFA] rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
