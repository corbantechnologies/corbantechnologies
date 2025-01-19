import { ChevronsRight, Sparkles, Telescope } from "lucide-react";

function About() {
  return (
    <div className="px-4 lg:px-8 py-10">
        <div>
          <h1 className="text-primary text-center font-bold text-sm mb-2">
            ABOUT US
          </h1>
          <h2 className="text-3xl text-center lg:text-4xl font-bold text-primaryDark mb-5">
            Where Ideas <br className="block md:hidden"/> Become a Reality
          </h2>
          <p className="text-gray-600 md:text-center lg:text-lg md:w-3/4 md:mx-auto">
            We are dedicated to empowering businesses and individuals through
            innovative technology solutions. With a focus on understanding our
            clients' unique challenges, we deliver tailored services that drive
            efficiency and foster growth. Our experienced team is committed to
            building lasting partnerships, ensuring that together we navigate the
            digital landscape and achieve success in an ever-evolving world.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row my-8 gap-5">
          <div className="md:h-52 border rounded-xl p-3 flex flex-col gap-2 justify-evenly">
            <div className="size-9 bg-slate-100 rounded-full grid place-content-center">
              <Sparkles size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="font-bold lg:text-xl mb-2">Our Mission</h2>
              <p className="lg:text-lg text-gray-600">
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
              <p className="lg:text-lg text-gray-600">
                To be a leading provider of transformative technology solutions,
                enabling a connected and sustainable future for all users, from
                startups to large enterprises.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <button className="bg-primary rounded-full px-5 py-3 text-white flex justify-between items-center">
              Learn more <ChevronsRight />{" "}
            </button>
          </div>
    </div>
  );
}

export default About;
