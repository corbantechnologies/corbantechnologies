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
import RevealRight from "@/lib/RevealRight";
import RevealLeft from "@/lib/RevealLeft";
import Reveal from "@/lib/Reveal";

const cards1 = [
  {
    id: 1,
    title: "Web Development",
    desc: "We are dedicated to turning your bold ideas into scalable, efficient, and high-performing web platforms that thrive in the digital landscape. With our expertise in UI/UX design, business analysis, and development, we create, build, and support a range of solutions—from proof of concepts (POCs) and minimum viable products (MVPs) to enterprise-level applications.",
    solutions:['Website development','E-commerce solutions','SEO optimization','Website maintenance'],
    icon: <Globe />,
    image:'/nafsi.png'
  },
  {
    id: 2,
    title: "Mobile Development",
    desc: "Just share your idea with us, and we'll handle the rest. We offer complete mobile development services for any platform, guiding you through every step—from concept and UI/UX design to prototyping, coding, testing, and ongoing support. We ensure a smooth process that stays on schedule and within your budget.",
    solutions:['iOS', 'Android', 'Hybrid'],
    icon: <Smartphone />,
    image:"https://ik.imagekit.io/k0jemnbco/Main_Page_New/tr:w-1200/case-zytara.webp"
  },
  {
    id: 3,
    title: "Cyber Security Solutions",
    desc: "We prioritize your safety in the digital world. Our comprehensive cybersecurity solutions are designed to protect your business from threats and vulnerabilities. We assess your current security posture, implement robust measures, and provide ongoing support to ensure your data and systems remain secure.",
    solutions:['Risk Assessment', 'Incident Reponse', 'Compliance Support', 'Employee Training'],
    icon: <LockKeyhole />,
    image:"https://cdn.bap-software.net/2024/06/27220717/Cyber-Security.jpg"
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    desc: "Unlock the potential of artificial intelligence with our tailored solutions. We help you integrate AI into your business processes, enhancing efficiency and decision-making. From developing intelligent algorithms to implementing machine learning models, we guide you every step of the way to harness the power of AI.",
    solutions:['Machine learning models', 'Natural language processing', 'Predictive analysis', 'AI integration'],
    icon: <Bot />,
    image:'https://imageio.forbes.com/specials-images/imageserve/645b3eca0059191fb09c02fa/15-Amazing-Real-World-Applications-Of-AI-Everyone-Should-Know-About/960x0.jpg?height=400&width=711&fit=bounds'
  },
  {
    id: 5,
    title: "Cloud Services and Migration",
    desc: "Embrace the future with our cloud services and migration solutions. We simplify the transition to the cloud, ensuring your data and applications are securely moved and optimized for performance. Our team provides ongoing support to help you leverage the full benefits of cloud technology, enhancing flexibility and scalability for your business.",
    solutions:['Infrastructure setup', 'Migration planning', 'Managed cloud services'],
    icon: <Cloud />,
    image:'https://odatacolocation.com/wp-content/uploads/2022/06/ODATA-Cloud-scaled.jpg'
  },
  {
    id: 6,
    title: "Consultancy Services",
    desc: "Our consultancy services are here to guide you through your business challenges. We offer expert advice and strategies tailored to your specific needs, helping you make informed decisions and drive growth. Whether you need insights on technology, operations, or market trends, we’re here to support your journey to success.",
    solutions:['Business analysis','Technology consulting','Market Research','Training & Development'],
    icon: <ChartPie />,
    image:'https://yellow.co.ke/img/2023/12/1e088a460cb1c81c5665f254b4f9632a3fc1984c.jpeg?w=600&h=315&fit=crop'
  },
];

function Services() {
  return (
    <div className="">
      <div className="max-w-[1200px] pt-5 pb-10 mx-auto px-4 lg:px-8">
        
          <h1 className="text-primary font-bold text-lg">
            Our services
          </h1>
          <h2 className="text-2xl md:text-3xl text-secondaryBlue lg:text-4xl font-semibold tracking-wide">
            Accelerating your results with our <br className="hidden md:block"/> comprehensive solutions
          </h2>
          {/* <div className="group">
            {cards1.map((card)=>(
              <div key={card.id} className="group">
              <Reveal>
              <article className="grid grid-cols-1 md:grid-cols-2 border mt-16 md:mt-28 gap-5 md:gap-10 items-center">
                <div className="h-[200px] md:h-[300px] overflow-hidden md:group-even:col-start-2 md:row-start-1">
                  <img src={card.image} alt={card.title} className='rounded-xl object-cover h-full w-full' />
                </div>
                <div className="md:group-even:col-start-1">
                <h1 className="text-primary font-bold text-xl">
                  {card.title}
                </h1>
                <p className="text-secondaryBlue">{card.desc}</p>
                <ul className='list-inside list-disc mt-3 marker:text-primary'>
                  {card.solutions.map((solution)=>(
                    <li key={solution}>{solution}</li>
                  ))}
                </ul>
                </div>
              </article>
              </Reveal>
              </div>
            ))}
          </div> */}
        <div className="flex-1 mt-5 md:mt-10">
        <Accordion type="single" collapsible className=" bg-slate-50 rounded-xl p-6">
          {cards1.map((card)=>(
      <AccordionItem value={card.title} key={card.id}>
        <AccordionTrigger className='text-lg md:text-xl font-semibold text-secondaryBlue'>{card.title}</AccordionTrigger>
        <AccordionContent className='text-gray-600 text-base'>
        {card.desc}
        <ul className='list-inside list-disc mt-3 marker:text-primary'>
          {card.solutions.map((solution)=>(
            <li key={solution}>{solution}</li>
          ))}
        </ul>
        </AccordionContent>
      </AccordionItem>
          ))}
    </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Services;
