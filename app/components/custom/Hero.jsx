import Image from "next/image"

function Hero() {
  return (
    <div>
         {/* <div className="pt-[80px] h-screen px-4 md:px-8 flex justify-between items-center">
                <div>
                  <h1 className="text-7xl font-bold">Empowering lives <br /> <span className="text-primary">through innovation</span> </h1>
                  <p className=" my-8 text-[20px]">Your one-stop digital software solutions company. <br /> At Corban Technologies, we thrive on transforming your ideas into cutting-edge digital realities.</p>
                <div className="flex-shrink-0 flex justify-start gap-5">
                    <button className="bg-primary text-white font-semibold px-4 py-3 rounded-full">Start a Project</button>
                    <button className="border border-primary font-semibold px-4 py-3 rounded-full">Get a Quote</button>
                  </div>
                </div>
                <div>
                <Image src='/heroBg3.png' alt='hero' width={600} height={500} className=""/>
                </div>
              </div> */}
        
              <div className="heroBg relative">
                <div className="absolute left-0 right-0 h-screen bg-black/70"></div>
                <div className="absolute pt-[100px] h-[100vh] grid place-content-center w-3/4 left-1/2 -translate-x-1/2">
                  <h1 className="text-6xl text-center font-bold tracking-wide text-white">Empowering lives through <br /> innovation & technology</h1>
                  <p className="text-white text-center my-8 text-[20px]">Your one-stop digital software solutions company. At Corban Technologies, we thrive on<br />transforming your ideas into cutting-edge digital realities.</p>
                  <div className="flex justify-center gap-5">
                    <button className="bg-primary text-white font-semibold px-4 py-3 rounded-full">Start a Project</button>
                    <button className="border text-white font-semibold px-4 py-3 rounded-full">Get a Quote</button>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Hero