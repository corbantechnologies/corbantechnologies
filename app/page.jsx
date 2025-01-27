import About from "./components/custom/About";
import CallToAction from "./components/custom/CallToAction";
import Contact from "./components/custom/Contact";
import Footer from "./components/custom/Footer";
import Hero from "./components/custom/Hero";
import Services from "./components/custom/Services";

function Home() {
  return(
    <main className="">
     <Hero/>
     <About/>
     <CallToAction/>
     <Services/>
     <Contact/>
     <Footer/>
    </main>
  )
}

export default Home;
