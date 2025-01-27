import { ChevronsRight, Sparkles, Telescope } from "lucide-react";

function About() {
  return (
    <div className="px-4 lg:px-8 pt-10 pb-5 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px] mx-auto">
        <div>
          <h1 className="text-primary text-center md:text-left font-bold text-sm mb-2">
            ABOUT US
          </h1>
          <h2 className="text-3xl text-center md:text-left lg:text-4xl font-bold text-primaryDark mb-5">
            More than just a tech company
          </h2>
          <p className="text-center md:text-left lg:text-lg ">
            We are dedicated to empowering businesses and individuals through
            innovative technology solutions. With a focus on understanding our
            clients' unique challenges, we deliver tailored services that drive
            efficiency and foster growth. Our experienced team is committed to
            building lasting partnerships, ensuring that together we navigate the
            digital landscape and achieve success in an ever-evolving world.
          </p>
          <div className="flex justify-center mt-5 md:justify-start">
            <button className="bg-primary rounded-full px-5 py-3 text-white flex justify-between items-center">
              Learn more <ChevronsRight />{" "}
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-5 mb-10 gap-5">
          <div className="md:h-52 border rounded-xl p-3 flex flex-col gap-2 justify-evenly">
            <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
              <Sparkles size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="font-bold lg:text-xl mb-2">Our Mission</h2>
              <p className="lg:text-lg">
                To empower businesses and individuals with innovative technology
                solutions that drive efficiency, enhance productivity, and
                foster growth in a rapidly evolving digital landscape.
              </p>
            </div>
          </div>
          <div className="md:h-52 border rounded-xl p-3 flex flex-col gap-2 justify-evenly">
            <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
              <Telescope size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="font-bold lg:text-xl mb-2">Our Vission</h2>
              <p className="lg:text-lg">
                To be a leading provider of transformative technology solutions,
                enabling a connected and sustainable future for all users, from
                startups to large enterprises.
              </p>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default About;
