"use client"
import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client';
import styles from './chat.module.css'
import { getSession } from 'next-auth/react';
const page = () => {
  const session = getSession();
  const [allMsgs, setallMsgs] = useState([]);
  const [socket, setSocket] = useState(null);

  const txtInput = useRef();
  useEffect(() => {

    // Initialize the socket connection
    const socketIo = io('http://localhost:3001', {
      withCredentials: true, // Include credentials in the WebSocket connection
    });
    setSocket(socketIo);

    // Listen for messages from the server
    socketIo.on('return-msg', (msg) => {
      setallMsgs((prevMessages) => [...prevMessages, { message: msg, client: 'receiver' }]);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socketIo.disconnect();
    };
  }, []);

  const sendMessage = () => {
    let input = txtInput.current.value;
    if (input && socket) {
      socket.emit('chat-msg', input);
      setallMsgs([...allMsgs, { message: input, client: 'sender' }]);  // Update your own messages
      txtInput.current.value = '';
    }
  };

  return (
    <main>
      <p> This is a chat app </p>
      <input type="text" ref={txtInput} />
      <button onClick={sendMessage}>Send</button>

      <div className='border-2 w-full h-full p-2 flex flex-col'>
        {allMsgs.map((obj, index) => {
          return (<p className={styles[obj.client]} >{obj.message}</p>)
        })}
      </div>
    </main>
  )
}

export default page