

import React, { useEffect, useState } from 'react'

export default function Timer({setStop,QuestionNumber}) {

  const[timer , setTimer] = useState(30);

  useEffect(()=>{
    if (timer === 0 ) return setStop(true)
    const Interval = setInterval(()=>{
      setTimer((prev)=> prev - 1)
    } , 1000)
    return ()=> clearInterval(Interval);
  } , [setStop , timer])

  useEffect(()=>{
      setTimer(30)
  } , [QuestionNumber])

  return timer;
}



