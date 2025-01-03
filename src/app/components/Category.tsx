import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
  return (
  <div className="mb-[100px] mt-[100px] bg-gradient-to-b bg-[#D8C7B6] p-8 rounded-lg shadow-lg">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-4xl text-[#6E4B3B]">
          Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#9b7b5c] inline-flex" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category Cards */}
        {[
          { title: "Saree", image: "/C1.webp", link: "/Saree" },
          { title: "Saree", image: "/C2.webp", link: "/Saree" },
          { title: "Bridal Dress", image: "/C3.jpg", link: "/Bridal Dress" },
          { title: "Ball Gown", image: "/C4.webp", link: "/Ball Gown" },
          { title: "Lehenga", image: "/C5.webp", link: "/Lehenga" },
          { title: "Casual", image: "/C7.webp", link: "/Casual" },
          { title: "Casual", image: "/C8.avif", link: "/Casual" },
          { title: "Saree", image: "/C6.jpg", link: "/Saree" },
        ].map((category, index) => (
          <div
            key={index}
            className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative rounded-lg hover:shadow-lg hover:shadow-[#D1C6B1]/50 h-72 w-72 transition-all duration-300 bg-white shadow-md"
          >
            <Link href={category.link}>
              <Image
                src={category.image}
                alt={category.title}
                width={250}
                height={150}
                className="rounded-xl object-cover w-full h-full"
              />
              <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-[#C59D74] to-[#6E4B3B] text-center text-white w-full p-4 shadow-lg transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out">
                <h1>{category.title}</h1>
              </div>
              <div className="block lg:hidden absolute bottom-0 duration-500 z-[100] text-4xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-[#C59D74] to-[#6E4B3B] text-center text-white w-full p-4 shadow-lg">
                <h1>{category.title}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
