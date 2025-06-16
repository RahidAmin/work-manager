'use client'

import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import { FaTasks, FaHome, FaPlus, FaList, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const CustomNavbar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', icon: <FaHome />, href: '/' },
        { name: 'Add Task', icon: <FaPlus />, href: '/add-task' },
        { name: 'Show Tasks', icon: <FaList />, href: '/show-tasks' },
        { name: 'Login', icon: <FaSignInAlt />, href: '/login' },
        { name: 'Signup', icon: <FaUserPlus />, href: '/signUp' },
    ];


    return (
        <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
                        <FaTasks className="text-cyan-400" />
                        <span>Work Manager</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-1 hover:text-cyan-400 transition"
                            >
                                {link.icon}
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            onClick={() => setIsOpen(false)}
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 hover:text-cyan-400 transition"
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default CustomNavbar
