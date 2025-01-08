import React from 'react'
import Person1 from "../../../public/icons/person1.png"
import Person2 from "../../../public/icons/person2.png"
import Person3 from "../../../public/icons/person3.png"
import Image from 'next/image'
const Experts = () => {
  return (
    <div className='mt-12 flex flex-col items-center justify-center  gap-24 h-[100vh] '>
      {/* Header Section */}
      <div className="flex items-center justify-center gap-4">
        <hr className="border-gray-300 w-64" />
        <h2 className="text-center font-bold text-2xl">Our Experts</h2>
        <hr className="border-gray-300 w-64" />
      </div>

      {/* Gradient Element */}
      <div className='flex items-center gap-24 '>
       <div className='flex flex-col items-center gap-3'>
       <div className='w-44 h-96 bg-gradient-to-b from-[#5578DF] via-[#4163c9] to-[#C3F6FF]  rounded-full flex flex-col items-end justify-end overflow-hidden'>
            <Image
              src={Person1}
              width={500}
              height={500}
              alt='Expert1'
              className='w-full h-3/4 '
            />
        </div>
        <h1 className='text-2xl font-bold'>Ramesh Deshpande</h1>
        <p className='text-lg font-medium'>CEO</p>
       </div>
       <div className='flex flex-col items-center gap-3'>
       <div className='w-44 h-96 bg-gradient-to-b from-[#5578DF] via-[#4163c9] to-[#C3F6FF]  rounded-full flex flex-col items-end justify-end overflow-hidden'>
        <Image
              src={Person2}
              width={500}
              height={500}
              alt='Expert1'
              className='w-full h-3/4 '
            />
        </div>
        <h1 className='text-2xl font-bold'>Suresh Prabhu</h1>
        <p className='text-lg font-medium'>Head</p>
       </div>
       <div className='flex flex-col items-center gap-3'>
       <div className='w-44 h-96 bg-gradient-to-b from-[#5578DF] via-[#4163c9] to-[#C3F6FF]  rounded-full flex flex-col items-end justify-end overflow-hidden'>
        <Image
              src={Person3}
              width={500}
              height={500}
              alt='Expert1'
              className='w-full h-3/4 '
            />
        </div>
        <h1 className='text-2xl font-bold'>Vishwas Sawant</h1>
        <p className='text-lg font-medium'>HO</p>
       </div>
      </div>
    </div>
  )
}

export default Experts
