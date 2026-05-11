'use client';
import { Heart, ShoppingCart } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch('https://gadget-heaven-amber.vercel.app/data.json');
      const data = await res.json();
      const singleProduct = data.find(item => item.product_id === id);
      setProduct(singleProduct);
    };
    fetchDetails();
  }, [id]);

  if (!product) return <div className="text-center py-20 text-2xl">Loading...</div>;

  return (
    <div className="relative pb-20">
      <div className="bg-[#9538E2] text-white pt-10 pb-48 text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Product Details</h1>
        <p className="max-w-2xl mx-auto opacity-90">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="max-w-6xl mx-auto -mt-30 bg-white rounded-3xl p-8  flex flex-col md:flex-row gap-9">
        <div className="w-full md:w-1/3 rounded-2xl flex items-center justify-center">
           <img src={product.product_image} alt={product.product_title} className="w-[400px] h-auto rounded-lg" />
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold">{product.product_title}</h2>
          <p className="text-xl font-semibold text-gray-700">Price: $ {product.price}</p>
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full border border-green-300 text-sm font-bold ">
            {product.availability ? "In Stock" : "Out of Stock"}
          </span>
          <p className="text-gray-500 mt-4">{product.description}</p>
          
          <div>
            <h4 className="font-bold mb-2">Specification:</h4>
            <ol className="list-decimal list-inside text-gray-500">
              {product.specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ol>
          </div>

          {/* Rating Section */}
<div className="space-y-2 flex ">
  <h4 className="font-bold text-gray-900 flex items-center gap-1">
    Rating <span className="text-yellow-500">★</span>
  </h4>
  
  <div className="flex items-center gap-4">
    <div >
      
    </div>
    
    <span className="bg-gray-100 px-4 py-1.5 rounded-full text-sm font-extrabold text-gray-700 border border-gray-200 shadow-sm">
      {product.rating}
    </span>
  </div>
</div>

          <div className="pt-4 flex items-center gap-4">
            <button className="bg-[#9538E2] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2">
              Add To Cart <ShoppingCart/>
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100 transition-all">
              <Heart/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}