import { MyContext } from '@/Components/Mycontext';
import React, { useContext } from 'react'

const ChatBoxBtn = ({ userEmail, userName, index ,setchatNum}) => {
    return (
        <button className='flex border-2' onClick={() => { setchatNum(index);console.log("hai");
         }}>
           {userName}
        </button>
    )
}

export default ChatBoxBtn