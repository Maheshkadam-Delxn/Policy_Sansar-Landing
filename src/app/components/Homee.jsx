import React from 'react';
import Image from 'next/image';
import handshakeIcon from '../../../public/icons/handshake.png'; // Import image directly
import family2 from "../../../public/icons/family2.png"
import family from "../../../public/icons/family.png"
import HomeIcon from "../../../public/icons/homelock.png"
import LockIcon from "../../../public/icons/lock.png"
const Homee = () => {
  return (
    <div className='w-full h-[91vh] flex flex-col justify-evenly'>


      {/* HERO SECTION HEADLINE */}
      <div className="w-full  flex flex-col items-center justify-center text-center gap-3">
      <h1 className=" font-bold text-6xl">The Insurance Partner</h1>
      <div className='flex items-center gap-2'><h3 className="text-3xl">You can</h3>
      <Image
        src={handshakeIcon} // Use imported image
        alt="Handshake icon" // Add alt text for accessibility
        width={60}
        height={60}
      />
      <h3 className="text-3xl">Rely On</h3>
     
      </div>
      <h6 className='text-lg text-[#646262] font-semibold'>Your One-Stop Insurance Shop for Life's Essentials</h6>
    </div>


   <div className='w-full flex items-center justify-evenly'>
     {/* FEATURE SECTION CARD */}
     <div className='bg-white w-80 h-96 shadow-2xl rounded-xl p-5 flex flex-col gap-3 relative'>
      <h1 className='text-2xl font-extrabold'>Discover the best options to safeguard your future.</h1>
      <h6 className='text-xs font-bold text-[#646262]'>Empowering Your Future with the Right Coverage.</h6>
     <div className=" w-full h-2/3">
      <Image
        src={family2}
        width={1920}
        height={1000}
        alt='family'
        className='absolute -bottom-2 w-full h-full object-cover '
      /></div>
     
     </div>


{/* ADVERTISMENT COUPLE  */}
<div className='relative'>
    <Image
      src={family}
      width={720}
      height={1080}
      alt='Happy Family'
    />
    <div className='w-80 h-40 bg-white rounded-xl shadow-2xl absolute -top-28 -right-32 flex flex-col items-start justify-evenly pt-3 pl-5'>
      <h1 className='text-2xl font-bold'>My Insurance</h1>
    <div className='flex flex-col items-start gap-3'>
    <div className='flex items-center gap-3'><Image src={HomeIcon} width={24} height={24} alt='HomeIcon'/><h1 className='text-lg'>Home Insurance</h1></div>
      <div className='flex items-center gap-3'><Image src={LockIcon} width={24} height={24} alt='HomeIcon'/><h1 className='text-lg'>Term Life Insurance</h1></div>

    </div>
    </div>
</div>
   </div>
    </div>
  );
};

export default Homee;
