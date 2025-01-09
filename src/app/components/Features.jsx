"use client";
import React from "react";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { MdPeopleOutline } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Importing useInView
import { TiStarOutline } from "react-icons/ti";
const Features = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="w-full h-[50vh] bg-[#000f23] p-10 flex flex-col items-center justify-between gap-5">
        <h1 className="text-white text-2xl font-bold">Our Achievments</h1>
   <div className="w-full h-full flex items-center justify-between gap-5">
       {/* Card 1 */}
       <div ref={ref1} className="w-1/4 h-2/3  flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-end gap-3">
            <HiOutlineClipboardDocumentCheck className="text-5xl text-white font-bold" />
            <h1 className="text-5xl font-extrabold text-white">
              {inView1 && <CountUp start={0} end={100} duration={2.5} suffix="+" />}
            </h1>
          </div>
          <h1 className="font-bold text-white">Diverse Insurance plans</h1>
        </div>
      </div>
      <hr className="w-32 rotate-90"/>
      {/* Card 2 */}
      <div ref={ref2} className="w-1/4 h-2/3  flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <MdPeopleOutline className="text-5xl text-white font-bold" />
            <h1 className="text-5xl font-extrabold text-white">
              {inView2 && <CountUp start={0} end={100000} duration={2.5} separator="," suffix="+" />}
            </h1>
          </div>
          <h1 className="font-bold text-white">Happy Customers</h1>
        </div>
      </div>
      <hr className="w-32 rotate-90"/>
      {/* Card 3 */}
      <div ref={ref3} className="w-1/4 h-2/3  flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <SlGraph className="text-5xl text-white font-bold" />
            <h1 className="text-5xl font-extrabold text-white">
              {inView3 && <CountUp start={0} end={100} duration={2.5} suffix="%" />}
            </h1>
          </div>
          <h1 className="font-bold text-white">Achievement Percentage</h1>
        </div>
      </div>
      <hr className="w-32 rotate-90 "/>
      {/* Empty Card (optional for layout) */}
      <div ref={ref4} className="w-1/4 h-2/3  flex items-center justify-center rounded-lg">
  <div className="flex flex-col items-center gap-3">
    <div className="flex items-center gap-3">
      <TiStarOutline className="text-5xl text-white font-bold" />
      <h1 className="text-5xl font-extrabold text-white">
        {inView4 && <CountUp start={0} end={4.9} duration={2.5} decimals={1} />} {/* Added decimals={1} */}
      </h1>
    </div>
    <h1 className="font-bold text-white">Customer Ratings</h1>
  </div>
</div>
   </div>

    </div>
  );
};

export default Features;
