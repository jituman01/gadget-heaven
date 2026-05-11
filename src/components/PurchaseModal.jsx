'use client';

import Image from "next/image";

export default function PurchaseModal({ isOpen, onClose, totalPrice }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <Image
              src='/assets/Group.png'
              width={50}
              height={50}
              alt="successfull-icon"
            />
              
            

          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Payment Successfully</h2>
        <div className="w-full h-[1px] bg-gray-200 my-4"></div>
        <p className="text-gray-500 font-medium">Thanks for purchasing.</p>
        <p className="text-gray-500 font-bold mb-6">Total: ${totalPrice}</p>
        
        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-full hover:bg-gray-300 transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}