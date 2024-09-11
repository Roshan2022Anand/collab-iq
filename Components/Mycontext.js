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
  const isMobileScreen = useMediaQuery({ query: '(max-width:600px)' });
  
  return (
    <MyContext.Provider value={{ newUser, setNewUser, isDarkMode, setIsDarkMode, userEmail, setuserEmail,router,isMobileScreen }}>
        {children}
    </MyContext.Provider>
  )
}

export default Mycontext