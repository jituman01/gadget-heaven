'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ArrowUp } from 'lucide-react';
import PurchaseModal from '@/components/PurchaseModal';
import CartItem from '@/components/CartItem';
import WishlistItem from '@/components/WishlistItem';

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

  const handlePurchase = () => {
    if (cart.length > 0) {
      setPurchasedAmount(totalPrice.toFixed(2));
      setIsModalOpen(true);
    }
  };

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
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
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
        {/* CART CONTENT */}
        {activeTab === 'cart' && (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold">Cart</h2>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <span className="text-xl font-bold">Total cost: ${totalPrice.toFixed(2)}</span>
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
                  className="bg-[#9538E2] text-white px-8 py-2.5 rounded-full font-bold disabled:bg-gray-400 cursor-pointer"
                >
                  Purchase
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {displayCart.length > 0 ? (
                displayCart.map((item, index) => (
                  <CartItem key={`${item.product_id}-${index}`} item={item} onRemove={removeFromCart} />
                ))
              ) : (
                <p className="text-center py-20 text-gray-400 text-xl font-medium">Your Cart is empty!</p>
              )}
            </div>
          </>
        )}

        {/* WISHLIST  CONTENT */}
        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-8">Wishlist</h2>
            {wishlist.length > 0 ? (
              wishlist.map((item, index) => (
                <WishlistItem
                  key={`${item.product_id}-${index}`}
                  item={item}
                  onRemove={removeFromWishlist}
                  onAddToCart={(item) => {
                    addToCart(item);
                    removeFromWishlist(item.product_id);
                  }}
                />
              ))
            ) : (
              <p className="text-center py-20 text-gray-400 text-xl font-medium">Your Wishlist is empty!</p>
            )}
          </div>
        )}
      </div>

      <PurchaseModal isOpen={isModalOpen} onClose={handleCloseModal} totalPrice={purchasedAmount} />
    </div>
  );
}