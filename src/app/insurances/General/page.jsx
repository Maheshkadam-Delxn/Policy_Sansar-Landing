import Image from "next/image";
import React from "react";
import HealthImg from "../../../../public/insurance/health-insurance.jpeg";
import VehicleImg from "../../../../public/insurance/car-insurance.jpeg";
import HomeImg from "../../../../public/insurance/home-insurance.jpeg";
import travelImg from "../../../../public/insurance/travel-insurance.jpeg";

const GeneralInsurance = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-center">
        <div className="w-3/4 ">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            General Insurance
          </h1>
          <p className="text-center text-gray-700 mb-4">
            General insurance provides financial protection against unforeseen
            losses, including health issues, vehicle damages, property loss, and
            travel uncertainties. It ensures that individuals and businesses
            remain financially stable during emergencies.
          </p>
          <p className="text-center text-gray-700 mb-8">
            At Policy Sansar, we are committed to providing full support to our
            customers by offering a wide range of general insurance services. We
            help you choose the best policy tailored to your needs while
            ensuring hassle-free claims and excellent customer service.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            img: HealthImg,
            title: "Health Insurance",
            desc: "Covers medical expenses, ensuring financial security during health emergencies.",
          },
          {
            img: VehicleImg,
            title: "Vehicle Insurance",
            desc: "Protects your vehicle from accidents, theft, and damages.",
          },
          {
            img: HomeImg,
            title: "Home Insurance",
            desc: "Covers damages to your home and belongings due to unforeseen events.",
          },
          {
            img: travelImg,
            title: "Travel Insurance",
            desc: "Covers trip cancellations, medical emergencies, and travel-related risks.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative  shadow-md rounded-lg bg-white overflow-hidden group w-1/3  flex flex-col items-center h-80"
          >
            <div className="relative w-full h-3/4 rounded overflow-hidden">
              <Image
                width={1920}
                height={1080}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="w-full h-full absolute inset-0 bg-green-500 bg-opacity-60 flex items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-white font-semibold px-4">{item.desc}</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold h-1/4 text-center w-full flex items-center justify-center ">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralInsurance;
