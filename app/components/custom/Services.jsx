"use client";

import {
  Bot,
  ChartPie,
  ChevronsRight,
  Cloud,
  Globe,
  LockKeyhole,
  Smartphone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const cards1 = [
  {
    id: 1,
    title: "Web Development",
    desc: "Custom web development services that create responsive, user-friendly websites tailored to enhance your online presence and drive engagement.",
    icon: <Globe />,
  },
  {
    id: 2,
    title: "Mobile Development",
    desc: "Expert mobile app development that delivers intuitive, high-performance applications for iOS and Android, designed to meet your business needs and engage users.",
    icon: <Smartphone />,
  },
  {
    id: 3,
    title: "Cyber Security Solutions",
    desc: "Safeguarding your invaluable digital assets and fortifying your online against the relentless and ever-evolving global landscape of cyber threats.",
    icon: <LockKeyhole />,
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    desc: "We provide tailored AI solutions that enhance efficiency, drive innovation, and transform data into actionable insights.",
    icon: <Bot />,
  },
  {
    id: 5,
    title: "Cloud Services and Migration",
    desc: "Transitioning your business to the cloud, unlocking scalability, efficiency, and enhanced collaboration across your organization.",
    icon: <Cloud />,
  },
  {
    id: 6,
    title: "Consultancy Services",
    desc: "Professional consultancy services for web and mobile software, providing expert guidance to optimize development processes, enhance user experience, and drive project success.",
    icon: <ChartPie />,
  },
];

function Services() {
  return (
      <div className="max-w-[1200px] py-10 mx-auto px-4 lg:px-8 flex flex-col md:flex-row">
        <div className='flex-1 md:h-full md:sticky md:top-[90px]'>
          <h1 className="text-primary font-bold text-lg">
            Our services
          </h1>
          <h2 className="text-3xl text-secondaryBlue lg:text-4xl font-semibold tracking-wide">
            Accelerating your results <br/> with our comprehensive solutions
          </h2>
          {/* <p className="lg:text-lg text-secondaryBlue">
          Whether you&apos;re creating your product from scratch, modernizing it, or continuously
            <br className="hidden md:block" /> improving it, we have the expertise your business requires.
          </p> */}
          <img src="/paperPlane.webp" alt="paper plane" className="hidden md:block" />
        </div>
        {/* <div className="flex-1 mt-5 md:mt-0">
          {cards1.map((card) => (
            <article key={card.id} className="shadow bg-white mb-5 md:mb-3 p-4 rounded-xl">
              <div className="my-4 border border-gray-300 size-12 grid place-content-center rounded-md">
                {card.icon}
              </div>
              <h2 className="mb-4 text-xl flex items-center border-l-4 border-primary pl-2">
                {card.title}
              </h2>
              <p className="mb-4">{card.desc}</p>
            </article>
          ))}
        </div> */}
        <div className="flex-1 mt-5 md:mt-0">
        <Accordion type="single" collapsible className="md:w-3/4 mx-auto bg-slate-50 rounded-xl p-6">
          {cards1.map((card)=>(
      <AccordionItem value={card.title} key={card.id}>
        <AccordionTrigger className='text-lg md:text-xl font-medium text-secondaryBlue'>{card.title}</AccordionTrigger>
        <AccordionContent className='text-gray-600 text-base'>
        {card.desc}
        </AccordionContent>
      </AccordionItem>
          ))}
    </Accordion>
        </div>
      </div>
  );
}

export default Services;
