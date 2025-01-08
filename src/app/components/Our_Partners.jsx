import React from 'react';

const Our_Partners = () => {
  const partners = [
    { id: 1, img: '/images/partner1.jpg', name: 'Partner 1' },
    { id: 2, img: '/images/partner2.jpg', name: 'Partner 2' },
    { id: 3, img: '/images/partner3.jpg', name: 'Partner 3' },
    { id: 4, img: '/images/partner4.jpg', name: 'Partner 4' },
    { id: 5, img: '/images/partner5.jpg', name: 'Partner 5' },
  ];

  return (
    <div className=" py-8">
      <div className='flex items-center gap-3 justify-center '>
        <hr className='w-64'/>
        <h2 className="text-center font-bold text-2xl mb-6">Our Partners</h2>
        <hr className='w-64'/>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex-shrink-0 w-72 text-center bg-white shadow-2xl"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              {/* <h3 className="mt-2 font-medium">{partner.name}</h3> */}
            </div>
          ))}
          {/* Duplicate the content for seamless scrolling */}
          {partners.map((partner) => (
            <div
              key={`duplicate-${partner.id}`}
              className="flex-shrink-0 w-72 text-center bg-white rounded-lg shadow-2xl"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              {/* <h3 className="mt-2 font-medium">{partner.name}</h3> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_Partners;
