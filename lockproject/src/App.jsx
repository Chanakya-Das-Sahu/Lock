import React, { useState } from 'react'
import Note from './note'
import Home from './home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
             <Route path="/note" element={<Note />} />
             
            
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App ;