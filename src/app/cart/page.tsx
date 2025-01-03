
"use client";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
//import { RiBallPenFill } from "react-icons/ri";
import { useCart } from "../context/cartcontext";
import Image from "next/image";

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setIsSidebarOpen(false);
  };

  const itemTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 0;
  const discount = 0;
  const totalAmount = itemTotal + shipping - discount;

  return (
    <div className="font-sans container mx-auto p-6 bg-ivory">
      <div className="p-10 text-left">
        <div className="flex items-center">
          <div className="w-2 h-12 bg-taupe text-white rounded-full mr-4"></div>
          <h1 className="text-4xl font-semibold text-taupe">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600 mt-4">Your cart is empty</p>
        ) : (
          <div className="mt-8">
            <div className="overflow-x-auto hidden sm:block">
              <table className="min-w-full bg-[#e7dab7] shadow-lg rounded-lg">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-taupe uppercase">
                      ITEM
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-taupe uppercase">
                      PRICE
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-taupe uppercase">
                      QUANTITY
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-taupe uppercase">
                      SUBTOTAL
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-taupe uppercase">
                      REMOVE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border-b border-gray-300">
                        <div className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="mr-4"
                          />
                          <div>
                            <div className="text-sm">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        ${item.price}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            className="text-taupe focus:outline-none"
                          >
                            <FiMinus />
                          </button>
                          <span className="mx-2 text-gray-700">{item.quantity}</span>
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            className="text-taupe focus:outline-none"
                          >
                            <GoPlus />
                          </button>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 focus:outline-none"
                        >
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg mb-4 p-4 flex flex-col items-start bg-gray-50"
                >
                  <div className="flex items-center w-full mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        className="text-taupe focus:outline-none"
                      >
                        <FiMinus />
                      </button>
                      <span className="mx-2 text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="text-taupe focus:outline-none"
                      >
                        <GoPlus />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 focus:outline-none"
                    >
                      <FaTrash className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={toggleSidebar}
                className="px-8 py-2 bg-[#A49D89] text-taupe border-2 border-taupe hover:bg-[#3a3422] hover:text-ivory transition-colors duration-300 w-40"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar with Checkout*/}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 bg-[#dac58b] bg-gradient-to-b from-taupe via-ivory to-white w-full sm:w-80 h-full p-6 overflow-y-auto">
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white text-2xl">
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-white">Checkout</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-white">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span className="text-white">Item Total:</span>
                <span>${itemTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-white">Discount:</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-semibold">
                <span className="text-white">Total:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Payment Information</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm text-white" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm text-white" htmlFor="payment">Payment Method</label>
                  <select id="payment" className="w-full p-2 border border-gray-300 rounded mt-1">
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleCheckout}
                    className="w-full px-8 py-2 bg-taupe text-white border-2 border-taupe hover:bg-white hover:text-taupe hover:border-taupe transition-colors duration-300"
                  >
                    Complete Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Success */}
      {isCheckoutSuccess && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-8 shadow-lg rounded-lg w-80">
            <h3 className="text-xl font-semibold text-green-600 mb-4">
              Checkout Successful!
            </h3>
            <p className="text-gray-700">Thank you for your purchase!</p>
            <button
              onClick={() => setIsCheckoutSuccess(false)}
              className="mt-4 px-6 py-2 bg-taupe text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
