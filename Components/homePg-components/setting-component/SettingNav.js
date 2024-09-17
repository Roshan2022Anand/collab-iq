"use client"
import { MyContext } from '../../Mycontext'
import React, { useContext } from 'react'

const SideBar = () => {
  const { router} = useContext(MyContext)
  return (
    <aside className='w-1/4 border-2 flex flex-col items-center'>
      <div onClick={() => { router.push('/mainPg/SettingOpt/Profile') }}>Profile</div>
      <div onClick={() => { router.push('/mainPg/SettingOpt/DeleteAc') }}>Delete Account</div>
    </aside>
  )
}

export default SideBar