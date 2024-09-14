"use client"
import React from 'react'
import AuthSignUp from '@/Components/signup-components/AuthSignUp'
import styles from "@/app/(authPg)/authPg.module.css"
const page = () => {
    return (
        <>
            <main className={styles.main}>
                <div>
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