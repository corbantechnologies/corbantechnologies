'use client';

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    const [selectedCategory, setSelectedCategory] = useState(userCategories[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % userCategories.length; 
                setSelectedCategory(userCategories[nextIndex]);
                return nextIndex;
            });
        }, 30000);

        return () => clearInterval(interval); 
    }, []);
    const handleSelect = (category) => {
        const index = userCategories.findIndex((cat) => cat.title === category.title);
        setSelectedCategory(category);
        setCurrentIndex(index);
    };
  return (
    <div className="px-4 md:px-8 mt-10 mb-20">
        <h1 className="text-primary text-center font-bold text-sm mb-2">SOLUTIONS</h1>
        <h2 className="text-3xl font-bold text-center mb-3">We provide the solutions you need</h2>
        <p className='text-center md:max-w-screen-md mb-8 mx-auto'>Whether you&apos;re a small business looking to streamline operations, a startup ready to scale, or an individual seeking innovative tech solutions, you&apos;ve come to the right spot.</p>
        <ul className="flex gap-2 flex-wrap justify-center">
            {userCategories.map((cat)=>(
                <li key={cat.title} className={`text-sm border ${selectedCategory.title === cat.title ? 'border-primary5 bg-primary3 text-white ':'border-primary6 bg-[#fffaf5] '} rounded-md px-4 py-2`}>
                    <button onClick={() => handleSelect(cat)}>{cat.title}</button>
                </li>
            ))}
        </ul>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-screen-lg md:mx-auto">
            <div className="rounded-xl overflow-hidden max-h-[400px]">
                <Image src={selectedCategory.image} alt='user' width={500} height={500} className="object-cover w-full h-full"/>
            </div>
            <div className="rounded-xl overflow-hidden relative row-start-1 md:col-start-2 h-[400px]">
                <Image src={selectedCategory.bg} alt='user' width={500} height={500} className='absolute left-0 right-0 h-full w-full z-0'/>
                <div className="absolute text-black z-50 p-8 flex h-full flex-col justify-between">
                    <div>
                    <p className="text-3xl font-semibold mb-3">{selectedCategory.title}</p>
                    <p className="text-lg mb-5">{selectedCategory.heading}</p>
                    <ul>
                        {selectedCategory.description.map((desc)=>(
                            <li key={desc} className="text-[#696969] mb-3 flex items-center gap-1"><BadgeCheck size={20} className="flex-shrink-0 text-primary" /> {desc}</li>
                        ))}
                    </ul>
                    </div>
                    <div className="flex-grow flex flex-col justify-end w-fit">
                    <button className="bg-primary text-white rounded-full px-4 py-2">
                Schedule a meeting
                </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CallToAction