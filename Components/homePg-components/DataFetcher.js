"use client"
import React, { useContext, useEffect } from 'react'
import { MyContext } from '../Mycontext';
import Loader from '../Loader';
import { getSession } from 'next-auth/react'
import axios from 'axios';

const DataFetcher = () => {

    const { setUserData, setUserStats, userData, userEmail, setuserEmail } = useContext(MyContext)
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
    if (userData == null) return <Loader />
    return null
}

export default DataFetcher