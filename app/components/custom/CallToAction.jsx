'use client';

import { BadgeCheck } from "lucide-react";

const userCategories = [
    {
        title: "All Businesses",
        image: "/heroBg.jpg",
        heading:'We offer enterprise-level solutions',
        description: [
            'Tailored software solutions',
            'MVP development',
            'Digital transformation',
            'E-commerce solutions', 
            'Inventory management systems'
        ],
        bg:'/bg1.jpg'
    },
    {
        title: "Government Agencies",
        image: "/heroBg2.jpg",
        heading:' We deliver secure and efficient technology solutions',
        description: [
            'Public service delivery tech solutions',
            'Citizen engagement texh solutions',
            'Implementation of e-governance initiatives'
        ],
        bg:'/bg2.jpg'
    },
    {
        title: "NGOs",
        image: "/heroBg5.jpg",
        heading:'You get affordable tech solutions that help you manage your operations, engage with donors, and maximize your impact',
        description: [
            'CRM systems',
            'Website development',
            'Digital marketing strategies'
        ],
        bg:'/bg3.jpg'
    },
    {
        title: "Educational Institutions",
        image: "/heroBg2.jpg", 
        heading:'We can assist schools and universities in integrating technology into their curricula',
        description: [
            'E-learning platforms', 
            'Student management systems', 
            'Collaboration tools'
        ],
        bg:'/bg4.jpg'
    },
    {
        title: "Individuals",
        image: "/heroBg5.jpg",
        heading:'We help individuals establish their online presence, personal businesses and projects',
        description: [
            'Portfolios',
            'E-commerce solutions',
            'MVP development'
        ],
        bg:'/bg2.jpg'
    },
];

function CallToAction() {
  return (
    <div className="px-4 lg:px-8 mt-5 mb-10">
        <h1 className="text-primary text-center font-bold text-sm mb-1">SOLUTIONS</h1>
        <h2 className="text-3xl lg:text-4xl text-center font-bold mb-3">We provide the solutions you need</h2>
        <p className='mb-8 text-center lg:text-lg text-gray-600'>Whether you&apos;re a small business looking to streamline operations, a startup ready to scale, <br /> or an individual seeking innovative tech solutions, you&apos;ve come to the right spot.</p>
        <div className="mt-5 w-full overflow-auto flex gap-5 pb-5">
            {userCategories.map((cat)=>(
               <div key={cat.title} className="rounded-xl border bg-[#f9f9fb] overflow-hidden w-[320px] md:w-[350px] flex-shrink-0 ">
               <div className="p-5 md:p-8 flex h-full flex-col justify-between">
                   <div>
                   <p className="text-2xl mb-2">{cat.title}</p>
                   <p className="mb-3 text-[17px] text-gray-600">{cat.heading}</p>
                   <ul>
                       {cat.description.map((desc)=>(
                           <li key={desc} className="text-[#696969] text-[15px] mb-3 flex items-center gap-1"><BadgeCheck size={20} className="flex-shrink-0 text-primary" /> {desc}</li>
                       ))}
                   </ul>
                   </div>
               </div>
           </div> 
            )) }
        </div>
                   <div className="flex justify-center">
                   <button className="rounded-full px-5 py-3 mt-5 bg-primary text-white">Schedule a meeting </button>
                   </div>
    </div>
  )
}

export default CallToAction