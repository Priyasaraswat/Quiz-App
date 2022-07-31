import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';

import correct from "../assets/correct.mp3"
import incorrect from "../assets/incorrect.mp3"

function Questions({data,setTimer,setQuestion,question}) {
  const [currquestion,setCurrQuestion]=useState(null);
  const [selectedanswer,setSelectedAnswer]=useState(null);
 const [className,setClassName]=useState("ans");

 const[correctAnswer]=useSound(correct)
 const[incorrectAnswer]=useSound(incorrect);

 
  useEffect(()=>{
    setCurrQuestion(data[question-1])
  },[data,question]);
  useEffect(()=>
 {
   if(question===11)
   {
    setTimer(true);
   }
 })
  const delay=(duration,callback)=>
  {
   setTimeout(()=>
   {
    callback();
   },duration);
  }
  const handleClick=(a)=>
  {
    setSelectedAnswer(a);
    setClassName("ans active");
    delay(1000,()=>
    {
      {a.status?setClassName("ans correct"):setClassName("ans incorrect")}
    })
    delay(2000,()=>
    {
      if(a.status)
      {
        correctAnswer();
        delay(3000,()=>
        {
          setQuestion(prev=>prev+1);
          setSelectedAnswer(null);
        })
          
      }
      else
      {
        incorrectAnswer();
        delay(3000,()=>
        {
          setTimer(true);
        })
        
      }
    })
   
  }
  return (
    <div className='questions'>
    <div className='ques'>{currquestion?.question}</div>
    <div className='answers '>
      {currquestion?.answers.map((a)=>(
       <div key={data.id}className={selectedanswer===a ? className :'ans'} onClick={()=>handleClick(a)}>{a.option}</div>
      ))}
       
       
    </div>
    </div>
    
  )
}

export default Questions