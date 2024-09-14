import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { MyContext } from '../Mycontext';

const SignUp = () => {
  const router = useRouter();
  const {isMobileScreen} = useContext(MyContext);
  return (
    <>
      <div className='flex gap-1' style={{
        flexDirection: isMobileScreen ? "column" : "row"
      }}>
        <button className='btn-style-one' onClick={() =>{ router.push("/SignUpPg")}}>Sign Up</button>
        <button className='btn-style-two' onClick={() =>{ router.push("/LoginPg")}}>Login</button>
      </div>
    </>
  )
}

export default SignUp