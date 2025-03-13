'use client';

import Reveal from "@/lib/Reveal";
import About from "./components/custom/About";
import Industries from "./components/custom/Industries";
import Contact from "./components/custom/Contact";
import Footer from "./components/custom/Footer";
import Hero from "./components/custom/Hero";
import Services from "./components/custom/Services";
import Work from "./components/custom/Work";

function Home() {
  return(
    <main className="">
      <Reveal>
     <Hero/>
      </Reveal>
      <Reveal>
     <Work/>
      </Reveal>
      <Reveal>
     <Services/>
      </Reveal>
      <Reveal>
     <Industries/>
      </Reveal>
      <Reveal>
     <About/>
      </Reveal>
      <Reveal>
     <Footer/>
      </Reveal>
    </main>
  )
}

export default Home;
