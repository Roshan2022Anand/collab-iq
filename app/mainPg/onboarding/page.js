'use client'
import React, { useContext, useState } from 'react'
import { MyContext } from '@/Components/Mycontext'
import styles from './onboard.module.css'
import axios from 'axios'
const page = () => {
  const { userEmail, router } = useContext(MyContext)
  const [userName, setuserName] = useState("")
  const [userAge, setuserAge] = useState("")
  const [userQualification, setuserQualification] = useState("")
  const [userField, setuserField] = useState("")

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/AddUser", { userName, userAge, userQualification, userField, userEmail })
      console.log(res.data)
      router.push("/mainPg/Home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <p className="text-3xl font-bold mb-6">Welcome to Our Platform!</p>
        <p className="mb-4">We're excited to have you on board. Please fill out some basic details to get started.</p>

        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input

              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => { setuserName(e.target.value) }}
              className={styles.input}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={userAge}
              onChange={(e) => { setuserAge(e.target.value) }}
              className={styles.input}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="qualification" className="block mb-2">Highest Qualification:</label>
            <select
              id="qualification"
              name="qualification"
              value={userQualification}
              onChange={(e) => { setuserQualification(e.target.value) }}
              className={styles.input}
              placeholder='Select your highest qualification'
              required
            >
              <option value=""></option>
              <option value="highSchool">High School</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="field" className="block mb-2">Field of Study/Work:</label>
            <select
              id="field"
              name="field"
              value={userField}
              onChange={(e) => { setuserField(e.target.value) }}
              className={styles.input}
              placeholder='Select your field of study/work'
              required
            >
              <option value="">Select your field</option>
              <option value="Computer Science & IT">Computer Science & IT</option>
              <option value="Engineering">Engineering</option>
              <option value="Business & Management">Business & Management</option>
              <option value="Healthcare & Medicine">Healthcare & Medicine</option>
              <option value="Education">Education</option>
              <option value="Arts & Humanities">Arts & Humanities</option>
              <option value="Social Sciences">Social Sciences</option>
              <option value="Natural Sciences">Natural Sciences</option>
              <option value="Law & Legal Studies">Law & Legal Studies</option>
              <option value="Agriculture & Environmental Sciences">Agriculture & Environmental Sciences</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={userEmail || ''}
              className={styles.input}
              disabled
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default page