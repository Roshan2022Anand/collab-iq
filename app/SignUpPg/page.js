import React from 'react'
import AuthSignUp from '@/Components/AuthSignUp'
const page = () => {
    return (
        <>
            <main className='w-full h-screen flex items-center justify-center'>
                <div className='flex flex-col items-center justify-evenly h-2/3 w-2/3 max-w-[700px] border-2 rounded-2xl p-10'>
                    <div>
                        <img />
                        <h1>COLEARN</h1>
                    </div>
                    <p>Join colearn for free</p>
                    <AuthSignUp />
                    <fieldset className="text-center border-t-2 w-full">
                        <legend className="text-sm text-gray-500 px-2">Or sign up with Email</legend>
                    </fieldset>

                    <form className="w-full flex flex-col gap-2">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                className='w-full rounded-2xl p-2 bg-transparent border-2 border-gray-500'
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mt-4 text-sm">
                            <p>
                                Already have an account?
                                <a href="/LoginPg" className="text-blue-500 hover:underline ml-1">Log in</a>
                            </p>
                        </div>

                        <div className="w-full text-right">
                            <button type="submit" className='btn-style-two'>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default page