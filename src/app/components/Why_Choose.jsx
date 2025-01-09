import React from "react";
import Image from "next/image";
import Family3 from "../../../public/icons/family3.png";
import Bottom1LeftIcon from "../../../public/icons/re.png"
import MidRightIcon from "../../../public/icons/midRightIcon.png"
import MidLeftIcon from "../../../public/icons/MidLeftIcon.png"
import BottomRightIcon from "../../../public/icons/BottomRightIcon.png"
import TopIcon from "../../../public/icons/TopIcon.png"
import AnimatedHeader from "./AnimatedHeader";
const Why_Choose = () => {
  return (
    <div className="mt-12 w-full h-[100vh] relative ">
     <AnimatedHeader text="Why Choose Us"/>
      <div className=" flex flex-col justify-between w-full h-[95.5vh]">
        <div className="w-full flex items-center justify-center">
          <div className="w-80 h-40 bg-white shadow-2xl translate-y-16 rounded-2xl p-3 flex flex-col justify-between ">
          <h1 className="text-xl font-bold">Customized Recommendations Tailored to Your Needs</h1>
          <div className="w-full flex items-end justify-end"><Image src={TopIcon} width={50} height={50} alt="Icon4"/></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-80 h-32 bg-white shadow-2xl translate-x-16 rounded-2xl p-3 flex flex-col justify-between">
          <h1 className="text-xl font-bold">Affordable Premiums</h1>
          <div className="w-full flex items-end justify-end"><Image src={MidLeftIcon} width={50} height={50} alt="Icon4"/></div>
          </div>
          <div className="w-80 h-32 bg-white shadow-2xl -translate-x-16 rounded-2xl p-3 flex flex-col justify-between">
          <h1 className="text-xl font-bold">Easy and Secure claim process</h1>
          <div className="w-full flex items-end justify-end"><Image src={MidRightIcon} width={50} height={50} alt="Icon4"/></div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between ">
          <div className="w-80 h-32 bg-white shadow-2xl  translate-x-8 rounded-2xl p-3 flex flex-col justify-between">
            <h1 className="text-xl font-bold">Compare multiple Policies instantly</h1>
            <div className="w-full flex items-end justify-end"><Image src={Bottom1LeftIcon} width={50} height={50} alt="Icon4"/></div>
          </div>
          <div className="w-80 h-32 bg-white shadow-2xl -translate-x-8 rounded-2xl p-3 flex flex-col justify-between">
          <h1 className="text-xl font-bold">Expert Customer Support</h1>
          <div className="w-full flex items-end justify-end"><Image src={BottomRightIcon} width={50} height={50} alt="Icon4"/></div>
          </div>
        </div>
      </div>
      <Image
  src={Family3}
  alt="FamilyIcon"
  width={1920}
  height={1080}
  className="w-fit h-2/4 object-contain bottom-0 absolute left-1/2 translate-x-[-50%] border-none shadow-[10px_10px_50px_rgba(0,0,0,0.3)] rounded-3xl"
/>


    </div>
  );
};

export default Why_Choose;
