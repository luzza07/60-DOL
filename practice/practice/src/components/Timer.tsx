import { useEffect, useState } from "react"


const Timer = () => {
    const [sec,setSec]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setSec(prev=>prev+1);
        },1000)
        return () => clearInterval(interval);
    })
  return (
    <>
    <h3>Timer:{sec}</h3>
    </>
  )
}

export default Timer