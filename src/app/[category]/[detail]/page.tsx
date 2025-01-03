'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useCart } from '../../context/cartcontext';

// Define Product type
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

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
    { id: 2, name: 'Embroided Black Saree', price: 1670, image: '/W2.webp' },
    { id: 3, name: 'Coat Saree', price: 2590, image: '/W3.webp' },
  ],
  BridalDress: [
    { id: 1, name: 'Peach Bridal Gown', price: 1500, image: '/N1.avif' },
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

const ProductDetailPage = () => {
  const params = useParams();
  const { category, detail } = params as { category: string; detail: string };

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  const categoryProducts = products[category as keyof typeof products] || [];
  const product = categoryProducts.find((p) => p.id === parseInt(detail, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleHeartClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    const productWithQuantity: Product = { ...product, quantity };
    addToCart(productWithQuantity);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };
  return (
    <section className="text-gray-700 body-font overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full h-[500px] relative shadow-lg rounded-xl mb-6 lg:mb-0">
            <Image
              alt={product.name}
              src={product.image}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif" style={{ color: '#483C32' }}>
              {product.name}
            </h1>

            <fieldset className="border border-gray-300 rounded-xl px-6 py-4 shadow-sm mb-6" style={{ backgroundColor: '#EDEDED' }}>
              <legend className="text-sm text-gray-500 px-2 font-semibold">PRICE</legend>
              <span className="text-3xl md:text-4xl font-bold text-gray-800">${product.price}</span>
            </fieldset>

            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-4 py-2" style={{ backgroundColor: '#EDEDED' }}>
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-300"
                  onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 h-8 text-center border-none focus:outline-none"
                  min="1"
                />
                <button
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-300"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <button
                className={`text-3xl focus:outline-none ${isFavorite ? 'text-red-600 scale-110' : 'text-red-600'}`}
                onClick={handleHeartClick}
              >
                {isFavorite ? <FaHeart className="w-8 h-8" /> : <FaRegHeart className="w-8 h-8" />}
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full text-white bg-gradient-to-r from-gray-600 to-gray-700 py-3 rounded-lg"
              >
                Add to Cart
              </button>
              <button className="w-full text-white bg-gradient-to-r from-brown-600 to-brown-700 py-3 rounded-lg">
                Buy Now
              </button>
            </div>

            {showPopup && (
              <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-brown-400 via-brown-500 to-brown-700 text-white rounded-xl w-3/4 max-w-md p-6">
                <p className="text-xl font-semibold text-center">Added to Cart!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;