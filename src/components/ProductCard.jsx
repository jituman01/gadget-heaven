export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-4">
      <div className="bg-gray-200 rounded-xl overflow-hidden h-44">
        <img 
          src={product.product_image} 
          alt={product.product_title}
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{product.product_title}</h3>
        <p className="text-gray-500 font-semibold mt-1">Price: {product.price}$</p>
      </div>
      <button className="w-fit border-2 border-[#9538E2] text-[#9538E2] px-2 py-1 rounded-full font-bold hover:bg-[#9538E2] hover:text-white transition-colors duration-300">
        View Details
      </button>
    </div>
  );
}