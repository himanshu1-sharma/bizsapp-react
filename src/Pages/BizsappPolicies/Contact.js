import React from 'react'
import LeftPanel from '../HelpCenterContent/LeftPanel'
import BottomFooter from '../Includes/Footer/BottomFooter'
import Footer from '../Includes/Footer/Footer'
import TopFooter from '../Includes/Footer/TopFooter'
import Navigation from '../Includes/Navigation/Navigation'

const Contact = () => {
    return (
        <>
            <Navigation />
            <div className='bizsappPoliciesBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                            <LeftPanel />
                        </div>
                        <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                        <div className="page_content">
                                <div className="page_name">
                                    <h2>Contact</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TopFooter />
            <Footer />
            <BottomFooter />
        </>
    )
}

export default Contact