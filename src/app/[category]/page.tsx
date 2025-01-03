'use client'
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../context/cartcontext';

const products = {
  LongFrocks: [
    { id: 1, name: 'Rose Elegance Frock', price: 3000, image: '/E1.webp' },
    { id: 2, name: 'Aurora Golden Glow Frock', price: 2500, image: '/E2.webp' },
    { id: 3, name: 'Celestial Charm Frock', price: 1500, image: '/E3.webp' },
  ],
  WesternWear: [
    { id: 1, name: 'Elegant Western Dress', price: 1100, image: '/L1.avif' },
    { id: 2, name: 'Chic Red Dress', price: 2000, image: '/L2.jpg' },
    { id: 3, name: 'Stylish Denim Jumpsuit', price: 1200, image: '/L3.avif' },
  ],
  Saree: [
    { id: 1, name: 'Stylish Pink Saree', price: 1350, image: '/W1.webp' },
    { id: 2, name: 'Embroidered Black Saree', price: 1670, image: '/W2.webp' },
    { id: 3, name: 'Coat Saree', price: 2590, image: '/W3.webp' },
  ],
  BridalDress: [
    { id: 1, name: 'peach Bridal Gown', price: 1500, image: '/N1.avif' },
    { id: 2, name: 'Silver Embroidered Bridal Lehenga', price: 1000, image: '/N2.webp' },
    { id: 3, name: 'Golden Traditional Bridal Attire', price: 1000, image: '/N3.jpg' },
  ],
  BallGown: [
    { id: 1, name: 'Sparkling Pink Ball Gown', price: 1400, image: '/A1.webp' },
    { id: 2, name: 'Classic Navy Blue Ball Gown', price: 2000, image: '/A2.jpg' },
    { id: 3, name: ' Silver Ball Gown', price: 1000, image: '/A3.webp' },
  ],
  PantShirt: [
    { id: 1, name: 'Classic White Shirt with Brown Pants', price: 1500, image: '/J1.webp' },
    { id: 2, name: 'Formal Black Suit', price: 1300, image: '/J2.webp' },
    { id: 3, name: 'Casual Blue Shirt with Jeans', price: 2000, image: '/J3.jpg' },
  ],
  Casual: [
    { id: 1, name: 'Comfortable Cotton Kurta', price: 1900, image: '/F1.webp' },
    { id: 2, name: 'Casual Dress', price: 1100, image: '/F2.webp' },
    { id: 6, name: 'Relaxed Fit Trousers', price: 2000, image: '/F3.webp' },
  ],
  Lehenga: [
    { id: 1, name: 'Traditional Green Bridal Lehenga', price: 1400, image: '/B1.avif' },
    { id: 2, name: 'Modern White Lehenga', price: 1300, image: '/B2.avif' },
    { id: 3, name: 'Embroidered Golden Lehenga', price: 2000, image: '/B3.avif' },
  ],
};

const CategoryPage = () => {
  const params = useParams();
  const { category } = params as { category: keyof typeof products };
  const { addToCart } = useCart();

  const categoryProducts = products[category] || [];

  if (categoryProducts.length === 0) {
    return <div>No products found for this category.</div>;
  }

  return (
    <section className="bg-[#F5F5ED] text-gray-800 body-font overflow-x-hidden">
      <div className="container px-3 py-12 mx-auto max-w-full">
        <div className="text-center mb-5">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#5D5346]">
            {category} Collection
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-[#B2A890] inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {categoryProducts.map((product) => (
            <div key={product.id} className="p-4 w-full sm:w-1/2 md:w-1/3 mb-6">
              <div className="border-2 border-[#B2A890] rounded-lg p-4 hover:border-[#7F7464] transition-all duration-300 ease-in-out">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={1100}
                    height={400}
                    className="object-cover object-center h-full w-full"
                  />
                </div>
                <h2 className="text-2xl font-bold title-font text-[#5D5346] mt-5 text-center">
                  {product.name}
                </h2>
                <div className="text-center font-bold text-3xl mt-3 mb-3">
                  ${product.price}
                </div>
                <div className="flex mt-3 justify-center">
                  <button
                    onClick={() => addToCart({ ...product, quantity: 1 })}
                    className="text-white bg-[#A49D89] border-0 py-2 px-6 focus:outline-none hover:bg-[#7F7464] rounded flex items-center space-x-2 group"
                  >
                    <MdOutlineShoppingCart className="group-hover:animate-bounce" />
                    Add to Cart
                  </button>
                </div>
                <div className="flex mt-3 justify-center">
                  <Link href={`/${category}/${product.id}`}>
                    <button className="text-white bg-[#A49D89] border-0 py-2 px-6 focus:outline-none hover:bg-[#7F7464] rounded flex items-center space-x-2 group">
                      <FaRegCheckCircle className="group-hover:animate-bounce text-[#5D5346]" />
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;