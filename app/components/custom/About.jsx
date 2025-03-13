import { ChevronsRight, MoveRight, Sparkles, Telescope } from "lucide-react";

function About() {
  return (
    <div className="bg-slate-50 mb-10">
    <div className="px-4 lg:px-8 py-10 gap-5 max-w-[1200px] mx-auto">
        <div>
          <h2 className="text-2xl text-center font-semibold mb-10 text-primaryDark">
            The partner to bring <br className="md:hidden" /> your vision to life.
          </h2>
          <p className="text-center lg:text-lg text-gray-600 mb-10">
            We are the experts - so you don&apos;t have to be. Our experienced team is committed to
            building lasting partnerships, ensuring that together we navigate the
            digital landscape and achieve success in an ever-evolving world.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="border bg-white rounded-xl py-10 px-6 md:py-10 md:px-10 flex flex-col gap-2 justify-evenly">
              <Sparkles className="text-primary size-6" />
            <div>
              <h2 className="font-bold text-secondaryBlue text-xl mb-2">Our Mission</h2>
              <p className="lg:text-lg text-gray-600">
                To empower businesses and individuals with innovative technology
                solutions that drive efficiency, enhance productivity, and
                foster growth in a rapidly evolving digital landscape.
              </p>
              <button className="flex items-center gap-2 mt-5 text-secondaryBlue text-sm">LEARN MORE <MoveRight size={18} color='#ff7b00' /> </button>
            </div>
          </div>
          <div className="border bg-white rounded-xl p-10 flex flex-col gap-2 justify-evenly">
              <Telescope className="text-primary size-6" />
            <div>
              <h2 className="font-bold text-secondaryBlue text-xl mb-2">Our Vission</h2>
              <p className="lg:text-lg leading-relaxed text-gray-600">
                To be a leading provider of transformative technology solutions,
                enabling a connected and sustainable future for all users, from
                startups to large enterprises.
              </p>
              <button className="flex items-center gap-2 mt-5 text-secondaryBlue text-sm">LEARN MORE <MoveRight size={18} color='#ff7b00' /> </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
            <button className="bg-primary rounded-full px-5 py-3 text-white flex justify-between items-center">
              Learn more <ChevronsRight />{" "}
            </button>
          </div>
    </div>
    </div>
  );
}

export default About;
