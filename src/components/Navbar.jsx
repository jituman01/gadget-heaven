'use client';

import React from 'react';
import Link from 'next/link';
import { PiShoppingCartBold, PiHeartBold } from 'react-icons/pi';
import HeroSection from './HeroSection';

export default function Navbar() {
  return (
    <section className="px-4 pt-4">
      <div className="bg-[#9538E2] rounded-[32px] pb-60 text-white relative">
        <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
          <div className="font-bold text-xl">
            <Link href="/">Gadget Heaven</Link>
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            <Link href="/" className="underline underline-offset-4">
              Home
            </Link>
            <Link href="/statistics" className="opacity-80 hover:opacity-100">
              Statistics
            </Link>
            <Link href="/dashboard" className="opacity-80 hover:opacity-100">
              Dashboard
            </Link>
          </div>

          <div className="flex gap-3">
            <button className="p-3 bg-white text-black rounded-full shadow-lg hover:scale-110 transition">
              <PiShoppingCartBold size={20} />
            </button>
            <button className="p-3 bg-white text-black rounded-full shadow-lg hover:scale-110 transition">
              <PiHeartBold size={20} />
            </button>
          </div>
        </nav>

        <div className="flex flex-col items-center text-center mt-16 px-6">
          <h1 className="text-4xl md:text-6xl font-bold max-w-5xl leading-tight">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="mt-10 bg-white text-[#9538E2] font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[75%] w-[90%] md:w-[75%] max-w-6xl">
          <HeroSection/>
        </div>
      </div>

      <div className="h-[250px] md:h-[450px]"></div>
    </section>
  );
}
