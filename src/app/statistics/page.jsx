'use client';
import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

export default function StatisticsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://gadget-heaven-amber.vercel.app/data.json');
        const products = await response.json();
        
        const formattedData = products.map(item => ({
          name: item.product_title,
          price: item.price,
          rating: item.rating
        }));
        
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="bg-[#9538E2] text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Statistics</h1>
        <p className="max-w-2xl mx-auto opacity-90 px-4">
          Explore the latest gadgets that will take your experience to the next level. 
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Statistics</h2>

        <div className="bg-white p-6 rounded-xl  h-[500px]">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: '', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                
                <Area type="monotone" dataKey="price" fill="#EAD7FB" stroke="#9538E2" />
                
                <Bar dataKey="price" barSize={40} fill="#9538E2" />
                
                <Scatter dataKey="rating" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500 font-medium">Loading Statistics...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}