'use client';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All Product');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('https://gadget-heaven-amber.vercel.app/data.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  useEffect(() => {
    setShowAll(false);
    if (activeCategory === 'All Product') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        item => item.category === activeCategory
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory, products]);

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4">
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/* Right Product Section */}
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <ProductCard key={product.product_id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-2xl font-bold text-[#9538E2]">
              No Products Found in this Category!
            </div>
          )}
        </div>

        {!showAll && filteredProducts.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#9538E2] text-white px-10 py-3 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
