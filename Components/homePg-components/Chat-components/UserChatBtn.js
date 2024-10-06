import React from 'react'

const UserChatBtn = ({ name, email, index, setcurrentChatBox, chatBox }) => {
    return (
        <div onClick={() => { setcurrentChatBox(chatBox) }}>
            <img />
            <p>{name}</p>
        </div>
    )
}

export default UserChatBtn