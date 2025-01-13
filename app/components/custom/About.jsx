import { ChevronsRight } from "lucide-react"
import Image from "next/image"

function About() {
  return (
    <div className="px-4 md:px-8 py-10">
    <div className="grid grid-cols-2 justify-between gap-5 items-center">
        <div>
        <h1 className="text-primary font-bold text-lg">Who we are</h1>
        <h2 className="text-7xl font-bold text-primaryDark my-5">We are more than just a company</h2>
      <p className="text-[#696969] text-lg">We are architects of innovation, trailblazers of technological advancement, and partners in your success. As a dynamic and forward-thinking organization, we are dedicated to reshaping industries and empowering businesses to navigate the digital age with confidence.</p>
        </div>
        <Image src='/heroBg7.jpg' alt='hero' width={600} height={500} className=""/>
    </div>
    <div className="rounded-xl p-5 ">
    <p className="my-5 text-5xl leading-[1.15] text-[#696969]">
    ❝ We are committed to staying at the forefront of technological innovation, constantly exploring emerging trends and incorporating the latest advancements into our solutions.❞</p>
    </div>
    <div className="flex justify-center">
      <button className="bg-primary rounded-full px-5 py-3 text-white flex justify-between items-center">Learn more <ChevronsRight /> </button>
    </div>
    </div>
  )
}

export default About