
export default function Newsletter() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto bg-[#9538E2] rounded-l overflow-hidden relative ">


        {/* === Visual Bubble Design === */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white opacity-[0.07] rounded-full -mr-[100px] -mt-[100px] z-0 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-white opacity-[0.07] rounded-full -ml-[50px] -mb-[50px] z-0 animate-pulse"></div>
        <div className="absolute top-1/5 left-1/4 w-[60px] h-[60px] bg-white opacity-[0.07] rounded-full z-0 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-[100px] h-[100px] bg-white opacity-[0.07] rounded-full z-0 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>


        
        <div className="relative z-10 px-6 py-16 md:py-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-purple-100 max-w-2xl mx-auto mb-10 text-lg">
            Subscribe to our newsletter and be the first to know about the latest gadgets, 
            exclusive deals, and tech trends straight to your inbox!
          </p>

          <form 
            // onSubmit={(e) => e.preventDefault()} 
            className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-full text-gray-100 focus:outline-none border transition-all shadow-md shadow-gray-300"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-white text-[#9538E2] px-10 py-4 rounded-full font-bold hover:bg-purple-100 transition-colors shadow-lg active:scale-95 cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-6 text-sm text-purple-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}