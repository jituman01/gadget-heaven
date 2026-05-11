import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white py-16 mt-12">
            <div className="container mx-auto px-4">
                {/* --- Top Section: Title & Description --- */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-black mb-3">Gadget Heaven</h2>
                    <p className="text-gray-500 font-medium">
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                </div>

                {/* --- Divider Line --- */}
                <div className="border-t border-gray-200 mb-12 max-w-6xl mx-auto"></div>

                {/* --- Bottom Section: Links Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto">
                    
                    {/* Services Column */}
                    <div>
                        <h3 className="font-bold text-black mb-4 text-lg">Services</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:underline">Product Support</a></li>
                            <li><a href="#" className="hover:underline">Order Tracking</a></li>
                            <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:underline">Returns</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-bold text-black mb-4 text-lg">Company</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-bold text-black mb-4 text-lg">Legal</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;