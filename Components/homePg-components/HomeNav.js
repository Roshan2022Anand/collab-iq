"use client"
import React, { useContext } from 'react'
import styles from "@/app/mainPg/(home)/mainPg.module.css"
import { MyContext } from '../Mycontext';
//importing react icons
import { RiHome2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
const HomeNav = () => {

    const { newUser, router, userData, userStats } = useContext(MyContext)

    return (
        <>
            <nav className={styles.nav}>
                <p>CollabIQ</p>
                <ul className='flex justify-evenly w-2/3'>
                    <li className='flex items-center' onClick={() => { router.push('/mainPg/Home') }}><RiHome2Line />Home</li>
                    <li className='flex items-center' onClick={() => { router.push('/mainPg/ChatPg') }}><IoChatboxEllipsesOutline />Chats</li>
                    <li className='flex items-center' onClick={() => { router.push('/mainPg/SettingOpt/Profile') }}><IoSettingsOutline />Setting</li>
                </ul>
            </nav>

            {userData && userStats ? newUser ? <h1>Welcome to CollabIQ</h1> : <h1>Welcome back {userData.name}</h1> : <h1 style={{ color: "transparent" }}>a</h1>}
        </>
    )
}

export default HomeNav