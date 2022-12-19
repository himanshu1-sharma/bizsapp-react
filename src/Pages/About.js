import React from 'react'
import AboutBackground from './AboutContent/AboutBackground'
import AboutCommunity from './AboutContent/AboutCommunity'
import AboutVerticalSlider from './AboutContent/AboutVerticalSlider'
import Header from './AboutContent/Header'
import BottomFooter from './Includes/Footer/BottomFooter'
import Footer from './Includes/Footer/Footer'
import TopFooter from './Includes/Footer/TopFooter'
import Navigation from './Includes/Navigation/Navigation'

const About = () => {
    return (
        <>
            <Navigation />
            <Header />
            <AboutCommunity />
            <AboutVerticalSlider />
            <AboutBackground />
            <TopFooter />
            <Footer />
            <BottomFooter />
        </>
    )
}

export default About