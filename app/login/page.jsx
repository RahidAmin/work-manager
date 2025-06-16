'use client'
import React from 'react'

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-white px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-center text-sky-600 mb-5">Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">


                    {/* Email */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            autoComplete="off"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder=""
                            name='email'
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            autoComplete="off"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder=""

                            name='password'
                        />
                    </div>



                    {/* Buttons */}
                    <div className="flex justify-between gap-2">
                        <button
                            type="submit"
                            autoComplete='off'
                            className="w-1/2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium py-2 rounded-lg transition duration-300"
                        >
                            Login
                        </button>

                    </div>
                </form>


            </div>
        </div>
    )
}

export default Login
