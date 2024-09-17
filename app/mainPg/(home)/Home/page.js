"use client"
import { MyContext } from '@/Components/Mycontext'
import React, { useContext } from 'react'

const page = () => {
    const {userData} = useContext(MyContext);
  return (
      <main className='w-full h-full'>
          <section>
              <h1>Home</h1>
              <p>home page content</p>
              <div>{(userData)?userData.email:"null"}</div>
          </section>
      </main>
  )
}

export default page