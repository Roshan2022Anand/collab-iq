"use client"
import React, { useEffect, useState, useRef, useContext } from 'react'
import { io } from 'socket.io-client'
import styles from "./chat.module.css"
import { Minus, Plus, } from 'lucide-react'
import { MyContext } from '@/Components/Mycontext'
import { getSession } from 'next-auth/react'
import axios from 'axios'
import UserChatBtn from '@/Components/homePg-components/Chat-components/UserChatBtn'
import UserChatBox from '@/Components/homePg-components/Chat-components/UserChatBox'
const page = () => {
  const { userEmail, setuserEmail } = useContext(MyContext);
  const [allUsersEmail, setallUsersEmail] = useState([]);
  // all the states
  const [addUserBar, setaddUserBar] = useState(false);
  const [usersChatBtn, setusersChatBtn] = useState([]);
  const [currentChatBox, setcurrentChatBox] = useState(null);
  const [socket, setsocket] = useState();
  // all the refs
  const addUserInput = useRef(null);
  //fetching email from the session and connecting the socket
  useEffect(() => {
    const socketIo = io('http://localhost:9000')
    console.log(socketIo);
    const conncetSocket = async () => {
      const session = await getSession();
      if (session) {
        let tempEmail = session.user.email;
        setuserEmail(tempEmail);
        socketIo.on('connect', () => {
          socketIo.emit('user-connected', tempEmail)
          setsocket(socketIo);
          console.log(socketIo);
        })
      }else{
        console.log("no session found");
      }
    }
    conncetSocket();
    return () => {
      socketIo.disconnect();
      console.log("socket disconnected");
      
    }
  }, [])

  //to get all the emails of the users
  useEffect(() => {
    const getAllUsersEmails = async () => {
      const res = await axios.get("/api/GetAllNameNEmail");
      setallUsersEmail(res.data.userData);
    }
    getAllUsersEmails();
  }, [])

  //function to add new user chat box
  const addNewUserChatBox = () => {
    const newUserName = addUserInput.current.value;
    allUsersEmail.forEach(userObj => {
      if (userObj.name === newUserName) {
        console.log("user found");
        setusersChatBtn([...usersChatBtn, <UserChatBtn key={`chat-btn-${usersChatBtn.length}`} name={newUserName} email={userObj.email} index={usersChatBtn.length} setcurrentChatBox={setcurrentChatBox} chatBox={<UserChatBox userEmail={userEmail} name={newUserName} email={userObj.email} socket={socket}/>}/>]);
      }
    });
  }
  return (
    <main>
      <nav className="flex justify-end items-center h-[8vh] bg-red-500">
        {addUserBar
          ? <div className="flex">
            <input type="text" placeholder="search user" ref={addUserInput} className="rounded-3xl p-1 px-2 h-2/3 border-2 bg-transparent" />
            <button onClick={addNewUserChatBox}>Add</button>
          </div>
          : null}
        <button onClick={() => { setaddUserBar(!addUserBar) }}>
          {addUserBar ? <Minus /> : <Plus />}</button>
      </nav>
      <section className={styles.container}>

        <aside className={styles.aside}>{usersChatBtn}</aside>
        <section className="border-2 border-red-600 w-[75%] flex flex-col">
          {currentChatBox}
        </section>
      </section>
    </main>
  )
}

export default page