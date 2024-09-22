"use client"
import React, { useContext } from 'react'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import { MyContext } from '@/Components/Mycontext'
const page = () => {

    const {userData} = useContext(MyContext);

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
            let userEmail = userData.email
            const res = await axios.post("/api/DeleteUser", { userEmail })
            handleSignOut()
        } catch (error) {
            console.error("Error deleting account:", error)
        }
    }
    return (
        <section>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Sign out</h1>
                <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 mt-4">Sign Out</button>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold">Delete Account</h1>
                <p className="text-center">Are you sure you want to delete your account?</p>
                <button onClick={handleDeleteAccount} className="bg-red-500 text-white px-4 py-2 mt-4">Delete Account</button>
            </div>
        </section>
    )
}

export default page