'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { ArrowUp, Trash, Trash2 } from 'lucide-react';
import PurchaseModal from '@/components/PurchaseModal';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cart');
  const { cart, wishlist, removeFromCart, removeFromWishlist, addToCart, clearCart } = useCart();
  
  const [displayCart, setDisplayCart] = useState([]);
  const [isAscending, setIsAscending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchasedAmount, setPurchasedAmount] = useState(0);
  
  const router = useRouter();

  useEffect(() => {
    setDisplayCart(cart);
  }, [cart]);

  const handleSortByPrice = () => {
    if (displayCart.length > 0) {
      const sorted = [...displayCart].sort((a, b) => {
        return isAscending ? a.price - b.price : b.price - a.price;
      });
      setDisplayCart(sorted);
      setIsAscending(!isAscending);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Purchase Handle Logic
  const handlePurchase = () => {
    if (cart.length > 0) {
      setPurchasedAmount(totalPrice.toFixed(2));
      setIsModalOpen(true);
    }
  };

  // Modal Close Handle Logic
  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearCart(); 
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#9538E2] text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="max-w-2xl mx-auto opacity-90 mb-8 px-4">
          Explore the latest gadgets that will take your experience to the next level.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-12 py-3 rounded-full font-bold transition-all cursor-pointer ${
              activeTab === 'cart' ? 'bg-white text-[#9538E2]' : 'border border-white text-white'
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`px-12 py-3 rounded-full font-bold transition-all cursor-pointer ${
              activeTab === 'wishlist' ? 'bg-white text-[#9538E2]' : 'border border-white text-white'
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* CART TAB CONTENT */}
        {activeTab === 'cart' && (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold">Cart</h2>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <span className="text-xl font-bold">
                  Total cost: ${totalPrice.toFixed(2)}
                </span>
                <button
                  onClick={handleSortByPrice}
                  className="border-2 border-[#9538E2] text-[#9538E2] px-6 py-2.5 rounded-full font-bold hover:bg-purple-50 transition flex items-center gap-2 cursor-pointer"
                >
                  Sort by Price ({isAscending ? 'Low to High' : 'High to Low'})
                  <span className={`transition-transform ${isAscending ? 'rotate-180' : 'rotate-0'}`}>
                    <ArrowUp size={20} />
                  </span>
                </button>
                <button 
                  onClick={handlePurchase}
                  disabled={cart.length === 0}
                  className="bg-[#9538E2] text-white px-8 py-2.5 rounded-full font-bold disabled:bg-gray-400  cursor-pointer"
                >
                  Purchase
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {displayCart.length > 0 ? (
                displayCart.map((item, index) => (
                  <div
                    key={`${item.product_id}-${index}`}
                    className="bg-white p-6 rounded-2xl flex items-center gap-8 shadow-sm border relative"
                  >
                    <img src={item.product_image} className="w-48 h-32 object-contain bg-gray-100 rounded-xl" />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold">{item.product_title}</h3>
                      <p className="text-gray-500 my-2">{item.description}</p>
                      <p className="text-xl font-bold text-gray-800">Price: $ {item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product_id)}
                      className="absolute top-6 right-6 text-red-500 text-3xl hover:scale-110 transition cursor-pointer"
                    >
                      <Trash/>
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center py-20 text-gray-400 text-xl font-medium">Your Cart is empty!</p>
              )}
            </div>
          </>
        )}

        {/* WISHLIST TAB CONTENT */}
        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8">Wishlist</h2>
            {wishlist.length > 0 ? (
              wishlist.map((item, index) => (
                <div
                  key={`${item.product_id}-${index}`}
                  className="bg-white p-6 rounded-2xl flex items-center gap-8 shadow-sm border relative"
                >
                  <img src={item.product_image} className="w-48 h-32 object-contain bg-gray-100 rounded-xl" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{item.product_title}</h3>
                    <p className="text-gray-500 my-2">{item.description}</p>
                    <p className="text-xl font-bold text-gray-800 mb-4">Price: $ {item.price}</p>
                    <button
                      onClick={() => {
                        addToCart(item);
                        removeFromWishlist(item.product_id);
                      }}
                      className="bg-[#9538E2] text-white px-8 py-2 rounded-full font-bold hover:bg-purple-700 transition cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item.product_id)}
                    className="absolute top-6 right-6 text-red-500 text-3xl hover:scale-110 transition cursor-pointer"
                  >
                    <Trash2/>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center py-20 text-gray-400 text-xl font-medium">Your Wishlist is empty!</p>
            )}
          </div>
        )}
      </div>

      {/* Purchase Modal */}
      <PurchaseModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        totalPrice={purchasedAmount} 
      />
    </div>
  );
}