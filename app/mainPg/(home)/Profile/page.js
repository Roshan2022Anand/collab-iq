"use client"
import { MyContext } from '@/Components/Mycontext';
import React, { useContext, useEffect, useState } from 'react'
import styles from "@/app/mainPg/(home)/mainPg.module.css"
const page = () => {

    const { userData } = useContext(MyContext);

    const [editingMode, seteditingMode] = useState(false)
    const [userName, setuserName] = useState(null);
    const [userAge, setuserAge] = useState(null);
    const [userQualification, setuserQualification] = useState(null);
    const [userField, setuserField] = useState(null);
    const [userBio, setuserBio] = useState(null);

    useEffect(() => {
        if (userData) {
            setuserName(userData.name);
            setuserAge(userData.age)
            setuserQualification(userData.qualification)
            setuserField(userData.field);
            setuserBio(userData.bio)
        }
    }, [])

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

    const editOrSave = () => {
        let inputArr = document.querySelectorAll('input')
        if (editingMode) inputArr.forEach(input => input.disabled = true)
        else inputArr.forEach(input => input.disabled = false)
        seteditingMode(!editingMode)
    }
    return (
        <main className='w-full h-full flex p-1'>
            <section className='w-1/4 border-2'></section>
            <section className={`${styles['profile-section-2']}`}>
                <div>
                    <img />
                    <button onClick={editOrSave}>{(editingMode) ? "Save" : "Edit"}</button>
                </div>
                <div>
                    <p>Name</p>
                    <input type='text' value={userName} disabled="true" />
                </div>
                <div>
                    <p>Bio</p>
                    <input type='text' value={userBio} disabled="true" />
                </div>
                <div>
                    <p>Age</p>
                    <input type='text' value={userAge} disabled="true" />
                </div>
                <div>
                    <p>Qualification</p>
                    <input type='text' value={userQualification} disabled="true" />
                </div>
                <div>
                    <p>Field</p>
                    <input type='text' value={userField} disabled="true" />
                </div>

            </section>
        </main>
    )
}

export default page


