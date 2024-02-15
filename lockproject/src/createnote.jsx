import React, { useState } from 'react'
import './App.css'
import Home from './home'
import Note from './note'

const CreateNote = () => {
  const[note,setNote]=useState({title:'',content:''})
  const[noteItem,setNoteItem]=useState([])
  const[cPage,setCPage]=useState("")

  const handleClick=(e)=>{
    setNote({...note , [e.target.name]:e.target.value})
  }

   const AddNote=()=>{
    setCPage("true")
    setNoteItem([...noteItem,note])
  }
  return (
    <>
    {cpage=="false"?<div>
    <div id="noteCreator">
    <textarea type='text' placeholder='Tittle'id='title' 
    value={note.title} onChange={handleClick} name="title"/><br/>
    <textarea type='text' placeholder='Enter your notes' name="content"
    value={note.content} onChange={handleClick} id='noteText'/><br/>
    <button onClick={AddNote}>Add</button>
    </div>
    </div>:console.log("note compornets")}
  {<Home  fun={setCPage}/>}
    </>
  )
}

export default CreateNote