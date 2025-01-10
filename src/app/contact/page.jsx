import React from 'react';
import Image from 'next/image';
import mailicon from "../../../public/icons/mail.png";
import callicon from "../../../public/icons/call.png";
import AnimatedHeader from '../components/AnimatedHeader';
import callbanner from '../../../public/coverimg/call.png';

const Contact = () => {
  return (
    <div className='overflow-hidden'>
      <div className="w-full h-56 bg-black  relative">
        <Image
          src={callbanner}
          layout="fill"
          objectFit="cover"
          alt="Call Banner"
        />
          <div className="absolute inset-0 bg-black opacity-40 "></div>
        <div className="absolute inset-0 flex items-center pl-16 text-white">
          <h1 className="text-2xl   font-bold">Contact Us</h1>
        </div>
      </div>
    

      <div name="contact" className=' h-auto flex flex-col items-center justify-center gap-12 p-10 bg-white '>
        <AnimatedHeader text="Contact Us" />

        {/* Parent div with responsive design */}
        <div className="flex w-full justify-between gap-3 flex-col md:flex-row">

          {/* Map section */}
          <div className="w-full md:w-1/2 h-[80vh] bg-blue-300 rounded-2xl p-10 flex flex-col items-start justify-between">
            <div className='text-white'>
              <p className='text-3xl font-bold'>Contact Us</p>
              <p className='font-semibold text-sm pt-4'>Let's Build a Conversation - Contact Us Today.</p>
            </div>

            {/* Email and Mobile Number */}
            <div className="md:flex md:items-center md:justify-between md:w-full xxs:flex-col xxs:items-start p-2 ">
              <div className="flex items-center justify-center gap-2 ">
                <Image
                  width={25}
                  height={25}
                  src={mailicon}
                  alt="Email Icon"
                  className="w-full h-full rounded-lg object-contain"
                />
                <p>po.policysansar.com</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Image
                  width={25}
                  height={25}
                  src={callicon}
                  alt="Phone Icon"
                  className="w-full h-full rounded-lg object-contain"
                />
                <p className='flex'>
                  <span>+91{" "}</span> <span>9922949596</span>
                  </p>
              </div>
            </div>

            {/* Map Location of Thane */}
            <div className='w-full h-4/6 relative'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8225589217414!2d72.97050121490196!3d19.08693748708432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90f0eeb62eb%3A0xc2d676bcb110db4d!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1632846857241!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Form Section */}
          <div className='bg-white w-full md:w-1/2 h-auto p-8 flex flex-col items-start justify-center gap-12 rounded-2xl border border-x border-slate-500'>
            <p className='text-2xl font-bold mb-4'>Get in Touch</p>
            <form className='flex flex-col gap-4 w-full'>
              <input type='text' placeholder='Your Name' className='p-3 rounded-2xl border border-x border-slate-500 outline-none' required />
              <input type='email' placeholder='Your Email' className='p-3 rounded-2xl border border-x border-slate-500 outline-none' required />
              <input type='number' placeholder='Your Mobile No' className='p-3 rounded-2xl border border-x border-slate-500 outline-none' required />
              <textarea placeholder='Your Message' className='p-3 rounded-2xl border border-x border-slate-500 outline-none' rows='5' required></textarea>
              <button type='submit' className='bg-blue-500 text-white font-bold p-3 rounded-2xl border-x-2 border-y-2 border-blue-500 hover:bg-white hover:border-x-2 hover:border-y-2 hover:border-blue-500 hover:text-blue-500 transition-all ease-in-out duration-700 hover:text-white cursor-pointer'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
