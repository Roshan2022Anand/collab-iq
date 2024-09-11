import React from 'react'
import AuthLogin from '@/Components/AuthLogin'
const page = () => {
    return (
        <main className='w-full h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center justify-evenly h-2/3 w-2/3 max-w-[700px] border-2 rounded-2xl p-10'>
                <div>
                    <img />
                    <h1>COLEARN</h1>
                </div>
                <p>Welcome back!</p>
                <AuthLogin />
                <fieldset className="text-center border-t-2 w-full">
                    <legend className="text-sm text-gray-500 px-2">Log in with your Colearn Account</legend>
                </fieldset>

                <form className="w-full flex flex-col gap-2">

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        className='w-full rounded-2xl p-2 bg-transparent border-2 border-gray-500'
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        className='w-full rounded-2xl p-2 bg-transparent border-2 border-gray-500'
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                    />
                    <a href="/LoginPg" className="text-blue-500 hover:underline ml-1">Forgot Password?</a>

                    <div className="w-full text-right">
                        <button type="submit" className='btn-style-two'>Login</button>
                    </div>
                    <div className="mt-4 border-t-2 w-full"></div>
                    <p className='text-center'>Don't have an account? <a href="/SignUpPg" className="text-blue-500 hover:underline ml-1">Sign up</a></p>
                </form>
            </div>
        </main>
    )
}

export default page