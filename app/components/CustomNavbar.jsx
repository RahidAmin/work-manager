'use client'

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FaTasks, FaHome, FaPlus, FaList, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import UserContext from '@/Context/userContext';

const CustomNavbar = () => {
    const context = useContext(UserContext);
    console.log(context);
    const [isOpen, setIsOpen] = useState(false);

    const DoLogout = async () => {
        try {
            const data = await fetch('http://localhost:3000/api/logout', {
                method: 'POST'
            })
            console.log(data)
            context.setUser(undefined);

            // if (data.ok) {
            //     window.location.href = '/login'
            // } else {
            //     console.error('Logout failed');
            // }

        } catch (err) {
            console.log(err);
        }

    }


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
                        {context.user &&
                            (
                                <>
                                    <Link href="/" className="flex items-center gap-1 hover:text-cyan-400 transition">
                                        <FaHome />
                                        Home
                                    </Link>
                                    <Link href="/add-task" className="flex items-center gap-1 hover:text-cyan-400 transition">
                                        <FaPlus />
                                        Add Task
                                    </Link>
                                    <Link href="/show-tasks" className="flex items-center gap-1 hover:text-cyan-400 transition">
                                        <FaList />
                                        Show Tasks
                                    </Link>
                                </>
                            )

                        }
                        {
                            context.user ? (<p className='text-white'>{context.user.name}</p>) : (<><Link href="/login" className="flex items-center gap-1 hover:text-cyan-400 transition">
                                <FaSignInAlt />
                                Login
                            </Link></>
                            )
                        }
                        {
                            context.user ? <> <Link href='/login' onClick={DoLogout}>Log out</Link></> : <> <Link href="/signUp" className="flex items-center gap-1 hover:text-cyan-400 transition">
                                <FaUserPlus />
                                Signup
                            </Link> </>
                        }
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-cyan-400 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
            {/* {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="/"
                        className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <FaHome />
                        Home
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="/add-task"
                        className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <FaPlus />
                        Add Task
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="/show-tasks"
                        className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <FaList />
                        Show Tasks
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="/login"
                        className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <FaSignInAlt />
                        Login
                    </Link>
                    <Link
                        onClick={() => setIsOpen(false)}
                        href="/signUp"
                        className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <FaUserPlus />
                        Signup
                    </Link>
                </div>
            )} */}
        </nav>
    );
};

export default CustomNavbar;
