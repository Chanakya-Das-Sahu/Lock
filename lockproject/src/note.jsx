import React, { useState } from 'react'
import './App.css'
import Text from './text'

const Note= () => {
  const[noteList,setNoteList]=useState([])
  const AddNote=()=>{
    setNoteList([...noteList,<Text/>])
  }
  const deleteNote=(idx)=>{
   const updatedNote=noteList.filter((ele,i)=>{
    return idx!=i
   })
   setNoteList(updatedNote)
  }
  return (
    <>
<div id="noteContainer">
 <h1 style={{textAlign:"center"}}>Notes</h1>
 
 <div id="noteShow">{
  noteList.map((ele,idx)=>{
    return(
      <div key={idx}>
        <div>{ele}<button onClick={()=>deleteNote(idx)}>Delete</button></div>
    </div>
        )
  })
 }</div>
 <button id="plusSign" onClick={AddNote}> +</button>   
</div>

    </>

  )
}

export default Note