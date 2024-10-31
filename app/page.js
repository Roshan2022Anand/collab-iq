"use client"
import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedLine from '@/Components/AnimatedLine'
import Nav from '@/Components/Nav'
const Page = () => {

  //an array containing 10 fruits name
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Watermelon', 'Papaya', 'Guava', 'Kiwi']

  //All gsap animation 
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    //gsap animation for the navbar and hero section
    let navTl = gsap.timeline();
    let tbAnimation = {
      y: -30,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3
    }
    let lrAnimation = {
      x: "-100%",
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
      ease: "power.in"
    }
    const lrScrollTriggerAnimation = (cls) => {
      return {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: cls,
          scroller: "body",
          start: "top 85%",
          end: "top 85%",
          scrub: 5
        }
      }
    }
    navTl.from(".nav-animation-1", tbAnimation);
    navTl.from(".nav-animation-2 > *", tbAnimation);
    navTl.from(".hero-animation-1 > *", lrAnimation)
    navTl.from(".hero-animation-2", tbAnimation)
    navTl.from(".hero-animation-3 > *", tbAnimation)

    //gsap animation for feature section
    gsap.from(".feature-animation-1", lrScrollTriggerAnimation(".feature-animation-1"));
    gsap.from(".feature-animation-2", {
      height: "20%",
      opacity: 0,
      scrollTrigger: {
        trigger: ".feature-animation-2",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 80%",
        scrub: 2
      }
    })

    //gsap animation for CTA section
    gsap.from(".cta-animation-1", lrScrollTriggerAnimation(".cta-animation-1"));
  }, [])

  //animation for nav bar and marquee
  useEffect(() => {
    const moveNav = (info) => {
      if (info.deltaY > 0) {
        gsap.to(".nav", {
          y: -100
        })
        gsap.to(".marquee-ele", {
          transform: "translateX(10%)",
          duration: 8,
          repeat: -1,
          ease: "none"
        })
      } else {
        gsap.to(".nav", {
          y: 0
        })
        gsap.to(".marquee-ele", {
          transform: "translateX(-200%)",
          duration: 8,
          repeat: -1,
          ease: "none"
        })
      }
    }
    window.addEventListener("wheel", moveNav);
    return () => {
      window.removeEventListener("wheel", moveNav);
    }
  }, [])

  let arr = []
  for (let i = 0; i < 4; i++)
    arr.push('Together We Learn, Together We Grow.');
  //  Together We Learn, Together We Grow.
  // Where Learning Meets Collaboration.
  return (
    <>
      {/* navbar element */}
      <Nav />
      <main>

        {/* hero section */}
        <section className="flex items-center justify-around h-screen text-[var(--text-color)]">
          <div className="h-fit w-1/2 flex flex-col items-start pl-4">
            <div className="hero-animation-1 text-[5vw] font-bold mb-4">
              <p>Welcome to our </p>
              <p>Collaborative</p>
              <p>Learning Platform!</p>
            </div>
            <p className="hero-animation-2 text-[2vw] mb-6">Discover a world of knowledge and enhance your learning experience</p>
            <div className="hero-animation-3 flex space-x-4">
              <button className='btn-style-two text-[2vw]'>Explore</button>
              <button className='btn-style-one text-[2vw]'>Sign Up</button>
            </div>
          </div>
          <div className='hero-animation-2 w-1/2 max-w-[550px] h-1/2'>
            <img src="/login-pg-imgs/bg-img.jpg" className='h-full w-full p-2 rounded-3xl' />
          </div>
        </section>

        <div className='marquee'>
          {arr.map((ele, index) => { return <p className='marquee-ele -translate-x-full' key={`marq-${index}`}>{ele}</p> })}
        </div>

        <AnimatedLine />
        {/* features section */}
        <section id='Features' className='sub-section p-2 max-w-[1400px] mx-auto max-h-[700px]'>
          <header className='flex justify-evenly p-3 h-1/2'>
            <p className='text-[4vw] w-2/3 feature-animation-1'>Experience Real-Time Collaboration with Other Students</p>
            <div className='w-1/2 h-full flex flex-col justify-end'>
              <p className='text-[1.2vw]'>Our platform allows you to collaborate with other students in real-time, making learning more interactive and engaging. Share ideas, work on projects together, and learn from each other's perspectives.</p>
              <div className='feature-animation-2 h-[75%]'>animation info</div>
            </div>
          </header>
          <div className='flex justify-evenly '>
            <article className='flex flex-col w-[30%]  justify-evenly' >
              <div >
                <svg className="w-[3vw] h-[3vw]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="var(--highlight-color)">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
              </div>
              <p>Access wide Range of User generated content</p>
              <p className='text-[1vw]'>Explore avast range of user generated courses and notes created by students jsut like you .Find valuable resource to enhance you learning experience.</p>
              <button className='btn-style-two'>Learn More {'>'}</button>
            </article>

            <article className='flex flex-col justify-evenly w-[30%]' >
              <div >
                <svg className="w-[3vw] h-[3vw]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="var(--highlight-color)">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
              <p>Track your Course Progress and Achievements</p>
              <p className='text-[1vw]'>Stay motivated and keep track of your progress as you complete courses.Earn achievements and unlock learning opportunities along the way</p>
              <button className='btn-style-one'>Sign Up {'>'}</button>
            </article>

            <article className='flex flex-col justify-evenly w-[30%] '>
              <div  >
                <svg className="w-[3vw] h-[3vw]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="var(--highlight-color)">
                  <path d="M10 15l-3.09 1.64.59-3.45-2.5-2.44 3.46-.5L10 7l1.54 3.25 3.46.5-2.5 2.44.59 3.45L10 15z" />
                </svg>
              </div>
              <p>Rate and Review Course to Help Others</p>
              <p className='text-[1vw]'>Share your thoughts and experience by rating and reviewing courses you've taken.Help other students make informed decisions and find the best learning materials.</p>
              <button className='btn-style-two'>Join Now {'>'}</button>
            </article>
          </div>
        </section>

        <AnimatedLine />
        {/* how its work section */}
        <section className='sub-section'>
          <header className='flex flex-col text-center text-[1vw] w-2/3 mx-auto'>
            Discover
            <p className='text-[3vw]'>Get Started with our Collaborative Learning Platform</p>
            Learn,Create and Collaborate with Our usesr-friendly platform design for students.Watch the video tutorial below to see how it works
          </header>
          <div className='flex justify-center'>
            <article className='tutorial-card'>
              <img />
              <h3>Step-by-Step Guide</h3>
              <p>Follow these simple steps to get Started </p>
            </article>

            <article className='tutorial-card'>
              <img />
              <h3>Create notes</h3>
              <p>Take notes and organize your thoughts easily</p>
            </article>

            <article className='tutorial-card'>
              <img />
              <h3>Collaborate With Others</h3>
              <p>Work togather in real time on shared notes and projects</p>
            </article>
          </div>
        </section>

        {/* testimonial section */}
        <section id='Reviews'>
        </section>

        {/* CTA section */}
        <section className='cta-section'>
          <p className='text-[3vw] cta-animation-1'>Start Your Learning Journey Today</p>
          <p className='cta-animation-1'>Join our platform and access a widde range of courses and resources.</p>
          <div>
            <button className='cta-animation-1 btn-style-one'>Sign Up</button>
          </div>
        </section>

        <AnimatedLine />
        {/* newsletter section */}
        <section className='newsletter-section'>
          <div className='text-[3vw] w-1/2'>Stay Updated with Our newsletter</div>
          <div className='w-1/2 flex flex-col gap-2'>
            <p>Subcribe to our newsletter for the latest update and news.</p>
            <div className='flex gap-2'>
              <input type='mail' className='bg-transparent border-2 grow' />
              <button className='btn-style-one w-1/4'>Sign up</button>
            </div>
            <p className='text-[1vw]'>by signing up,you agree to our <a className='text-blue-500'>terms and Conditions</a>.</p>
          </div>
        </section>
      </main>

      <footer id='About' className='w-screen h-screen'>
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