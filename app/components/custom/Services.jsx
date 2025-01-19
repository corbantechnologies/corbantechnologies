'use client';

import { Bot, ChartPie, ChevronsRight, Cloud, Globe, LockKeyhole, Smartphone } from "lucide-react"

const cards1 = [
    {id:1, title:'Web Development', desc:'Custom web development services that create responsive, user-friendly websites tailored to enhance your online presence and drive engagement.',icon:<Globe />},
    {id:2, title:'Mobile Development', desc:'Expert mobile app development that delivers intuitive, high-performance applications for iOS and Android, designed to meet your business needs and engage users.',icon:<Smartphone />},
    {id:3, title:'Cyber Security Solutions', desc:'Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats.',icon:<LockKeyhole />},
    {id:4, title:'Artificial Intelligence', desc:'We provide tailored AI solutions that enhance efficiency, drive innovation, and transform data into actionable insights.',icon:<Bot />},
    {id:5, title:'Cloud Services and Migration', desc:'Transitioning your business to the cloud, unlocking scalability, efficiency, and enhanced collaboration across your organization.',icon:<Cloud />},
    {id:6, title:'Consultancy Services', desc:'Professional consultancy services for web and mobile software, providing expert guidance to optimize development processes, enhance user experience, and drive project success.',icon:<ChartPie />}
]

function Services() {
  return (
    <div className="bg-slate-50 py-5 px-4 lg:px-8">
        <div className="max-w-screen-lg mx-auto">

        <div>
        <h1 className="text-primary text-center font-bold text-lg">Our services</h1>
        <h2 className="text-3xl lg:text-4xl text-center font-semibold">How we help you</h2>
        <p className="text-gray-600 text-center lg:text-lg">Corban Technologies offers a wide range of digital solutions <br className="hidden md:block" /> tailored to meet your business needs.</p>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 mb-5 px-4 md:px-0">
                {cards1.map((card)=>(
                    <article key={card.id}>
                        <div className="my-4 border border-gray-300 size-12 text-gray-600 grid place-content-center rounded-md">
                            {card.icon}
                        </div>
                        <h2 className="mb-4 text-gray-950 text-xl flex items-center border-l-4 border-primary pl-2">{card.title}</h2>
                        <p className=" text-gray-600 mb-4">{card.desc}</p>
                    </article>
                ))}
            </div>
            <div className="flex justify-center">
        <button className=" rounded-full px-5 py-3 bg-primary text-white flex justify-between items-center">Learn more <ChevronsRight /> </button>
        </div>
        </div>
    </div>
  )
}

export default Services