import React from "react";

function Footer() {
  return (
    <div className="pt-16 h-auto bg-[#D8C9A3] text-[#6A5B44]">
      <h1 className="text-4xl text-center md:px-8 md:text-left pb-5 text-[#6A5B44]">
        Shama&apos;s Women&apos;s Clothing Store
      </h1>
      <div className="px-3 sm:px-5 md:px-14 flex justify-between gap-10 md:gap-20 flex-col items-start md:flex-row md:items-center">
        <ul>
          <h3 className="font-bold pb-3 text-[#6A5B44]">Shop By Category</h3>
          <li>Casual Dresses</li>
          <li>Formal Wear</li>
          <li>Party Dresses</li>
          <li>Winter Collection</li>
          <li>Summer Collection</li>
        </ul>
        <ul>
          <h3 className="font-bold pb-3 text-[#6A5B44]">About Us</h3>
          <li>Our Story</li>
          <li>Our Values</li>
          <li>Wholesale</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <h3 className="font-bold pb-3 text-[#6A5B44]">Customer Support</h3>
          <li>Contact Us</li>
          <li>FAQ&apos;s</li>
          <li>Find a Store</li>
          <li>Terms & Conditions</li>
        </ul>
        <div className="md:w-[40%]">
          <h3 className="font-semibold text-[#6A5B44] pb-3">
            Stay Updated with Our Newsletter
          </h3>
          <input
            type="email"
            placeholder="Enter email here"
            className="px-2 py-1 sm:px-9 sm:py-2 text-gray-600 rounded-sm mx-2 border-none outline-none text-[17px]"
          />
          <button className="border-2 p-[3px] sm:p-[7px] font-semibold border-[#6A5B44] text-[#6A5B44] hover:bg-[#6A5B44] hover:text-white">
            Subscribe Now
          </button>
          <p className="py-4 text-[14px] text-gray-400">
            By subscribing, you agree to receive promotional emails from Shama&apos;s Women&apos;s Clothing Store and accept our terms of use and privacy policy. *Terms apply.
          </p>
        </div>
      </div>

      <p className="font-thin text-[#6A5B44] text-center pt-12 pb-4">
        ©2024 Shama&apos;s Women&apos;s Clothing Store. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
