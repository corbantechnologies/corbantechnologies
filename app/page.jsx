import About from "./components/custom/About";
import CallToAction from "./components/custom/CallToAction";
import Hero from "./components/custom/Hero";
import Services from "./components/custom/Services";

function Home() {
  return(
    <main className="">
     <Hero/>
     <About/>
     <CallToAction/>
     <Services/>
    </main>
  )
}

export default Home;
