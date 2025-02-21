"use client";

import Image from "next/image";

function Hero() {
  return (
    <div className="pt-5 ">
    <div className="pt-[90px] md:pt-[75px] px-4 lg:px-8 min-h-screen place-content-center md:mb-0 max-w-[1200px] mx-auto">
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <div className="flex justify-center md:justify-start">
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
          <h1 className="text-4xl text-[#1f1f47] md:text-5xl md:font-semibold text-center md:text-left mx-auto md:mx-0 max-w-[320px] md:max-w-[800px] md:tracking-wide ">
            Your trusted partner for guaranteed software delivery.
          </h1>
          <p className="max-w-[320px] text-[#1f1f47] mx-auto md:mx-0 md:max-w-[500px] text-center md:text-left my-4 md:my-5 lg:text-lg">
            Your one-stop digital software solutions company. At Corban
            Technologies, we thrive on transforming your ideas into cutting-edge
            digital realities.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <button className="bg-primary text-white font-normal px-6 py-2 rounded-full">
              Start a Project
            </button>
            <button className="md:text-black font-normal px-4 py-3 rounded-md md:rounded-full">
              Get a Quote
            </button>
          </div>
          </div>
              <Image
                src="/heroMain.avif"
                alt="person using a laptop"
                width={360}
                height={320}
                className="object-cover rounded-md h-full w-full"
              />
          {/* <div className="justify-self-end grid grid-cols-[250px,250px] grid-rows-[200px,200px] gap-3">
            <div className="rounded-tl-full overflow-hidden">
              <Image
                src="/ourHero.jpg"
                alt="person using a laptop"
                width={160}
                height={120}
                className="object-cover rounded-md h-full w-full"
              />
            </div>
            <div className="col-start-2 rounded-md p-4 row-start-1 bg-[#f2f4f7]">
              <span className="block font-bold text-3xl">50+</span>
              <span className="text-xl font-semibold">Active clients</span>
              <p>We build lasting partnerships with our clients</p>
            </div>
            <div className="col-span-2 rounded-md text-white bg-[#0c111d] p-6">
              <p>Drive more Traffic and Sales</p>
              <div className="flex">
                <p>Drive more traffic and product sales</p>
              </div>
            </div>
          </div> */}
        </div>
    </div>
    </div>
  );
}

export default Hero;

