import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Naimur Rahman",
    role: "Tech Enthusiast",
    review: "The MacBook Air I bought from Gadget Heaven is amazing! Their service is top-notch and delivery was super fast.",
    image: "https://images.unsplash.com/photo-1562886941-29ee3df59584?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Tarin Tuba",
    role: "Graphic Designer",
    review: "Finding genuine accessories in Bangladesh is hard, but this shop is a lifesaver. Highly recommended for original products!",
    image: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 3,
    name: "Sabbir Ahmed",
    role: "Software Engineer",
    review: "Best prices for latest iPhones. The warranty support and customer behavior made me a permanent customer.",
    image: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#09080F]">What Our Customers Say</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore the experiences of people who have upgraded their lifestyle with our gadgets.
        </p>

        {/* Grid for Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-2 rounded-3xl border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-full border-4 border-purple-100 group-hover:border-[#9538E2] transition-colors"
                />

                
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#09080F]">{item.name}</h4>
              <p className="text-sm text-[#9538E2] font-medium">{item.role}</p>
              </div>
              
              <div className="flex justify-center mb-4 text-yellow-400">
                {/* 5 Star Icons */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic mb-6">{item.review}</p>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}