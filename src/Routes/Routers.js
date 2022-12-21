import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../Pages/About'
import Account from '../Pages/BizsappPolicies/Account'
import BMC from '../Pages/BizsappPolicies/BMC'
import Chat from '../Pages/BizsappPolicies/Chat'
import Connections from '../Pages/BizsappPolicies/Connections'
import Contact from '../Pages/BizsappPolicies/Contact'
import List from '../Pages/BizsappPolicies/List'
import OtherImportantQuestions from '../Pages/BizsappPolicies/OtherImportantQuestions'
import PrivacyPolicy from '../Pages/BizsappPolicies/PrivacyPolicy'
import Profile from '../Pages/BizsappPolicies/Profile'
import Request from '../Pages/BizsappPolicies/Request'
import Terms from '../Pages/BizsappPolicies/Terms'
import Feature from '../Pages/Feature'
import HelpCenter from '../Pages/HelpCenter'
import Home from '../Pages/Home'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Feature />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/BMC" element={<BMC />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/list" element={<List />} />
                <Route path="/request" element={<Request />} />
                <Route path="/other-important-questions" element={<OtherImportantQuestions />} />
            </Routes>
        </>
    )
}

export default Routers