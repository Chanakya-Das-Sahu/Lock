import React, { useState } from 'react'
import Note from './note'
import Home from './home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [route,setRoute]=useState("rani")
    return (
        <>
            <BrowserRouter>
                <Routes>
                   <Route path='/' element={<Home fun={setRoute}/>}/>
                   <Route path="/note" element={<Note />} />
                    
 
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App ;