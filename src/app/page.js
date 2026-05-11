import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative z-50">
      </div>

      {/* ProductsSection */}
      <main className="max-w-7xl mx-auto px-4 mt-10 md:mt-24 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-12">
          Explore Cutting-Edge Gadgets
        </h2>

        <ProductsSection />
        <Newsletter/>
        <Testimonials/>
      </main>
    </div>
  );
}