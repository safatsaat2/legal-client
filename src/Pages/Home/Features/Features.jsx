import { Icon } from "@iconify/react";
import Header from "../../../Component/Header";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mx-7">
      <Header
        heading="Every Client Matters"
        subHeading="Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics "
      />
      <div className="grid grid-cols-3 gap-8">
        <div className="border-2 border-[#E8E8E8] rounded-md  w-80">
          <div className="mx-10 my-9">
            <div className="flex items-center gap-2">
              <Icon className="text-5xl" icon="pepicons-pencil:hammer-claw" />
              <h4 className=" text-lg font-header font-bold">Family Law</h4>
            </div>
            <p className="text-sec-col mt-4">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
        <div className="border-2 border-[#E8E8E8] rounded-md  w-80">
          <div className="mx-10 my-9">
            <div className="flex items-center gap-2">
              <Icon
                className="text-5xl"
                icon="streamline:legal-justice-hammer-hammer-work-legal-mallet-office-company-gavel-justice-judge-arbitration-court"
              />
              <h4 className=" text-lg font-header font-bold">Business Law</h4>
            </div>
            <p className="text-sec-col mt-4">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
        <div className="border-2 border-[#E8E8E8] rounded-md  w-80">
          <div className="mx-10 my-9">
            <div className="flex items-center gap-2">
              <Icon
                className="text-5xl"
                icon="streamline:legal-justice-scale-1-office-work-legal-scale-justice-company-arbitration-balance-court"
              />
              <h4 className=" text-lg font-header font-bold">
                Trust & Estates
              </h4>
            </div>
            <p className="text-sec-col mt-4">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
        <div className="border-2 border-[#E8E8E8] rounded-md  w-80">
          <div className="mx-10 my-9">
            <div className="flex items-center gap-2">
              <Icon className="text-5xl" icon="fluent:textbox-16-regular" />
              <h4 className=" text-lg font-header font-bold">
                Civil Litigation
              </h4>
            </div>
            <p className="text-sec-col mt-4">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
        <div className="border-2 border-[#E8E8E8] rounded-md  w-80">
          <div className="mx-10 my-9">
            <div className="flex items-center gap-2">
              <Icon className="text-5xl" icon="mdi:legal" />
              <h4 className=" text-lg font-header font-bold">
                Trust & Estates
              </h4>
            </div>
            <p className="text-sec-col mt-4">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
        <div className="border-2 border-[#E8E8E8] rounded-md  w-80">
          <div className="mx-10 my-9">
            <div className="flex items-center gap-2">
              <Icon className="text-5xl" icon="pepicons-pencil:hammer-claw" />
              <h4 className=" text-lg font-header font-bold">Family Law</h4>
            </div>
            <p className="text-sec-col mt-4">
              the quick fox jumps over the lazy dog the quick fox jumps over the
              lazy dog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
