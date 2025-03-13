'use client';

import { BadgeCheck, CircleCheck } from "lucide-react";

const userCategories = [
    {
        title: "Fintech",
        heading:'We empower businesses to innovate and streamline their financial services.',
        description: [
            'Secure payment systems',
            'Mobile banking applications',
            'Investment platforms',
        ],
        bg:'/fintech.webp',
        icon:'/credit-card.png'
    },
    {
        title: "Edtech",
        heading:'E-Learning solutions that provide more efficient and productive learning experiences for all users',
        description: [
            'E-learning platforms',
            'Learning Management Systems (LMS)',
            'Management software'
        ],
        bg:'/edtech.webp',
        icon:'/graduation.png'
    },
    {
        title: "Ecommerce",
        heading:'Ecommerce software solutions that drive sales and enhance customer experience',
        description: [
            'Custom ecommerce websites', 
            'Payment Solutions', 
            'Inventory management systems'
        ],
        bg:'/ecom.webp',
        icon:'/grocery-store.png'
    },
    {
        title: "Real Estate",
        heading:'Software solutions for better property management',
        description: [
            'Real estate listings',
            'Property management systems',
            'Virtual tour applications'
        ],
        bg:'/estate.webp',
        icon:'/house.png'
    },
];

function Industries() {
  return (
    <div className="py-10 bg-slate-100">
        <div className="px-4 lg:px-8 md:mt-5 mb-8 max-w-[1200px] mx-auto">
            <h1 className="text-primary font-bold text-sm mb-1">INDUSTRIES</h1>
            <h2 className="text-2xl md:text-3xl text-secondaryBlue lg:text-4xl font-bold mb-3">We provide solutions for every industry</h2>
            <p className='lg:text-lg text-secondaryBlue'>Our team of experienced software engineers, architects, and developers use cutting-edge <br /> technologies and approaches to drive innovation across diverse industries.</p>
            <p className='mb-8 lg:text-lg text-secondaryBlue'>Together, we can bring your vision to life.</p>
            <div className="mt-5 flex flex-col md:flex-row md:h-[420px] snap-x pb-5 overflow-auto gap-8 md:gap-5 ">
                {userCategories.map((cat)=>(
                <div key={cat.title} className="md:w-[350px] h-[400px] md:h-full flex-shrink-0 snap-start md:p-8 relative bg-white flex sm:flex-col-reverse lg:flex-row rounded-lg p-6 justify-between">
                    <div>
                    <p className="text-xl mb-2">{cat.title}</p>
                    <p className="mb-10 text-[15px] tracking-wide leading-relaxed text-secondaryBlue mt-3">{cat.heading}</p>
                    <p className="text-secondaryBlue mb-5">Popular Options</p>
                    <ul>
                        {cat.description.map((desc)=>(
                            <li key={desc} className="text-secondaryBlue text-sm mb-3 flex items-center gap-1"><CircleCheck size={20} fill="#ff7b00" className="flex-shrink-0 text-white" /> {desc}</li>
                        ))}
                    </ul>
                    <button className="bg-primary absolute bottom-8 left-6 right-6 mt-3 text-white px-5 py-2 rounded-full">Learn more</button>
                    </div>
                </div>
                )) }
            </div>
        </div>
        <div className="bg-white max-w-[1200px] mx-4 md:mx-auto mb-10 h-[50vh] grid place-content-center p-5 rounded-xl gap-8">
        <p className="text-3xl md:text-5xl text-center text-secondaryBlue font-semibold">The partner to bring<br /> your vision to life.</p>
        <div className="flex justify-center">
        <button className="bg-primary w-full md:w-fit text-white rounded-full px-8 py-3">Talk to Us</button>
        </div>
       </div>
    </div>
  )
}

export default Industries