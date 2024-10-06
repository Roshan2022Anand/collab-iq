import { ArrowBigLeft,  Send } from 'lucide-react'
import React, { useRef,useEffect,useState } from 'react'
import styles from "@/app/mainPg/(home)/ChatPg/chat.module.css"
const UserChatBox = ({ userEmail, name, email, socket }) => {

    //all states are defined here
    const [allMsgs, setallMsgs] = useState([])

    //ref for the message input
    const msgInput = useRef(null);
    console.log(socket);

    //function to send the message
    const sendMsg = () => {
        const msg = msgInput.current.value;
        if (msg != "" && socket) {
            console.log("sending msg to backend");
            socket.emit('send-msg', { from: userEmail, to: email, msg: msg });
            setallMsgs([...allMsgs, {msg,client:"sender"}]);
            msgInput.current.value = "";
        } else {
            console.log("message :", msg);
            console.log("socket :", socket);

        }
    }

    //useEffect to listen for the messages
    useEffect(() => {
        if (socket) {
            socket.on('recieve-msg', ({ from, msg }) => {
                if (from === email) {
                    console.log("recieved msg from backend");
                    setallMsgs([...allMsgs, {msg,client:"reciever"}]);
                    console.log(from, msg);
                } else {
                    console.log("this is not for me", from,userEmail);
                }
            })
        }

    }, [])


    return (
        <>
            <nav className="h-[10%] flex justify-between px-2">
                <p>{name}</p>
                <button><ArrowBigLeft /></button>
            </nav>
            <section className="grow">
                {allMsgs.map((obj, index) => {
                    return <p key={`mag-${index}`} className={styles[obj.client]}>{obj.msg}</p>
                })}
            </section>
            <section className="h-[10%] flex bg-slate-800">
                <input type="text" className="rounded-2xl px-1 bg-transparent border-2 grow" placeholder="type message" ref={msgInput} />
                <button className="w-1/6" onClick={sendMsg}><Send /></button>
            </section>
        </>
    )
}

export default UserChatBox