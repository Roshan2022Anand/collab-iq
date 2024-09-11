'use client'
import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '@/Components/Mycontext'
import { signOut } from 'next-auth/react'
import axios from 'axios'
const Page = () => {
    const { newUser, userEmail, router } = useContext(MyContext)

    //all states are defined here
    const [userData, setUserData] = useState()
    const [stats, setStats] = useState()

    //sign out function
    const handleSignOut = async () => {
        try {
            await signOut({ redirect: false })
            router.push("/")
        } catch (error) {
            console.error("Error signing out:", error)
        }
    }
    //delete account function
    const handleDeleteAccount = async () => {
        try {
            const res = await axios.post("/api/DeleteUser", { userEmail })
            handleSignOut()
        } catch (error) {
            console.error("Error deleting account:", error)
        }
    }
    //get user data from DB
    useEffect(() => {
        const getUserData = async () => {
            try {
                const res = await axios.post("/api/GetUserData", { userEmail })
                setUserData(res.data.user)
                setStats(res.data.stats)
            } catch (error) {
                console.error("Error getting user data:", error)
            }
        }
        getUserData();
    }, [])



    return (
        <>
            <div className='w-screen h-screen flex flex-col items-center justify-center'>
                <p>home page</p>
                <div>
                    {userData && stats ? (
                        <div className="flex flex-col gap-4 shadow-md rounded-lg p-6 mb-4">
                            <h2 className="text-2xl font-bold mb-4">User Information</h2>
                            <p className="font-semibold">Name:{userData.name}</p>
                            <p className="font-semibold">Age:{userData.age}</p>
                            <p className="font-semibold">Email:{userData.email}</p>
                            <p className="font-semibold">Qualification:{userData.qualification}</p>
                            <p className="font-semibold">Field:{userData.field}</p>
                            <p className="font-semibold">Progress:{stats.progress}%</p>
                        </div>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                </div>
                <button
                    onClick={handleSignOut}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                    Sign Out
                </button>
                <button
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleDeleteAccount}
                >
                    delete account
                </button>
            </div>
        </>
    )
}

export default Page