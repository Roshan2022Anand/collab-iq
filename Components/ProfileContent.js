import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from './Mycontext'
import styles from '@/app/mainPg/mainPg.module.css'
import { set } from 'mongoose'
import user from '@/model/user'
// <div className='w-screen h-screen flex flex-col items-center justify-center'>
//     <p>home page</p>
//     <div>
//         {userData && stats ? (
//             <div className="flex flex-col gap-4 shadow-md rounded-lg p-6 mb-4">
//                 <h2 className="text-2xl font-bold mb-4">User Information</h2>
//                 <p className="font-semibold">Name:{userData.name}</p>
//                 <p className="font-semibold">Age:{userData.age}</p>
//                 <p className="font-semibold">Email:{userData.email}</p>
//                 <p className="font-semibold">Qualification:{userData.qualification}</p>
//                 <p className="font-semibold">Field:{userData.field}</p>
//                 <p className="font-semibold">Progress:{stats.progress}%</p>
const Profile = () => {

  const { userData } = useContext(MyContext)
  const [editingMode, seteditingMode] = useState(false)
  const [userName, setuserName] = useState(userData.name);
  const [userAge, setuserAge] = useState(userData.age);
  const [userQualification, setuserQualification] = useState(userData.qualification);
  const [userField, setuserField] = useState(userData.field);
  const [useBio, setuseBio] = useState(userData.bio);
  //funtion to enable or disable editing mode
  const editOrSave = () => {
    let inputArr = document.querySelectorAll('input')
    if (editingMode) inputArr.forEach(input => input.disabled = true)
    else inputArr.forEach(input => input.disabled = false)
    seteditingMode(!editingMode)
  }

  return (
    <main className='w-full h-full flex p-1'>
      <section className='w-1/4 border-2'></section>
      <section className={`${styles['profile-section-2']}`}>
        <div>
          <img />
          <button onClick={editOrSave}>{(editingMode) ? "Save" : "Edit"}</button>
        </div>
        <div>
          <p>Name</p>
          <input type='text' value={userName} disabled="true" />
        </div>
        <div>
          <p>Bio</p>
          <input type='text' value={useBio} disabled="true" />
        </div>
        <div>
          <p>Age</p>
          <input type='text' value={userData.age} disabled="true" />
        </div>
        <div>
          <p>Qualification</p>
          <input type='text' value={userData.qualification} disabled="true" />
        </div>
        <div>
          <p>Field</p>
          <input type='text' value={userData.field} disabled="true" />
        </div>

      </section>
    </main>
  )
}

export default Profile