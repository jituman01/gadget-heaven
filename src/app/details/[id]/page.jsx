'use client';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext'; 
import { StarFill } from '@gravity-ui/icons';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  const { addToCart, addToWishlist, wishlist } = useCart();

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        'https://gadget-heaven-amber.vercel.app/data.json'
      );
      const data = await res.json();
      const singleProduct = data.find(item => item.product_id === id);
      setProduct(singleProduct);
    };
    fetchDetails();
  }, [id]);

  if (!product)
    return <div className="text-center py-20 text-2xl">Loading...</div>;

  const isInWishlist = wishlist?.some(item => item.product_id === product.product_id);

  return (
    <div className="relative pb-20">
      <div className="bg-[#9538E2] text-white pt-10 pb-48 text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        <p className="max-w-2xl mx-auto opacity-90">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="max-w-6xl mx-auto -mt-40 bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-9 shadow-lg">
        <div className="w-full md:w-1/3 rounded-2xl flex items-center justify-center ">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-auto max-h-[400px] object-contain rounded-lg"
          />
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">{product.product_title}</h2>
          <p className="text-xl font-semibold text-gray-700">
            Price: $ {product.price}
          </p>
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full border border-green-300 text-sm font-bold ">
            {product.availability ? 'In Stock' : 'Out of Stock'}
          </span>
          <p className="text-gray-500 mt-4">{product.description}</p>

          <div>
            <h4 className="font-bold mb-2 text-gray-900">Specification:</h4>
            <ol className="list-decimal list-inside text-gray-500">
              {product.specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ol>
          </div>

          <div className=" flex">
            <h4 className="font-bold text-gray-900 flex items-center gap-1">
              Rating
            </h4>

            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                <StarFill/><StarFill/><StarFill/><StarFill/>
              </div>

              <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-extrabold text-gray-700 border border-gray-200">
                {product.rating}
              </span>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            {/* Add to Cart button logic */}
            <button 
              onClick={() => addToCart(product)}
              className="bg-[#9538E2] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-purple-700 transition cursor-pointer"
            >
              Add To Cart <ShoppingCart size={20} />
            </button>
            
            {/* Wishlist button with disable logic */}
            <button 
              disabled={isInWishlist}
              onClick={() => addToWishlist(product)}
              className={`p-3 border rounded-full transition-all ${
                isInWishlist 
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200' 
                : 'hover:bg-gray-100 text-gray-700'
              }`}
            >

              <Heart 
                    className={`w-6 h-6 transition-colors duration-300 cursor-pointer ${
                 isInWishlist 
              ? "text-red-200 fill-red-200 "
              : "text-red-500 fill-none hover:fill-red-500"
  }`} 
/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}