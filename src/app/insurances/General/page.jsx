import React from 'react';

const GeneralInsurance = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">General Insurance</h1>
      <p className="text-center text-gray-700 mb-4">
        General insurance provides financial protection against unforeseen losses, including health issues, vehicle damages, property loss, and travel uncertainties. It ensures that individuals and businesses remain financially stable during emergencies.
      </p>
      <p className="text-center text-gray-700 mb-8">
        At Policy Sansar, we are committed to providing full support to our customers by offering a wide range of general insurance services. We help you choose the best policy tailored to your needs while ensuring hassle-free claims and excellent customer service.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { img: "/images/health-insurance.jpg", title: "Health Insurance", desc: "Covers medical expenses, ensuring financial security during health emergencies." },
          { img: "/images/vehicle-insurance.jpg", title: "Vehicle Insurance", desc: "Protects your vehicle from accidents, theft, and damages." },
          { img: "/images/home-insurance.jpg", title: "Home Insurance", desc: "Covers damages to your home and belongings due to unforeseen events." },
          { img: "/images/travel-insurance.jpg", title: "Travel Insurance", desc: "Covers trip cancellations, medical emergencies, and travel-related risks." }
        ].map((item, index) => (
          <div key={index} className="relative p-4 shadow-md rounded-lg bg-white overflow-hidden group">
            <div className="relative w-full h-48 rounded overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75" />
              <div className="absolute inset-0 bg-green-500 bg-opacity-60 flex items-center justify-center text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="text-white font-semibold px-4">{item.desc}</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-center">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralInsurance;
