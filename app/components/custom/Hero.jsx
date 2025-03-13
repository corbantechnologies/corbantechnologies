"use client";

import Image from "next/image";

function Hero() {
  return (
    <div className="pt-5 pb-5">
    <div className="pt-[75px] px-4 lg:px-8 min-h-screen place-content-center md:mb-0 max-w-[1200px] mx-auto">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <div className="flex justify-center md:justify-start">
          </div>
          <h1 className="text-3xl text-[#1f1f47] md:text-5xl font-semibold text-center md:text-left mx-auto md:mx-0 md:max-w-[800px] md:tracking-wide ">
            Your trusted partner for software delivery.
          </h1>
          <p className="max-w-[320px] text-[#1f1f47] mx-auto md:mx-0 md:max-w-[500px] text-center md:text-left my-4 md:my-5 lg:text-lg">
          We enable businesses to achieve their goals through cutting-edge technology and tailored software solutions.
          </p>
          <div className="flex max-w-[320px] md:max-w-[500px] justify-center mb-10 md:mb-0">
            <button className="bg-primary text-white font-normal px-6 py-2 rounded-full">
              Talk to us
            </button>
          </div>
          </div>
              <Image
                src="/heroBg3.png"
                alt="company"
                width={360}
                height={320}
                className="object-cover rounded-md h-full w-full"
              />
        </div>
    </div>
    <div className="bg-orange-50 mt-10 mb-10 md:mb-20 py-10 px-4 md:px-10 rounded-xl max-w-screen-lg mx-4 md:mx-auto">
      <p className="text-center leading-relaxed text-secondaryBlue font-semibold text-2xl mb-16 mx-auto">
      We help visionary organizations turn their ideas into reality <span className="text-primary">with our innovative and scalable software solutions.</span>
      </p>
      <ul className="flex flex-wrap justify-center items-center gap-8">
        <li>
          <img src="/nafsiresetlogo.png" alt="nafsi reset logo" className="max-w-32"/>
        </li>
        <li className='text-3xl font-bold'>StayHub</li>
        <li>
          <img src="/dukalogo.png" alt="nafsi reset logo" className="max-w-28"/>
        </li>
        <li className='text-3xl text-green-700 font-bold'>AgriBooks</li>
        <li>
          <img src="/suppcologo.png" alt="nafsi reset logo" className="max-w-28"/>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Hero;

