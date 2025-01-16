import { ChevronsRight, Sparkles, Telescope } from "lucide-react";
import Image from "next/image";

function About() {
  return (
    <div className="px-4 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between max-w-screen-xl mx-auto gap-4 items-center">
        <div className="h-full rounded-xl overflow-hidden">
          <Image
            src="/heroBg8.jpg"
            alt="hero"
            width={500}
            height={600}
            className="h-full object-cover w-full"
          />
        </div>
        <div className="row-start-1 md:col-start-2 rounded-xl p-3 md:p-5 bg-slate-100">
        <h1 className="text-primary text-center font-bold text-sm mb-2">ABOUT US</h1>
          <h2 className="text-3xl text-center font-bold text-primaryDark mb-5">
            Where Ideas Become a Reality
          </h2>
          <p className="text-gray-600 text-center text-base md:text-lg">
            We are dedicated to empowering businesses and individuals through innovative technology solutions. With a focus on understanding our clients' unique challenges, we deliver tailored services that drive efficiency and foster growth. Our experienced team is committed to building lasting partnerships, ensuring that together we navigate the digital landscape and achieve success in an ever-evolving world.
          </p>
          <div className="flex justify-center">
        <button className="bg-primary rounded-full my-5 px-5 py-3 text-white flex justify-between items-center">
          Learn more <ChevronsRight />{" "}
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-2">
        <div className="bg-white rounded-xl p-3 flex flex-col gap-2 justify-around">
          <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
          <Sparkles size={20} className="text-primary"/>
          </div>
          <div>
          <h2 className="font-bold mb-2">Our Mission</h2>
          <p className="text-[15px] text-gray-600">To empower businesses and individuals with innovative technology solutions that drive efficiency, enhance productivity, and foster growth in a rapidly evolving digital landscape.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-3 flex flex-col gap-2 justify-around">
        <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
        <Telescope size={20} className="text-primary" />
          </div>
          <div>
          <h2 className="font-bold mb-2">Our Vission</h2>
          <p className="text-[15px] text-gray-600">To be a leading provider of transformative technology solutions, enabling a connected and sustainable future for all users, from startups to large enterprises.</p>
          </div>
        </div>
      </div>
        </div>
      </div>      
    </div>
  );
}

export default About;
