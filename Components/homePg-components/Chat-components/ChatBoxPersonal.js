
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/app/mainPg/(home)/ChatPg/chat.module.css'
const ChatBoxPersonal = ({ userEmail, userName, socket }) => {
  const [allMsgs, setallMsgs] = useState([]);
  const txtInput = useRef(null);

  useEffect(() => {
    // Listen for messages from the server
    socket.on('personal-msg-receiver', (msg) => {
      console.log("recived");
      
      const { from, message } = msg;
      if (from === userEmail) {
        setallMsgs((prevMessages) => [...prevMessages, { message: message, client: 'receiver' }]);
      }
    });
  }, [])


  // Send a message to the server
  const sendMessage = () => {
    let input = txtInput.current.value;
    console.log('sending message', input, "to socket", socket);
    if (input && socket) {

      socket.emit('personal-msg', { to: userEmail, message: input });
      setallMsgs([...allMsgs, { message: input, client: 'sender' }]);  // Update your own messages
      txtInput.current.value = '';
    }
  };
  return (
    <>
      <div className='border-2'>
        <img /><p className='text-blue-500 text-[2vw]'>{userName}</p>
      </div>
      <div className='grow'>
        {allMsgs.map((msg, index) => {
          return <p className={styles[msg.client]} key={index}>{msg.message}</p>
        })}
      </div>
      <div className='border-2 p-2 flex gap-2'>
        <input type='text' className='bg-transparent text-black border-2 rounded-2xl p-1 grow' ref={txtInput} placeholder='type somethiing..' />
        <button className='bg-blue-500 text-white w-1/4 px-1' onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default ChatBoxPersonal