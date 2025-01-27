"use client";

import Image from "next/image";

function Hero() {
  return (
    <div className="bg-slate-50 py-10">
    <div className="pt-[90px] md:pt-[75px] px-4 lg:px-8 min-h-screen place-content-center md:mb-0 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-center">
        <div>
          <div className="flex md:justify-start">
          <div className="border md:mx-0 mb-3 md:mb-5 p-[2px] w-fit pr-4 rounded-full flex items-center gap-1">
            <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
              <Image
                src="/favi.png"
                width={30}
                height={30}
                alt="logo"
                className="object-cover"
              />
            </div>
            <span className="text-sm">Get it done right - the first time</span>
          </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold md:font-bold md:text-left mx-auto md:mx-0 max-w-[320px] md:max-w-[800px] md:tracking-wide ">
            Custom Solutions & Software Development Focused on Your Success.
          </h1>
          {/* <h1 className="text-3xl md:text-5xl font-semibold md:font-bold text-center md:text-left mx-auto md:mx-0 max-w-[320px] md:max-w-[500px] md:tracking-wide">
            Empowering lives through innovation & technology.
          </h1> */}
          <p className="max-w-[320px] mx-auto md:mx-0 md:max-w-[500px] md:text-left my-4 md:my-5 lg:text-lg">
            Your one-stop digital software solutions company. At Corban
            Technologies, we thrive on transforming your ideas into cutting-edge
            digital realities.
          </p>
          
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <button className="bg-primary text-white font-normal px-4 py-3 rounded-md md:rounded-full">
              Start a Project
            </button>
            <button className="bg-slate-100 md:text-black font-normal px-4 py-3 rounded-md md:rounded-full">
              Get a Quote
            </button>
          </div>
          </div>
          <Image
            src="/heroMain.avif"
            alt="person using a laptop"
            width={360}
            height={320}
            className=" rounded-lg mt-8 w-full"
          />
        </div>
    </div>
    </div>
  );
}

export default Hero;

