import React from 'react';
import Image from 'next/image';
// import LifeImg from '../../../public/insurance/life.png';

const LifeInsurance = () => {
  return (
    <div className="">
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Life Insurance</h1>
        <p className="text-gray-700 mb-4">
          Life insurance is a crucial financial tool that ensures the security and well-being of your loved ones in case of any unforeseen events. It provides financial assistance, covering outstanding debts, daily expenses, and future needs like education and retirement.
        </p>
        <p className="text-gray-700 mb-4">
          At Policy Sansar, we understand the importance of financial stability for your family. Our life insurance plans offer flexible coverage options, ensuring your loved ones are protected at every stage of life. Whether it’s term insurance, whole life coverage, or investment-linked policies, we have you covered.
        </p>
        <p className="text-gray-700 mb-4">
          With our easy policy management, seamless claim process, and expert guidance, we make securing your future simple and hassle-free. Choose Policy Sansar and take the first step toward a financially secure future for your family.
        </p>
      </div>
      
      <div className="w-full md:w-1/3 relative">
        <div className="relative w-full h-64 rounded overflow-hidden group shadow-lg">
          <Image  alt="Life Insurance" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75" />
          <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-white font-semibold px-4">Secure your family’s financial future with our trusted life insurance plans. Get flexible coverage tailored to your needs.</p>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}

    </div>
          <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Life Insurance?</h2>
          <p className="text-gray-700 mb-4">
            Life insurance provides peace of mind, knowing that your family will be financially protected in times of need. It helps cover funeral expenses, outstanding debts, and ensures your loved ones maintain their standard of living.
          </p>
          <p className="text-gray-700 mb-4">
            Our plans are designed to be flexible, allowing you to customize your coverage according to your specific requirements. Whether you're looking for short-term security or long-term investment benefits, Policy Sansar has the right plan for you.
          </p>
          <div className="relative w-full h-64 rounded overflow-hidden group shadow-lg mt-6">
            <Image  alt="Life Insurance Benefits" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75" />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-60 flex items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="text-white font-semibold px-4">Plan for the future today. Secure your legacy with our trusted life insurance solutions.</p>
            </div>
          </div>
        </div>
        </div>
  );
};

export default LifeInsurance;
