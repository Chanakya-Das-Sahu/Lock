import React, { useState } from 'react'
import './App.css'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import Note from './note.jsx'


const App = () => {
  const [input, setInput] = useState("")
  const [btn, setBtn] = useState(false)
  const[pass,setPass]=useState("JSCR@8655")
  const[auth,setAuth]=useState(false)
  const show=()=>{
    if(input==pass){
      setAuth(true)
    }

  }
  return (
    <>
    <div id="container" >
      <h1>Password</h1>
      <div >
      <input id="inputField"type={btn==false?'password':'text'} 
      placeholder='Enter your password'
        value={input} onChange={(e) => setInput(e.target.value)} />
      {btn == false ? <IoEyeOutline size="2rem" className='eye' onClick={()=> setBtn(true)} />
        : <IoEyeOffOutline size="2rem" className='eye' onClick={()=> setBtn(false)} />}
        </div>
      <br/><br/>
      
      {/* <button id="btn" onClick={()=>{
        input==pass?alert("Your password is invalid"):<Note/>
      }}>Submit</button> */}
      {console.log(auth)}
      <button onClick={show}>charu</button>
      </div>
     
    </>
  )
}

export default App



