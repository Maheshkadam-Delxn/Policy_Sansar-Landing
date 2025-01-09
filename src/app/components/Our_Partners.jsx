import React from 'react';
import Image from 'next/image';
import AnimatedHeader from './AnimatedHeader';
const Our_Partners = () => {
  
  const partners = [
    // { id: 1, img: '/providers/bajaj.png', name: 'Partner 1' },
    { id: 2, img: '/providers/hdfc.png', name: 'Partner 2' },
    { id: 3, img: '/providers/icic.png', name: 'Partner 3' },
    { id: 4, img: '/providers/kotak-genera..png', name: 'Partner 4' },
    { id: 5, img: '/providers/lic.png', name: 'Partner 5' },
    { id: 6, img: '/providers/kotak.png', name: 'Partner 6' },
    { id: 7, img: '/providers/reliance.png', name: 'Partner 7' },
    { id: 8, img: '/providers/sbi.png', name: 'Partner 8' },
    { id: 9, img: '/providers/tata-aia-life-logo.png', name: 'Partner 9' },
  ];

  return (
    <div className="mt-24 w-full h-[50vh] bg-white flex flex-col items-center justify-center gap-5 overflow-hidden">
     <AnimatedHeader text="Our Partners"/>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex-shrink-0 w-48 text-center bg-white  rounded-2xl"
            >
              <Image
              width={400}
              height={400}
                src={partner.img}
                alt={partner.name}
                className="w-full h-40  rounded-lg  object-contain"
              />
              {/* <h3 className="mt-2 font-medium">{partner.name}</h3> */}
            </div>
          ))}
          {/* Duplicate the content for seamless scrolling */}
          {partners.map((partner) => (
            <div
              key={`duplicate-${partner.id}`}
              className="flex-shrink-0 w-48 text-center bg-white rounded-2xl "
            >
              <Image
                width={400}
                height={400}
                src={partner.img}
                alt={partner.name}
                className="w-full h-40  rounded-lg  object-contain"
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
