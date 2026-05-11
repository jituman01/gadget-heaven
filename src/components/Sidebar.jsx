const categories = [
  'All Product',
  'MacBook',
  'Accessories',
  'Phones',
  'Smart Watches',
  'Iphone',
  'Laptops',
];

export default function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <div className="bg-white p-4 md:p-3 rounded-2xl flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-visible scrollbar-hide shrink-0 ">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-2.5 md:py-4 text-center rounded-full font-medium transition-all whitespace-nowrap cursor-pointer text-sm md:text-base ${
            activeCategory === cat
              ? 'bg-[#9538E2] text-white '
              : 'bg-gray-100 text-gray-500 hover:bg-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}