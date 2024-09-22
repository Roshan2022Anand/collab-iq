"use client"
import { MyContext } from '@/Components/Mycontext'
import React, { useContext, useState } from 'react'

const page = () => {
    const { isDarkMode, setIsDarkMode, toggleDarkMode } = useContext(MyContext);




    return (
        <section>

            {/* light or dark theme */}
            <div className='flex flex-col gap-2 p-3'>
                <p>theme</p>
                <div className='flex gap-2'>
                <button onClick={toggleDarkMode} className='btn-style-one'>LIGHT</button>
                <button onClick={toggleDarkMode} className='btn-style-one'>DARK </button>
                </div>
            </div>
        </section>
    )
}

export default page