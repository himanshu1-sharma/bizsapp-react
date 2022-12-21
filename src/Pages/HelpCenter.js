import React from 'react'
import HelpCenterBody from './HelpCenterContent/HelpCenterBody'
import BottomFooter from './Includes/Footer/BottomFooter'
import Footer from './Includes/Footer/Footer'
import TopFooter from './Includes/Footer/TopFooter'
import Navigation from './Includes/Navigation/Navigation'

const HelpCenter = () => {
    return (
        <>
            <Navigation />
            <HelpCenterBody />
            <TopFooter />
            <Footer />
            <BottomFooter />
        </>
    )
}

export default HelpCenter