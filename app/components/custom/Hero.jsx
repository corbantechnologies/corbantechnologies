'use client';

import Image from "next/image";

function Hero() {
  return (
    <div className='pt-[75px] px-0 md:px-8'>        
              <div className="md:heroBg h-screen text-black md:text-white relative md:rounded-lg overflow-hidden">
                <div className="hidden md:absolute left-0 right-0 h-screen bg-black/20"></div>
                <div className="absolute md:pt-[100px] -top-5 md:top-0 h-[100vh] grid place-content-center left-4 right-4 md:left-8">
                  <div className="border mx-auto md:mx-0 mb-5 p-[2px] pr-4 w-fit rounded-full flex items-center gap-1">
                    <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
                    <Image src='/favi.png' width={30} height={30} className="object-cover"/>
                    </div>
                    <span className="text-sm">Tech solutions for everyone</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-semibold md:font-bold text-center md:text-left max-w-[350px] md:max-w-[500px] md:tracking-wide">Empowering lives through innovation & technology.</h1>
                  <p className="max-w-[350px] md:max-w-[500px] text-center md:text-left my-5 md:my-8 text-base md:text-[20px]">Your one-stop digital software solutions company. At Corban Technologies, we thrive on transforming your ideas into cutting-edge digital realities.</p>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                    <button className="bg-primary text-white font-normal md:font-semibold px-4 py-2 md:py-3 rounded-md md:rounded-full">Start a Project</button>
                    <button className="bg-slate-100 font-normal md:font-semibold px-4 py-2 md:py-3 rounded-md md:rounded-full">Get a Quote</button>
                  </div>
                  <Image src='/heroMain.avif' alt='person using a laptop' width={360} height={360} className="md:hidden rounded-lg mt-8"/>
                </div>
              </div>
    </div>
  )
}

export default Hero