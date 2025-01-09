import React from 'react'
import Image from 'next/image'
import Promote from "../../../public/insurance/promote.png"
const Unique = () => {
  return (
    <div className='w-full h-[100vh] mt-12 flex flex-col items-center gap-14'>
      
      <div className='w-full h-full bg-white flex items-center justify-between p-5'>
        <div className='flex flex-col items-start gap-14 w-2/4'>
            <div className='flex flex-col items-start gap-3'>
            <h1 className='text-4xl font-extrabold '>What makes us Different?</h1>
            <hr className='w-96 h-0.5 bg-slate-200'/>
            </div>
            <div className='flex flex-col items-start gap-4 w-full p-5'>
                <div className='w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center'>
                    <div className='flex items-start gap-6 p-3 '>
                        <div className='bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold'>1</div>
                        <div className='flex flex-col items-start gap-3'>
                            <h1 className='text-lg font-bold'>Real-Time Solutions</h1>
                            <p className='text-sm font-medium'>Seamless support and claim assistance.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-end justify-end'><div className='w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center'>
                    <div className='flex items-start gap-6 p-3 '>
                        <div className='bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold'>2</div>
                        <div className='flex flex-col items-start gap-3'>
                            <h1 className='text-lg font-bold'>Diverse Insurance Products</h1>
                            <p className='text-sm font-medium'>Comprehensive coverage options.</p>
                        </div>
                    </div>
                </div></div>
                <div className='w-96 h-32 bg-white shadow-lg border border-x border-slate-200 rounded-lg flex items-center justify-center'>
                    <div className='flex items-start gap-6 p-3 '>
                        <div className='bg-[#0040FF] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold'>3</div>
                        <div className='flex flex-col items-start gap-3'>
                            <h1 className='text-lg font-bold'>Local Experts</h1>
                            <p className='text-sm font-medium'>Knowledgeable team providing personalized care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/5 h-3/4  '>
            <Image
              src={Promote}
              width={7680} 
              height={4320}
              alt='promote Image'
              className='w-full h-full object-cover rounded-2xl' 
            />
        </div>
      </div>
    </div>
  )
}

export default Unique