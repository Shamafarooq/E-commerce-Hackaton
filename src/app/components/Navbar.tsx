"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useCart } from '../context/cartcontext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="bg-gradient-to-r from-[#D8C9A3] via-[#F1E1C6] to-[#F4D8A3] text-[#4E3B31] shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={70} 
            height={70} 
            className="cursor-pointer rounded" 
          />
        </Link>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RiCloseFill className="text-[#4E3B31] text-3xl cursor-pointer"/>
          ) : (
            <HiOutlineMenuAlt3 className="text-[#4E3B31] text-3xl cursor-pointer" />
          )}
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex items-center space-x-8 justify-center flex-grow relative">
          <li className="px-4">
            <Link href="/" className="font-normal text-[#4E3B31] text-lg py-2 hover:border-b-2 hover:border-[#C5A88D] transition duration-300">
              Home
            </Link>
          </li>
          <li 
            className="px-4 relative flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="flex items-center space-x-2 font-normal text-[#4E3B31] text-lg py-2 hover:border-b-2 hover:border-[#C5A88D] transition duration-300 cursor-pointer">
              <span>ShopHub</span>
              <FaChevronDown 
                className={`text-sm transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
              />
            </span>

            {isDropdownOpen && (
              <div 
                className="absolute top-12 left-0 bg-white/40 backdrop-blur-md text-[#4E3B31] rounded-lg shadow-lg w-[450px] p-4 grid grid-cols-2 gap-4 z-50"
              >
                {/* Links */}
                <Link href="/LongFrocks" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Long Frocks</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">Elegant and stylish long dresses for every occasion.</p>
                </Link>
                <Link href="/WesternWear" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Western Wear</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">Trendy pieces for modern and chic looks.</p>
                </Link>
                <Link href="/Saree" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Saree</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">Celebrate tradition with vibrant sarees.</p>
                </Link>
                <Link href="/BridalDress" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Bridal Dress</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">Unveil your beauty on the big day.</p>
                </Link>
                <Link href="/BallGown" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Ball Gown</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">For the grand moments that deserve luxury.</p>
                </Link>
                <Link href="/PantShirt" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Pant Shirt</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">Sophistication meets comfort with our pant-shirts.</p>
                </Link>
                <Link href="/Casual" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Casual</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">Effortless and comfy outfits for daily wear.</p>
                </Link>
                <Link href="/Lehenga" className="cursor-pointer group">
                  <h3 className="font-semibold text-[#4E3B31] group-hover:text-[#C5A88D] transition duration-300">Lehenga</h3>
                  <p className="text-sm group-hover:text-[#C5A88D] transition duration-300">Celebrate in style with our exquisite lehengas.</p>
                </Link>
              </div>
            )}
          </li>
          <li className="px-4">
            <Link href="/about" className="font-normal text-[#4E3B31] text-lg py-2 hover:border-b-2 hover:border-[#C5A88D] transition duration-300">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link href="/contact" className="font-normal text-[#4E3B31] text-lg py-2 hover:border-b-2 hover:border-[#C5A88D] transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="px-4">
          <Link href="/cart" className="relative">
            <AiOutlineShoppingCart className="text-2xl text-[#4E3B31] hover:text-gray-400" />
            {cartItems.length > 0 && (
              <span className="absolute top-[-1px] right-[-20px] bg-red-600 text-white font-bold rounded-full text-xs px-2 py-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed inset-0 z-50 bg-gradient-to-r from-[#D8C9A3] via-[#F1E1C6] to-[#F4D8A3] rounded-lg m-4">
            <div className="absolute top-4 right-4 cursor-pointer">
              <RiCloseFill 
                className="text-[#4E3B31] text-3xl"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            {/* Full-Screen Menu Content */}
            <div className="flex flex-col justify-center items-center h-full space-y-6 text-[#4E3B31] text-2xl">
              <Link href="/" className="font-bold mb-4">Home</Link>
              {/* ShopHub Dropdown */}
              <div className="relative">
                <div
                  className="font-bold mb-4 flex items-center space-x-2 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>ShopHub</span>
                  <FaChevronDown 
                    className={`text-sm transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} 
                  />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white/40 backdrop-blur-md text-[#4E3B31] rounded-lg shadow-lg w-[200px] p-4 flex flex-col space-y-2 z-50 text-sm">
                    <Link href="/LongFrocks" className="font-semibold hover:text-[#C5A88D] transition duration-300">Long Frocks</Link>
                    <Link href="/WesternWear" className="font-semibold hover:text-[#C5A88D] transition duration-300">Western Wear</Link>
                    <Link href="/Saree" className="font-semibold hover:text-[#C5A88D] transition duration-300">Saree</Link>
                    <Link href="/BridalDress" className="font-semibold hover:text-[#C5A88D] transition duration-300">Bridal Dress</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}














