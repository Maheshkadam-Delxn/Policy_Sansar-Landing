import React from 'react';
import Image from 'next/image';
// import HealthImg from '../../../public/insurance/health.png';

const HealthInsurance = () => {
  return (
    <div className="">
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Health Insurance</h1>
        <p className="text-gray-700 mb-4">
          Health insurance provides financial protection against high medical costs, ensuring you and your family receive quality healthcare without financial burden. It covers hospitalization, treatments, and preventive care, safeguarding your well-being.
        </p>
        <p className="text-gray-700 mb-4">
          At Policy Sansar, we offer comprehensive health insurance plans tailored to your needs. Our policies cover a range of medical expenses, including surgeries, doctor consultations, diagnostic tests, and post-hospitalization care.
        </p>
        <p className="text-gray-700 mb-4">
          With an extensive hospital network and a seamless claim process, we ensure hassle-free medical assistance whenever you need it the most. Choose Policy Sansar and prioritize your health today.
        </p>
      </div>
      
      <div className="w-full md:w-1/3 relative">
        <div className="relative w-full h-64 rounded overflow-hidden group shadow-lg">
          <Image  alt="Health Insurance" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75" />
          <div className="absolute inset-0 bg-green-500 bg-opacity-60 flex items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-white font-semibold px-4">Protect your health and finances with our tailored health insurance plans. Get the best medical care without financial stress.</p>
          </div>
        </div>
      </div>

      
    </div>
    {/* Additional Information Section */}
    <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Health Insurance?</h2>
        <p className="text-gray-700 mb-4">
          Health insurance not only covers hospitalization expenses but also offers preventive healthcare benefits, including routine check-ups and vaccinations. It ensures you receive timely medical attention without worrying about the costs.
        </p>
        <p className="text-gray-700 mb-4">
          Our plans are designed to suit individuals, families, and senior citizens, providing customized coverage as per your needs. Enjoy cashless treatments and extensive medical benefits with Policy Sansar.
        </p>
        <div className="relative w-full h-64 rounded overflow-hidden group shadow-lg mt-6">
          <Image  alt="Health Insurance Benefits" layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75" />
          <div className="absolute inset-0 bg-green-500 bg-opacity-60 flex items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-white font-semibold px-4">Stay worry-free with our extensive health insurance benefits. Secure your health today.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
