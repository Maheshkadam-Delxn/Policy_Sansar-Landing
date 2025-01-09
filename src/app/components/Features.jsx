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
    <div className="w-full h-[30vh] bg-blue-600 p-10 flex items-center justify-between gap-5">
      {/* Card 1 */}
      <div ref={ref1} className="w-1/4 h-full bg-white flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-end gap-3">
            <HiOutlineClipboardDocumentCheck className="text-5xl text-[#0040FF] font-bold" />
            <h1 className="text-5xl font-extrabold">
              {inView1 && <CountUp start={0} end={100} duration={2.5} suffix="+" />}
            </h1>
          </div>
          <h1 className="font-bold text-slate-500">Diverse Insurance plans</h1>
        </div>
      </div>
      {/* Card 2 */}
      <div ref={ref2} className="w-1/4 h-full bg-white flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <MdPeopleOutline className="text-5xl text-[#0040FF] font-bold" />
            <h1 className="text-5xl font-extrabold">
              {inView2 && <CountUp start={0} end={100000} duration={2.5} separator="," suffix="+" />}
            </h1>
          </div>
          <h1 className="font-bold text-slate-500">Happy Customers</h1>
        </div>
      </div>
      {/* Card 3 */}
      <div ref={ref3} className="w-1/4 h-full bg-white flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <SlGraph className="text-5xl text-[#0040FF] font-bold" />
            <h1 className="text-5xl font-extrabold">
              {inView3 && <CountUp start={0} end={100} duration={2.5} suffix="%" />}
            </h1>
          </div>
          <h1 className="font-bold text-slate-500">Achievement Percentage</h1>
        </div>
      </div>
      {/* Empty Card (optional for layout) */}
      <div ref={ref4} className="w-1/4 h-full bg-white flex items-center justify-center rounded-lg">
  <div className="flex flex-col items-center gap-3">
    <div className="flex items-center gap-3">
      <TiStarOutline className="text-5xl text-[#0040FF] font-bold" />
      <h1 className="text-5xl font-extrabold">
        {inView4 && <CountUp start={0} end={4.9} duration={2.5} decimals={1} />} {/* Added decimals={1} */}
      </h1>
    </div>
    <h1 className="font-bold text-slate-500">Customer Ratings</h1>
  </div>
</div>

    </div>
  );
};

export default Features;
