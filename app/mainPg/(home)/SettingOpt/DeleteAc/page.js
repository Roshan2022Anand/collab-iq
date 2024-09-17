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
        <div>Delete user</div>
    )
}

export default page