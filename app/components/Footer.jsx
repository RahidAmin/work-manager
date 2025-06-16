'use client'

import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-10">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo + Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">YourLogo</h2>
                        <p className="text-gray-400">
                            Creating digital experiences with modern technologies. Let's build something great together.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Home</a></li>
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Services</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaFacebookF /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaTwitter /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaInstagram /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} YourCompany. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer
