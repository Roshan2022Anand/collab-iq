"use client"
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export const MyContext = createContext();
const Mycontext = ({children}) => {
  const router = useRouter()
  const [newUser, setNewUser] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userEmail, setuserEmail] = useState(null);
  const [userData, setUserData] = useState(null)
  const [userStats, setUserStats] = useState(null)
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
  return (
    <MyContext.Provider value={{ newUser, setNewUser, isDarkMode, setIsDarkMode, userEmail, setuserEmail,router,userData,setUserData,userStats,setUserStats,toggleDarkMode }}>
        {children}
    </MyContext.Provider>
  )
}

export default Mycontext