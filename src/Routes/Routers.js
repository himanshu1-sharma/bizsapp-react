import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default Routers