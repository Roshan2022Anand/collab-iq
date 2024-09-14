import React from 'react'
import { useRouter } from 'next/navigation'
const SignUp = () => {
  const router = useRouter();
  return (
    <>
      <div className='flex gap-1'>
        <button className='btn-style-one' onClick={() =>{ router.push("/SignUpPg")}}>Sign Up</button>
        <button className='btn-style-two' onClick={() =>{ router.push("/LoginPg")}}>Login</button>
      </div>
    </>
  )
}

export default SignUp