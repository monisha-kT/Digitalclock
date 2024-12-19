import { useState,useEffect } from 'react'
import './App.css'

function App() {
   const[time,setTime]=useState(0);
  const[date,setDate]=useState(new Date());

useEffect(()=>{
  const timer=setInterval(()=>{ 
    setDate(new Date());
  },1000);
  return ()=>{
    clearInterval(timer);
  }
 },[]);

  return (
    <>
     <div className="block">
      <h1>Digital Clock</h1>
      <p> 
        {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} 
        {date.getHours()>=12?"PM":"AM"}
      </p>

      <p> {date.toDateString()}</p>
     </div>
     
    </>
  )
}

export default App
