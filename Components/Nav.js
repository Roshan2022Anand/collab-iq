"use client"
import React, { useContext, useState, useEffect, useRef } from 'react'
import SignUpBtn from '@/Components/SignUpBtn'
import { MyContext } from './Mycontext';
import { useGSAP } from '@gsap/react';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import gsap from 'gsap';
const Nav = () => {
    const { isDarkMode, setIsDarkMode, isMobileScreen } = useContext(MyContext);
    const [isMounted, setisMounted] = useState(null)
    //function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        if (isDarkMode) {
            document.documentElement.style.setProperty('--bg-color', '#1E1E1E');
            document.documentElement.style.setProperty('--highlight-color', '#FF6F20');
            document.documentElement.style.setProperty('--text-color', '#F5F5F5');
            document.documentElement.style.setProperty('--hover-color', '#FFA500');
            document.documentElement.style.setProperty('--secondary-bg-color', '#4A4A4A');
            document.documentElement.style.setProperty('--opacity-bg-color', 'rgba(30, 30, 30, 0.6)');
        }
        else {
            document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
            document.documentElement.style.setProperty('--highlight-color', '#FF6F20');
            document.documentElement.style.setProperty('--text-color', '#333333');
            document.documentElement.style.setProperty('--hover-color', '#FFF3E0');
            document.documentElement.style.setProperty('--secondary-bg-color', '#7D7D7D');
            document.documentElement.style.setProperty('--opacity-bg-color', 'rgba(255, 255, 255, 0.3)');
        }
    }

    //function to open the nav bar
    let navTlRef;
    navTlRef = gsap.timeline();

        navTlRef.pause();
    // if (!isMounted)
    //     return null


    const openSetting = () => {
        console.log("open");
        navTlRef.play();
        navTlRef.to('.mobile-nav', { right: "0%",opacity:1, duration: 0.5 });
        navTlRef.from('.mobile-nav *', { x:250,opacity:0, duration: 1,stagger:0.2 });
    }
    const closeSetting = () => {
        navTlRef.reverse();
    }

    return (
        <nav className='nav'>
            {/* website logo */}
            <div className="flex items-center ">
                <img src="\login-pg-imgs\logo.png" alt="Logo" className="nav-animation-1 h-8 w-auto " />
            </div>
            {(isMobileScreen) ?
                <div>
                    <button onClick={openSetting}><TiThMenu/></button>
                    <div className='mobile-nav'>
                        <div className='flex justify-between'>
                            <button onClick={toggleDarkMode} className="w-1/2 px-3 py-1 rounded-full hover:border-0 hover:brightness-150" style={{
                                backgroundColor: isDarkMode ? '#FFA500' : '#4A4A4A'
                            }}>
                                {isDarkMode ? '☀️' : '🌙'}
                            </button>
                            <button onClick={closeSetting}><ImCross /></button>
                        </div>
                        {['Features', 'Reviews', 'About'].map(ele => { return <a href={`#${ele}`}>{ele}</a> })} {/* Added key prop */}
                        <SignUpBtn />
                    </div>
                </div> :
                <div className="nav-animation-2 flex items-center space-x-6">
                    {['Features', 'Reviews', 'About'].map(ele => { return <a key={ele} href={`#${ele}`}>{ele}</a> })} {/* Added key prop */}
                    <SignUpBtn />
                    <button onClick={toggleDarkMode} className="px-3 py-1 rounded-full hover:border-0 hover:brightness-150" style={{
                        backgroundColor: isDarkMode ? '#FFA500' : '#4A4A4A'
                    }}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>}
        </nav>
    )
}

export default Nav