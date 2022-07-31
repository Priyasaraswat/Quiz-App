import React, { useEffect, useState } from 'react'

function Timer({setTimer,question}) {
    const [time,setTime]=useState(30);
    useEffect(()=>
    {
        if(time===0)return setTimer(true)
      const interval= setInterval(() => {
        setTime((t)=>t-1);
      }, (1000));
      return ()=>clearInterval(interval);
    },[setTimer,time])
    useEffect(()=>
    {
     setTime(30);
    },[question])
  return (
    time
  )
}

export default Timer