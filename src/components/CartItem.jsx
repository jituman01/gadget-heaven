import { Trash } from 'lucide-react';

export default function CartItem({ item, onRemove }) {
  return (
    <div className="bg-white p-6 rounded-2xl flex items-center gap-8 border border-gray-200 relative">
      <img
        src={item.product_image}
        className="w-48 h-32 object-cover rounded-xl"
        alt={item.product_title}
      />
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{item.product_title}</h3>
        <p className="text-gray-500 my-2">{item.description}</p>
        <p className="text-xl font-bold text-gray-800">Price: $ {item.price}</p>
      </div>
      <button
        onClick={() => onRemove(item.product_id)}
        className="absolute top-6 right-6 text-red-500 text-3xl hover:scale-110 transition cursor-pointer"
      >
        <Trash />
      </button>
    </div>
  );
}