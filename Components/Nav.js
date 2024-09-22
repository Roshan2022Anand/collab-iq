"use client"
import React, { useContext, useState, useEffect, useRef } from 'react'
import SignUpBtn from '@/Components/signup-components/SignUpBtn'
import { MyContext } from './Mycontext';
import { useGSAP } from '@gsap/react';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import gsap from 'gsap';
const Nav = () => {
    const { isDarkMode, setIsDarkMode, isMobileScreen,toggleDarkMode } = useContext(MyContext);

    //function to open the nav bar
    let navTlRef;
    navTlRef = gsap.timeline();
    navTlRef.pause();
    // if (!isMounted)
    //     return null


    const openSetting = () => {
        console.log("open");
        navTlRef.play();
        navTlRef.to('.mobile-nav', { right: "0%", opacity: 1, duration: 0.5 });
        navTlRef.from('.mobile-nav *', { x: 250, opacity: 0, duration: 1, stagger: 0.2 });
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
                    <button onClick={openSetting}><TiThMenu /></button>
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