import React from 'react'
import Header from './FeatureContent/Header'
import Navigation from './Includes/Navigation/Navigation'
import AboutBackground from './AboutContent/AboutBackground'
import TopFooter from "./Includes/Footer/TopFooter"
import Footer from "./Includes/Footer/Footer"
import BottomFooter from './Includes/Footer/BottomFooter'
import FeatureBody from './FeatureContent/FeatureBody'

const Feature = () => {
    return (
        <>
            <Navigation />
            <Header />
            <FeatureBody />
            <AboutBackground />
            <TopFooter />
            <Footer />
            <BottomFooter />
        </>
    )
}

export default Feature