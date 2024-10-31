"use client"
import React, { useContext, useState, useEffect, useRef } from 'react'
import { MyContext } from './Mycontext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Nav = () => {
    const { isDarkMode, setIsDarkMode, toggleDarkMode } = useContext(MyContext);
    return (
        <nav className='nav'>
            {/* website logo */}
            <div className="flex items-center ">
                <img src="\login-pg-imgs\logo.png" alt="Logo" className="nav-animation-1 h-8 w-auto " />
            </div>
                <div className="nav-animation-2 nav-opt">
                    {['Features', 'Reviews', 'About'].map(ele => { return <a key={ele} href={`#${ele}`}>{ele}</a> })} {/* Added key prop */}
                    
                    <button onClick={toggleDarkMode} className="px-3 py-1 rounded-full hover:border-0 hover:brightness-150" style={{
                        backgroundColor: isDarkMode ? '#FFA500' : '#4A4A4A'
                    }}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>
        </nav>
    )
}

export default Nav