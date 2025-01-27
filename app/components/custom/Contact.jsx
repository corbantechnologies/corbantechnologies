'use client';

import { Bot, ChartPie, Cloud, Globe } from "lucide-react";

const cards1 = [
    {
      id: 1,
      title: "Software Development",
      desc: "Tailored software development solutions to elevate your business with innovative and efficient applications.",
      icon: <Globe />,
    },
    {
      id: 2,
      title: "Artificial Intelligence",
      desc: "We provide tailored AI solutions that enhance efficiency, drive innovation, and transform data into actionable insights.",
      icon: <Bot />,
    },
    {
      id: 3,
      title: "Cloud Services",
      desc: "Transitioning your business to the cloud, unlocking scalability, efficiency, and enhanced collaboration across your organization.",
      icon: <Cloud />,
    },
    {
      id: 4,
      title: "Consultancy Services",
      desc: "Providing expert consultancy services to help businesses optimize strategies, enhance performance, and achieve their goals.",
      icon: <ChartPie />,
    },
  ];

function Contact() {
  return (
    <div className="px-4 lg:px-8 py-10">
       <div className="flex flex-col md:flex-row gap-8">
        <p className="flex-1 text-3xl md:text-4xl text-gray-950 font-semibold">Together, we can bring your vision to life.</p>
        <div className="flex-1">
            <p className="text-lg">Corban Technologies is your trusted partner in enterprise solutions and software development. We understand that behind every line of code is an opportunity to gain a competitive advantage.</p>
            <button className="bg-primary text-white rounded-full px-8 mt-5 py-3">Talk to Us</button>
        </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 mb-5">
          {cards1.map((card) => (
            <article key={card.id} className="border bg-[#f9f9fb] px-4 rounded-xl">
              <div className="my-4 border border-gray-300 size-12 grid place-content-center rounded-md">
                {card.icon}
              </div>
              <h2 className="mb-4 text-xl flex items-center border-l-4 border-primary pl-2">
                {card.title}
              </h2>
              <p className="mb-4 text-[15px] leading-relaxed tracking-wide text-gray-700">{card.desc}</p>
            </article>
          ))}
        </div>
    </div>
  )
}

export default Contact