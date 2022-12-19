import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../Pages/About'
import Feature from '../Pages/Feature'
import Home from '../Pages/Home'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Feature />} />
            </Routes>
        </>
    )
}

export default Routers