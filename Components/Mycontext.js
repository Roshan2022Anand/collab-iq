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
  const isMobileScreen = useMediaQuery({ query: '(max-width:600px)' });
  let a =10;
  return (
    <MyContext.Provider value={{ newUser, setNewUser, isDarkMode, setIsDarkMode, userEmail, setuserEmail,router,isMobileScreen,userData,setUserData,userStats,setUserStats,a }}>
        {children}
    </MyContext.Provider>
  )
}

export default Mycontext