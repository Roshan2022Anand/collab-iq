"use client"
import { useRouter } from 'next/navigation';
import React, { createContext, useState } from 'react'
export const MyContext = createContext();
const Mycontext = ({children}) => {
  const router = useRouter()
  const [newUser, setNewUser] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userEmail, setuserEmail] = useState(null);
  return (
    <MyContext.Provider value={{ newUser, setNewUser, isDarkMode, setIsDarkMode, userEmail, setuserEmail,router }}>
        {children}
    </MyContext.Provider>
  )
}

export default Mycontext