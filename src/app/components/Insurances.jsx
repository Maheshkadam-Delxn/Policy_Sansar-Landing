import React from 'react'
import Image from 'next/image'
import GeneralImg from "../../../public/insurance/general.png"
import HealthImg from "../../../public/insurance/health.png"
import LifeImg from "../../../public/insurance/life.png"
import GeneralIcon from "../../../public/icons/generalIcon.png"
import HealthIcon from "../../../public/icons/healthIcon.png"
import LifeIcon from "../../../public/icons/lifeIcon.png"

const Insurances = () => {
  return (
    <div className='mt-12 flex flex-col gap-10'>
      <div className="flex items-center gap-4">
        <hr className="flex-grow border-gray-300 w-32" />
        <h2 className="text-center font-bold text-2xl">Explore our Insurance Plans</h2>
        <hr className="flex-grow border-gray-300 w-64" />
      </div>
      <div className='flex items-center justify-center w-full gap-10 p-5'>
        {/* General Insurance Card */}
        <div className='relative w-1/4 bg-white rounded-lg h-96 shadow-lg border border-x border-y border-slate-200 overflow-hidden group'>
          <Image
              src={GeneralImg}
              alt='General Insurance'
              width={1440}
              height={1080}
              className='w-full h-3/4 object-cover rounded-t-lg group-hover:opacity-50'
          />
          <div className='w-full flex flex-col items-center gap-2 p-3 h-1/4'>
            <div className='w-full flex items-center gap-3 justify-center h-full '>
              <Image 
                src={GeneralIcon}
                width={30}
                height={30}
                alt='General Icon'
              />
              <h1 className='text-xl font-bold'>General Insurance</h1>
            </div>
          </div>
          {/* Description on Hover */}
          <div className='w-full h-3/4 absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 transition-all duration-500 ease-in-out'>
            <p className='text-white font-semibold text-lg'>
              Protect your assets with comprehensive general insurance plans covering various needs and circumstances.
            </p>
          </div>
        </div>

        {/* Health Insurance Card */}
        <div className='relative w-1/4 bg-white rounded-lg h-96 shadow-lg border border-x border-y border-slate-200 overflow-hidden group flex flex-col justify-between'>
          <Image
              src={HealthImg}
              alt='Health Insurance'
              width={1440}
              height={1080}
              className='w-full h-3/4 object-cover rounded-t-lg group-hover:opacity-50'
          />
          <div className='w-full flex flex-col items-center gap-2 p-3 h-1/4'>
            <div className='w-full flex items-center gap-3 justify-center h-full '>
              <Image 
                src={HealthIcon}
                width={30}
                height={30}
                alt='General Icon'
              />
              <h1 className='text-xl font-bold'>Health Insurance</h1>
            </div>
          </div>
          {/* Description on Hover */}
          <div className='w-full h-3/4 absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 transition-all duration-500 ease-in-out'>
            <p className='text-white font-semibold text-lg'>
              Get access to the best healthcare services with our health insurance plans tailored for your needs.
            </p>
          </div>
        </div>

        {/* Life Insurance Card */}
        <div className='relative w-1/4 bg-white rounded-lg h-96 shadow-lg border border-x border-y border-slate-200 overflow-hidden group'>
          <Image
              src={LifeImg}
              alt='Life Insurance'
              width={1440}
              height={1080}
              className='w-full h-3/4 object-cover rounded-t-lg group-hover:opacity-50'
          />
         <div className='w-full flex flex-col items-center gap-2 p-3 h-1/4'>
            <div className='w-full flex items-center gap-3 justify-center h-full '>
              <Image 
                src={LifeIcon}
                width={30}
                height={30}
                alt='General Icon'
              />
              <h1 className='text-xl font-bold'>Life Insurance</h1>
            </div>
          </div>
          {/* Description on Hover */}
          <div className='w-full h-3/4 absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-3 transition-all duration-500 ease-in-out'>
            <p className='text-white font-semibold text-lg'>
              Secure your future and the well-being of your loved ones with our life insurance plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insurances
