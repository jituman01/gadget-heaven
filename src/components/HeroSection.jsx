import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <div>
       <div className="p-4 border-2 border-white/20 rounded-[35px] backdrop-blur-md bg-white/10">
            <div className="bg-gray-200 rounded-[24px] overflow-hidden">
              <Image
                width={1200}
                height={300}
                alt="banner-image"
                src="/assets/banner.jpg"
                className="md:h-[500px] object-cover"
              />
            </div>
          </div>
    </div>
  );
};

export default HeroSection;