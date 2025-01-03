import React from 'react';
import { FiGift } from 'react-icons/fi';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineAssignmentReturn } from 'react-icons/md';

const Services = () => {
  return (
    <section className="body-font mb-[100px] mt-[100px] bg-[#D8C7B6]"> {/* Light taupe background */}
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#5D4F3D]">
            Services
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#9C8A6A] inline-flex" /> {/* Muted gold accent */}
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* Quality */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4 flex-shrink-0 border-4 border-[#9C8A6A] rounded-full group-hover:animate-bounce transition-all duration-300">
                <FiGift className="text-[#9C8A6A] text-4xl" />
              </div>
              <h2 className="text-[#5D4F3D] text-lg font-bold tracking-tight lg:text-xl mb-3">
                Premium Quality Clothing
              </h2>
              <p className="text-[#5D4F3D] text-lg font-light tracking-tight transition-colors">
                Discover a curated selection of high-quality women's clothing, designed to provide comfort, elegance, and durability. Our collection is crafted to ensure you always look your best.
              </p>
            </div>
          </div>

          {/* Delivery */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4 flex-shrink-0 border-4 border-[#9C8A6A] rounded-full group-hover:animate-bounce transition-all duration-300">
                <TbTruckDelivery className="text-[#9C8A6A] text-4xl" />
              </div>
              <h2 className="text-[#5D4F3D] text-lg font-bold tracking-tight lg:text-xl mb-3">
                On-Time Delivery
              </h2>
              <p className="text-[#5D4F3D] text-lg font-light tracking-tight transition-colors">
                Enjoy fast and reliable delivery of your favorite styles. From everyday essentials to occasion wear, we make sure your orders arrive quickly and hassle-free.
              </p>
            </div>
          </div>

          {/* Exchange */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-full p-6 mb-5 flex flex-col justify-between items-center rounded-lg">
              <div className="w-24 h-24 inline-flex items-center justify-center mb-4 flex-shrink-0 border-4 border-[#9C8A6A] rounded-full group-hover:animate-bounce transition-all duration-300">
                <MdOutlineAssignmentReturn className="text-[#9C8A6A] text-4xl" />
              </div>
              <h2 className="text-[#5D4F3D] text-lg font-bold tracking-tight lg:text-xl mb-3">
                Easy Returns & Exchanges
              </h2>
              <p className="text-[#5D4F3D] text-lg font-light tracking-tight transition-colors">
                Not satisfied with your purchase? Our simple return and exchange process ensures you can easily find the perfect outfit that meets your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
