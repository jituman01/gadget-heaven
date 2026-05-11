const categories = ["All Product", "Laptops", "Phones", "Accessories", "Smart Watches", "MacBook", "Iphone"];

export default function Sidebar({ activeCategory, setActiveCategory }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border flex flex-col gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-6 py-3 rounded-full text-left font-medium transition-all ${
            activeCategory === cat 
            ? "bg-[#9538E2] text-white" 
            : "bg-gray-100 text-gray-500 hover:bg-gray-200 shadow-sm"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}