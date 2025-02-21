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
        bg:'/fintech.webp'
    },
    {
        title: "Edtech",
        heading:'E-Learning solutions that provide more efficient and productive learning experiences for all users',
        description: [
            'E-learning platforms',
            'Learning Management Systems (LMS)',
            'Management software'
        ],
        bg:'/edtech.webp'
    },
    {
        title: "Ecommerce",
        heading:'Ecommerce software solutions that drive sales and enhance customer experience',
        description: [
            'Custom ecommerce websites', 
            'Payment Solutions', 
            'Inventory management systems'
        ],
        bg:'/ecom.webp'
    },
    {
        title: "Real Estate",
        heading:'Software solutions for better property management',
        description: [
            'Real estate listings',
            'Property management systems',
            'Virtual tour applications'
        ],
        bg:'/estate.webp'
    },
];

function Industries() {
  return (
    <div className="md:py-5">
        <div className="px-4 lg:px-8 md:mt-5 mb-8 max-w-[1200px] mx-auto">
            <h1 className="text-primary font-bold text-sm mb-1">INDUSTRIES</h1>
            <h2 className="text-2xl md:text-3xl text-secondaryBlue lg:text-4xl font-bold mb-3">We provide solutions for every industry</h2>
            <p className='lg:text-lg text-secondaryBlue'>Our team of experienced software engineers, architects, and developers use cutting-edge <br /> technologies and approaches to drive innovation across diverse industries.</p>
            <p className='mb-8 lg:text-lg text-secondaryBlue'>Together, we can bring your vision to life.</p>
            <div className="mt-5 grid grid-cols-1 gap-8 md:gap-5 md:grid-cols-2">
                {userCategories.map((cat)=>(
                <div key={cat.title} className="md:p-8 relative flex sm:flex-col-reverse lg:flex-row h-full bg-[#f2f4f7] rounded-xl p-4 justify-between">
                    <div>
                    <p className="text-2xl mb-2">{cat.title}</p>
                    <p className="mb-3 text-[17px] text-gray-600">{cat.heading}</p>
                    <ul>
                        {cat.description.map((desc)=>(
                            <li key={desc} className="text-[#696969] text-[15px] mb-3 flex items-center gap-1"><BadgeCheck size={20} className="flex-shrink-0 text-primary" /> {desc}</li>
                        ))}
                    </ul>
                    <button className="bg-primary text-white px-5 py-2 rounded-full">Learn more</button>
                    </div>
                    <img src={cat.bg} alt="industry" className='absolute -top-10 -right-4 sm:relative sm:top-0 sm:right-0 w-[120px] sm:w-[150px] lg:w-[240px] object-contain' />
                </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Industries