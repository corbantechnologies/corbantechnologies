"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const bg = windowWidth >= 768 ? "heroBg" : "";
  return (
    <div className="pt-[90px] md:pt-[75px] px-0 lg:px-8 mb-5 md:mb-0">
      <div
        className={`${bg} h-[calc(100vh-90px)] md:h-screen text-black md:text-white relative lg:rounded-lg overflow-hidden`}
      >
        <div className="hidden md:absolute left-0 right-0 h-screen bg-black/20"></div>
        <div className="absolute md:pt-[100px] h-[100vh] md:block md:place-content-center left-4 right-4 md:left-8">
          <div className="flex justify-center md:justify-start">
          <div className="border md:mx-0 mb-3 md:mb-5 p-[2px] w-fit pr-4 rounded-full flex items-center gap-1">
            <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
              <Image
                src="/favi.png"
                width={30}
                height={30}
                className="object-cover"
              />
            </div>
            <span className="text-sm">Tech solutions for everyone</span>
          </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold md:font-bold text-center md:text-left mx-auto md:mx-0 max-w-[320px] md:max-w-[500px] md:tracking-wide">
            Empowering lives through innovation & technology.
          </h1>
          <p className="max-w-[320px] mx-auto md:mx-0 md:max-w-[500px] text-center md:text-left my-4 md:my-5 text-base md:text-[20px]">
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
          <Image
            src="/heroMain.avif"
            alt="person using a laptop"
            width={360}
            height={320}
            className="md:hidden rounded-lg mt-8 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
