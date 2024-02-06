import React, { useState } from 'react'
// import { BsThreeDotsVertical } from "react-icons/bs";
// <BsThreeDotsVertical />

const Text = () => {
  const[input,setInput]=useState("")
  const handleInput=(e)=>{
  setInput(e.target.value)
  }
  

  return (
    <>
    <div id="noteText">
      
    <input type="text" placeholder='Enter here' value={input} onChange={(e)=>handleInput(e)}/>
    </div>
    </>
  )
}

export default Text