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
    <div className="darkRadialBg px-2 md:px-8 py-16 flex flex-col md:flex-row gap-5 justify-between">
        <div className="flex-1 md:sticky top-24 h-screen">
        <h1 className="text-primary font-bold text-lg">Our services</h1>
        <h2 className="text-3xl md:text-7xl font-bold text-white my-3 md:my-5">How we <br className="hidden md:block"/> help you</h2>
        <p className="text-gray-400 text-lg">Corban Technologies offers a wide range of digital solutions tailored to meet your business needs.</p>
        <button className="border border-gray-700 rounded-full px-5 py-3 my-5 text-white transition-all duration-500 hover:border-transparent hover:bg-primary hover:text-white flex justify-between items-center">Learn more <ChevronsRight /> </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ul>
                {cards1.map((card)=>(
                    <li key={card.id} className="max-w-[340px] bg-gray-950 border border-gray-700 rounded-xl mb-5 overflow-hidden">
                        <div className="bg-[#0f1521] m-4 border size-12 text-[#53b1fd] grid place-content-center border-gray-700 rounded-md">
                            {card.icon}
                        </div>
                        <h2 className="px-4 mb-4 font-semibold text-white text-2xl">{card.title}</h2>
                        <p className="px-4 text-gray-400 txet-lg mb-4">{card.desc}</p>
                        <button className="w-full text-white font-semibold text-lg py-3 px-4 flex items-center justify-between group">Learn more <ArrowDownRight className="transition-all group-hover:-rotate-45 " /> </button>
                    </li>
                ))}
            </ul>
            <ul className="mt-8">
                {cards2.map((card)=>(
                    <li key={card.id} className="max-w-[340px] bg-gray-950 border border-gray-700 rounded-xl mb-5 overflow-hidden">
                        <div className="bg-[#0f1521] m-4 border size-12 text-[#53b1fd] grid place-content-center border-gray-700 rounded-md">
                            {card.icon}
                        </div>
                        <h2 className="px-4 mb-4 font-semibold text-white text-2xl">{card.title}</h2>
                        <p className="px-4 text-gray-400 text-lg mb-4">{card.desc}</p>
                        <button className="w-full text-white font-semibold text-lg py-3 px-4 flex items-center justify-between group">Learn more <ArrowDownRight className="transition-all group-hover:-rotate-45 " /> </button>
                    </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default Services