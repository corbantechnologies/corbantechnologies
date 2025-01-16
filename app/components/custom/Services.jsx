import { ArrowDownRight, Bot, ChartPie, ChevronsRight, Cloud, Globe, LockKeyhole, Smartphone } from "lucide-react"

const cards1 = [
    {id:1, title:'Web Development', desc:'Custom web development services that create responsive, user-friendly websites tailored to enhance your online presence and drive engagement.',icon:<Globe />},
    {id:2, title:'Mobile Development', desc:'Expert mobile app development that delivers intuitive, high-performance applications for iOS and Android, designed to meet your business needs and engage users.',icon:<Smartphone />},
    {id:3, title:'Cyber Security Solutions', desc:'Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats.',icon:<LockKeyhole />},
]
const cards2 = [
    {id:1, title:'Artificial Intelligence', desc:'We provide tailored AI solutions that enhance efficiency, drive innovation, and transform data into actionable insights.',icon:<Bot />},
    {id:2, title:'Cloud Services and Migration', desc:'Transitioning your business to the cloud, unlocking scalability, efficiency, and enhanced collaboration across your organization.',icon:<Cloud />},
    {id:3, title:'Consultancy Services', desc:'Professional consultancy services for web and mobile software, providing expert guidance to optimize development processes, enhance user experience, and drive project success.',icon:<ChartPie />}
]
function Services() {
  return (
    <div className="bg-slate-100 py-16 px-4 md:px-8 flex flex-col md:flex-row gap-5 justify-between">
        <div className="flex-1 md:sticky top-24 h-screen">
        <h1 className="text-primary text-center md:text-left font-bold text-lg">Our services</h1>
        <h2 className="text-3xl text-center md:text-left  md:text-7xl font-bold text-black my-3 md:my-5">How we <br className="hidden md:block"/> help you</h2>
        <p className="text-black text-center md:text-left  text-lg">Corban Technologies offers a wide range of digital solutions tailored to meet your business needs.</p>
        <div className="flex justify-center md:justify-start">
        <button className="border border-gray-700 rounded-full px-5 py-3 my-5 text-black transition-all duration-500 hover:border-transparent hover:bg-primary hover:text-white flex justify-between items-center">Learn more <ChevronsRight /> </button>
        </div>
        </div>
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ul>
                {cards1.map((card)=>(
                    <li key={card.id} className=" bg-white shadow rounded-xl mb-5 overflow-hidden">
                        <div className="m-4 border size-12 text-gray-950 grid place-content-center rounded-md">
                            {card.icon}
                        </div>
                        <h2 className="px-4 mb-4 font-semibold text-gray-950 text-2xl">{card.title}</h2>
                        <p className="px-4 text-gray-600 mb-4">{card.desc}</p>
                        <button className="w-full text-gray-950 font-semibold text-lg py-3 px-4 flex items-center justify-between group">Learn more <ArrowDownRight className="transition-all group-hover:-rotate-45 " /> </button>
                    </li>
                ))}
            </ul>
            <ul className="mt-0 md:mt-8">
                {cards2.map((card)=>(
                    <li key={card.id} className=" bg-white shadow rounded-xl mb-5 overflow-hidden">
                        <div className="m-4 border size-12 text-gray-950 grid place-content-center rounded-md">
                            {card.icon}
                        </div>
                        <h2 className="px-4 mb-4 font-semibold text-gray-950 text-2xl">{card.title}</h2>
                        <p className="px-4 text-gray-600 mb-4">{card.desc}</p>
                        <button className="w-full text-gray-950 font-semibold text-lg py-3 px-4 flex items-center justify-between group">Learn more <ArrowDownRight className="transition-all group-hover:-rotate-45 " /> </button>
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Services