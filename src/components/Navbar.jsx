'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PiShoppingCartBold, PiHeartBold } from 'react-icons/pi';
import HeroSection from './HeroSection';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <section className={`px-6 pt-6 ${!isHome ? 'bg-white' : ''}`}>
      {/* home page and others page navbar changes */}
      <div className={`${isHome ? 'bg-[#9538E2] rounded-[32px] pb-60 text-white relative' : 'text-black'}`}>
        
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center px-10 py-2 max-w-7xl mx-auto">
          <div className="font-bold text-xl">
            <Link href="/">Gadget Heaven</Link>
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            <Link 
              href="/" 
              className={pathname === '/' ? "text-white border-b-2 font-bold" : "opacity-80 hover:opacity-100"}
            >
              Home
            </Link>
            <Link 
              href="/statistics" 
              className={pathname === '/statistics' ? "text-[#9538E2] border-b-2 font-bold" : "opacity-80 hover:opacity-100"}
            >
              Statistics
            </Link>
            <Link 
              href="/dashboard" 
              className={pathname === '/dashboard' ? "text-[#9538E2] border-b-2 font-bold" : "opacity-80 hover:opacity-100"}
            >
              Dashboard
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex gap-3">
            <button className={`p-3 rounded-full shadow-lg hover:scale-110 transition border ${isHome ? 'bg-white text-black' : 'bg-white text-black border-gray-200'}`}>
              <PiShoppingCartBold size={20} />
            </button>
            <button className={`p-3 rounded-full shadow-lg hover:scale-110 transition border ${isHome ? 'bg-white text-black' : 'bg-white text-black border-gray-200'}`}>
              <PiHeartBold size={20} />
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        {isHome && (
          <>
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

            {/*  Hero  */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[75%] w-[90%] md:w-[75%] max-w-6xl">
              <HeroSection />
            </div>
          </>
        )}
      </div>

      {/* Spacing logic */}
      {isHome ? (
        <div className="h-[250px] md:h-[450px]"></div>
      ) : (
        <div className="h-4"></div> 
      )}
    </section>
  );
}