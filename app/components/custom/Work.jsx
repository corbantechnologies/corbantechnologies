"use client";

import { useState } from "react";

const ourWork = [
  {
    title: "Duka - ecommerce platform",
    id: 1,
    description:
      "Duka is a robust eCommerce platform designed to provide a seamless shopping experience. It features user-friendly navigation, secure payment options, and a wide range of products, making online shopping convenient and enjoyable.",
    service: "Software Development",
    img: "https://ik.imagekit.io/k0jemnbco/Main_Page_New/tr:w-1200/case-zytara.webp",
  },
  {
    title: "Nafsi Reset - Mental wellness",
    id: 2,
    description:
      "Nafsi Reset is a dedicated mental wellness website aimed at providing resources, support, and community for individuals seeking mental wellness. The platform offers articles, forums, and professional guidance to help users on their mental health journey.",
    service: "Website Development",
    img: "/nafsi.jpg",
  },
  {
    title: "Safaris - tours & safaris",
    id: 3,
    description:
      "Safaris is an innovative tours web application that connects travelers with unique experiences. Users can explore various tour packages, read reviews, and book their adventures with ease, all while enjoying a visually appealing interface.",
    service: "Software Development",
    img: "/tours.jpg",
  },
  {
    title: "Suppco - construction supplies marketplace",
    id: 4,
    description:
      "Suppco is a dynamic platform that connects suppliers and contractors, serving as a comprehensive marketplace. It streamlines the procurement process, allowing users to find reliable suppliers and contractors efficiently, enhancing collaboration and business growth.",
    service: "Website Development",
    img: "https://ik.imagekit.io/k0jemnbco/Main_Page_New/tr:w-1200/case-Keep.webp",
  },
];

function Work() {
  const [selected, setSelected] = useState(1);
  return (
    <div>
    <div className="max-w-[1200px] pt-5 md:pt-0 pb-10 md:pb-0 mx-auto px-4 lg:px-8">
      <section className="flex flex-col md:flex-row gap-3 md:gap-8 md:items-center">
      <h1 className="text-primary md:hidden font-bold text-lg">Our work</h1>
        <aside>
          <ul className="flex md:flex-col gap-1 md:gap-3">
            {Array.from({ length: 4 }, (_, i) => (
              <li
                key={i}
                className={`size-9 rounded-full grid place-content-center md:hover:bg-[#f2f4f7] ${
                  selected === i+1 ? "bg-primary text-white" : ""
                }`}
              >
                <button onClick={() => setSelected(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ul>
        </aside>
        <div>
          {ourWork.map((work) => (
            <article
              key={work.id}
              className={`${
                selected === work.id
                  ? "grid grid-cols-1 md:grid-cols-2 gap-5 items-center"
                  : "hidden"
              }`}
            >
              <div className="space-y-4">
                <h1 className="text-primary hidden md:block font-bold text-lg">Our work</h1>
                <h2 className="text-secondaryBlue !mt-0 text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {work.title}
                </h2>
                <span className="bg-[#f2f4f7] block w-fit text-secondaryBlue text-sm px-4 py-2 rounded-full">
                  {work.service}
                </span>
                <p className="text-gray-600 text-base md:text-lg">{work.description}</p>
                <button className="bg-primary text-white px-5 py-2 rounded-full">Want one like this?</button>
              </div>
              <img
                src={work.img}
                alt="our work sample"
                className="w-[500px] object-contain"
              />
            </article>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}

export default Work;
