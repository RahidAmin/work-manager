'use client'
import React from 'react'

const SignUpClient = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const about = e.target.about.value;
        const setData = {
            name,
            email,
            password,
            about,
            imageUrl: 'https://i.sstatic.net/l60Hf.png'
        }
        const res = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(setData)

        })
        const result = await res.json();
        console.log(result)

    }


    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 to-white px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-center text-sky-600 mb-5">Sign Up</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                        <input

                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="Your name here"
                            name='name'
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="email here"
                            name='email'
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder=""
                            name='password'
                        />
                    </div>

                    {/* About */}
                    <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">About</label>
                        <textarea
                            rows={2}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                            placeholder="A short bio..."
                            name='about'
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between gap-2">
                        <button
                            type="submit"
                            className="w-1/2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium py-2 rounded-lg transition duration-300"
                        >
                            Sign Up
                        </button>
                        {/* <button
                            type="reset"
                            className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium py-2 rounded-lg transition duration-300"
                        >
                            Reset
                        </button> */}

                    </div>
                </form>

                <p className="text-center text-xs text-gray-500 mt-4">
                    Already registered?{" "}
                    <a href="#" className="text-sky-600 font-medium hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignUpClient
