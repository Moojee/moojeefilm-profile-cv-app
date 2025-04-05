import React from 'react'
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <CssBaseline/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App