"use client"
import React, { useState } from 'react'


//   --primary - font: "Poppins", sans - serif;/** main body font*/
//   --secondary - font: "Roboto", sans - serif;/** heading subheading font*/
//   --accent - font: "Montserrat", sans - serif;/** highlight btn font*/
//   --quote - font: "Merriweather", serif;/** quote font*/
//   --nav - font: "Open Sans", sans - serif;/** nav font*/

//   --bg - color: #1E1E1E;/**overall bg color*/
//   --highlight - color: #FF6F20;/**btn imp ele*/
//   --text - color: #F5F5F5;/** txt card color*/
//   --hover - color: #FFA500;/**hover color border sec-btn*/
//   --secondary - bg - color: #4A4A4A;/**section card bg sec-text*/


const Page = () => {

  //all the states are defined here
  const [isDarkMode, setIsDarkMode] = useState(false)

  //function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.documentElement.style.setProperty('--bg-color', '#1E1E1E');
      document.documentElement.style.setProperty('--highlight-color', '#FF6F20');
      document.documentElement.style.setProperty('--text-color', '#F5F5F5');
      document.documentElement.style.setProperty('--hover-color', '#FFA500');
      document.documentElement.style.setProperty('--secondary-bg-color', '#4A4A4A');
    }
    else {
      document.documentElement.style.setProperty('--bg-color', '#FFFFFF');
      document.documentElement.style.setProperty('--highlight-color', '#FF6F20');
      document.documentElement.style.setProperty('--text-color', '#333333');
      document.documentElement.style.setProperty('--hover-color', '#FFF3E0');
      document.documentElement.style.setProperty('--secondary-bg-color', '#7D7D7D');
    }
  }
  //  Together We Learn, Together We Grow.
  // Where Learning Meets Collaboration.
  return (
    <>
      <nav>
        <div className="flex items-center">
          <img src="\login-pg-imgs\logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" >Home</a>
          <a href="#" >About</a>
          <a href="#" >Services</a>
          <button className="px-4 py-2 rounded border-[var(--highlight-color)] border-2">Sign Up</button>
          <button className="px-4 py-2 rounded bg-[var(--highlight-color)] border-[var(--highlight-color)] border-2">Login</button>
          <button onClick={toggleDarkMode} className="px-3 py-1 rounded-full" style={{
            backgroundColor: isDarkMode ? '#FFA500' : '#4A4A4A'
          }}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
      <main>
        <div className="flex items-center h-screen bg-[var(--bg-color)] text-[var(--text-color)]" style={{
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/login-pg-imgs/bg-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="h-fit flex flex-col items-start max-w-md pl-4 bg-black bg-opacity-50 p-6 rounded-lg">
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome to our Collaborative Learning Platform!</h1>
            <p className="text-lg mb-6 text-white">Discover a world of knowledge and enhance your learning experience</p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-[var(--highlight-color)] text-white rounded hover:bg-[var(--hover-color)] transition duration-300">Explore</button>
              <button className="px-6 py-2 border-2 border-[var(--highlight-color)] text-[var(--highlight-color)] rounded hover:bg-[var(--hover-color)] hover:text-white transition duration-300">Sign Up</button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="flex items-center">
          <img src="\login-pg-imgs\logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex items-center">
          <p>© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Page