"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import io from 'socket.io-client';
import styles from './chat.module.css'
import { getSession } from 'next-auth/react';
import axios from 'axios';
import ChatBoxPersonal from '@/Components/homePg-components/Chat-components/ChatBoxPersonal';
import ChatBoxBtn from '@/Components/homePg-components/Chat-components/ChatBoxBtn';
const page = () => {
  const session = getSession();
  const [allMsgs, setallMsgs] = useState([]);
  const [socket, setSocket] = useState(null);
  const [chatBoxConatinerBtns, setcheckBoxContainerBtns] = useState([]);
  const [chatBoxConatinerMsgs, setchatBoxConatinerMsgs] = useState([]);
  const [chattingBox, setchattingBox] = useState(null);
  const [srchInput, setsrchInput] = useState('');
  const [allUserReference, setallUserReference] = useState([]);
  const [chatNum, setchatNum] = useState(null);

  //to connect to the socket
  useEffect(() => {
    let socketIo;
    // Create a new WebSocket connection
    if (session) {
      socketIo = io('http://localhost:9000', {
        auth: {
          token: session.token  // Send the token or session data with the connection
        },
        withCredentials: true, // Include credentials in the WebSocket connection
      });
    }
    setSocket(socketIo);
    // Clean up the socket connection on component unmount
    return () => {
      socketIo.off('return-msg');
      socketIo.disconnect();
    };
  }, []);
  
  //to get all the usersfrom the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/GetAllNameNEmail');
        setallUserReference(res.data.userData)
      } catch (err) {
        setsrchInput('error while searching')
      }
    }
    fetchUsers();
  }, []);

  //function to add chats
  const addChats = async () => {
    let user = allUserReference.filter((user) => user.name === srchInput);
    if (user.length === 0) {
      setsrchInput('User not found..');
    } else {
      setsrchInput('Yup he is there..');
      setcheckBoxContainerBtns([...chatBoxConatinerBtns, <ChatBoxBtn userEmail={user[0].email} userName={user[0].name} index={chatBoxConatinerBtns.length} setchatNum={setchatNum} />]);
      setchatBoxConatinerMsgs([...chatBoxConatinerMsgs, <ChatBoxPersonal userEmail={user[0].email} userName={user[0].name} socket={socket} />]);
    }
  }

  //function to show selected chat box the chat box
  useEffect(() => {
    if (chatNum !== null) setchattingBox(chatBoxConatinerMsgs[chatNum]);
  }, [chatNum]);

  return (
    <main className='h-[75vh] border-2 my-11 flex'>
      <section className='border-2 w-1/3 flex flex-col '>
        <div className='flex p-2 gap-1'>
          <input type='text'
            className='bg-white text-black border-2 rounded-2xl p-1 grow' placeholder='search'
            value={srchInput}
            onChange={(e) => { setsrchInput(e.target.value) }} />
          <button className='bg-red-400 text-white w-1/4' onClick={addChats}>Add</button>
        </div>
        <div className='border-2 flex flex-col'>
          {chatBoxConatinerBtns}
        </div>
      </section>
      {/* chat section */}
      <section className='bg-gray-700 grow flex flex-col'>
        {chattingBox}
      </section>
    </main>
  )
}

export default page