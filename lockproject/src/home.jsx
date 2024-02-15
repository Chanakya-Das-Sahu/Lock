import React, { useRef, useState } from 'react'
import './App.css'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import {useNavigate} from'react-router-dom'

const App = (props) => {
  const [input, setInput] = useState("")
  const [btn, setBtn] = useState(false)
  const[pass,setPass]=useState("JSCR@8655")
  const navigate = useNavigate() ;
  const[shadow,setShadow] = useState({boxShadow:'none'})
 const Check=()=>{
  setShadow({boxShadow:'none'})
  if(input==''){
    setTimeout(()=>{
       alert("Enter password")
    },200)
   
  }
    else if(input!=pass){
      
      setTimeout(()=>{
        alert("Your password is invalid")
      },200)
        
    }
    else{
    props.fun("false")
   navigate("/note")
    }
}
const inputHover=()=>{
  
  setShadow({boxShadow:'1px 1px 7px 1px green',outline:'none'})
}

  
  return (
    <>
    <div id="container" >
      <h1>Password</h1>
      <div >
      <input id="inputField"type={btn==false?'password':'text'} 
      placeholder='Enter your password' onClick={inputHover}
        value={input} onChange={(e) => setInput(e.target.value)} style={shadow} />
      {btn == false ? <IoEyeOutline size="2rem" className='eye' onClick={()=> setBtn(true)} />
        : <IoEyeOffOutline size="2rem" className='eye' onClick={()=> setBtn(false)} />}
        </div>
      <br/><br/>
      
      <button id="btn" onClick={Check}  >Submit</button>
      
     </div>
    </>
  )
}

export default App
