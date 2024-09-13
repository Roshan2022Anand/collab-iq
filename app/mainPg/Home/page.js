'use client'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getSession } from 'next-auth/react'
//importing routes and components
import { signOut } from 'next-auth/react'
import { MyContext } from '@/Components/Mycontext'
import HomeContent from '@/Components/HomeContent'
import ProfileContent from '@/Components/ProfileContent'
import Loader from '@/Components/Loader'
import styles from '@/app/mainPg/mainPg.module.css'
//importing react icons
import { RiHome2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const Page = () => {
    const { newUser, userEmail, setuserEmail, router, setUserData, setUserStats, userData, userStats } = useContext(MyContext)

    //all states are defined here
    const [actionSectionContent, setactionSectionContent] = useState(<HomeContent />);

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
        //fetching the email useign session if the the client did'nt got the data
        const fetchSession = async () => {
            const session = await getSession()
            if (session?.user?.email) return (session.user.email);
        };

        //fetching the user data from the DB
        const getUserData = async () => {
            let tempUserEmail = userEmail;
            try {
                //if the email is not fetched then fetch it
                if (tempUserEmail == null) tempUserEmail = await fetchSession();
                setuserEmail(tempUserEmail);
                const res = await axios.post("/api/GetUserData", { tempUserEmail })
                setUserData(res.data.user)
                setUserStats(res.data.stats)
            } catch (error) {
                console.error("Error getting user data:", error)
            }
        }
        getUserData();

    }, [])  

    //showing loader if the data is not fetched
    if(userData==null)return <Loader/>

    return (
        <>
            {/* navbar section */}
            <div className={styles.bg}>
                <nav className={styles.nav}>
                    <p>CollabIQ</p>
                    <ul className='flex justify-evenly w-2/3'>
                        <li className='flex items-center' onClick={() => { setactionSectionContent(<HomeContent />) }}><RiHome2Line />Home</li>
                        <li className='flex items-center'><IoMdNotificationsOutline />Notification</li>
                        <li className='flex items-center'><IoSettingsOutline />Setting</li>
                        <li className='flex items-center' onClick={() => { setactionSectionContent(<ProfileContent />) }}><CgProfile />Profile</li>
                    </ul>
                </nav>

                {/* greeting section */}
                {userData && userStats ? newUser ? <h1>Welcome to CollabIQ</h1> : <h1>Welcome back {userData.name}</h1> : <h1 style={{ color: "transparent" }}>a</h1>}
                <main className={styles.main}>

                    {/* action section */}
                    <section className='grow'>
                        {/* recent Activities and news*/}
                        <section className={styles['activity-section']}>
                            <p>Recent Acitivity</p>
                            <ul>
                                <li>Acitivity 1</li>
                                <li>Acitivity 2</li>
                                <li>Acitivity 3</li>
                            </ul>
                        </section>
                        <section className={styles['action-section']}>
                            {actionSectionContent}
                        </section>

                    </section>
                    <aside>
                        <div>
                            Courses comming soon...
                        </div>
                        {/* gorup chats */}
                        <section>
                            <p>Group chats</p>
                            <div>
                                <img className='rounded-full' src='#' />
                                <div className='rounded-2xl w-full'>aa</div>
                            </div>
                        </section>
                    </aside>
                </main>
            </div>
        </>
    )
}

export default Page