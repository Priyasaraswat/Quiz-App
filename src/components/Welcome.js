import React, { useEffect } from 'react'
import { useRef } from 'react'
function Welcome({setUserName}) {
    const name=useRef();
    const handleclick=()=>
    {
        name.current.value&&setUserName(name.current.value);
        localStorage.setItem("user", name.current.value);
    }
  return (
    <div className='welcome'>
        <div className='wel-cont'>
        <input placeholder='Enter username' className='input-name'
        ref={name}
        ></input>
        <button className='startbtn' onClick={handleclick}>Start</button></div>
    </div>
  )
}

export default Welcome