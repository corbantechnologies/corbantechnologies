'use client';

import { BadgeCheck } from "lucide-react";

const userCategories = [
    {
        title: "Fintech",
        heading:'We empower businesses to innovate and streamline their financial services.',
        description: [
            'Secure payment systems',
            'Mobile banking applications',
            'Investment platforms',
        ],
        bg:'/bg1.jpg'
    },
    {
        title: "Healthtech",
        heading:'Transforming patient care and healthcare delivery',
        description: [
            'Telemedicine',
            'Electronic Health Records (EHR)',
            'Health management systems',
        ],
        bg:'/bg2.jpg'
    },
    {
        title: "Edtech",
        heading:'E-Learning solutions that provide more efficient and productive learning experiences for all users',
        description: [
            'E-learning platforms',
            'Learning Management Systems (LMS)',
            'Management software'
        ],
        bg:'/bg4.jpg'
    },
    {
        title: "Ecommerce",
        heading:'Ecommerce software solutions that drive sales and enhance customer experience',
        description: [
            'Custom ecommerce websites', 
            'Payment Solutions', 
            'Inventory management systems'
        ],
        bg:'/bg3.jpg'
    },
    {
        title: "Real Estate",
        heading:'Software solutions for better property management',
        description: [
            'Real estate listings',
            'Property management systems',
            'Virtual tour applications'
        ],
        bg:'/bg2.jpg'
    },
];

function CallToAction() {
  return (
    <div className="py-5">
        <div className="px-4 lg:px-8 mt-5 mb-10 max-w-[1200px] mx-auto">
            <h1 className="text-primary text-center font-bold text-sm mb-1">INDUSTRIES</h1>
            <h2 className="text-3xl lg:text-4xl text-center font-bold mb-3">We provide solutions for every industry</h2>
            <p className='text-center lg:text-lg'>Our team of experienced software engineers, architects, and developers use cutting-edge <br /> technologies and approaches to drive innovation across diverse industries.</p>
            <p className='mb-8 text-center lg:text-lg'>Together, we can bring your vision to life.</p>
            <div className="mt-5 w-full overflow-auto no-scrollbar flex gap-5 pb-5">
                {userCategories.map((cat)=>(
                <div style={{backgroundImage: `url(${cat.bg})`, backgroundSize:'cover', backgroundPosition:'center'  }} key={cat.title} className="rounded-xl overflow-hidden w-[320px] md:w-[350px] flex-shrink-0 ">
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
    </div>
  )
}

export default CallToAction