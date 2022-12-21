import React from 'react'
import LeftPanel from '../HelpCenterContent/LeftPanel'
import BottomFooter from '../Includes/Footer/BottomFooter'
import Footer from '../Includes/Footer/Footer'
import TopFooter from '../Includes/Footer/TopFooter'
import Navigation from '../Includes/Navigation/Navigation'
import Accordion from 'react-bootstrap/Accordion'

const BMC = () => {
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
                                    <h2>Business Management Card</h2>
                                </div>
                                <div className="content">
                                    <div className='q_and_a'>
                                        <Accordion defaultActiveKey="0" flush>

                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Can I Share My BMC with Anyone?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, you can share your BMC with anyone in BizsApp or any other platform.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Is it possible to make my card private? </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, you can easily make your card private.
                                                        Click on the "Edit" button. You will encrypt your card in the Edit Section by clicking on that option "Private".</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Is Business Management Card by BizsApp Free of Cost?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, BizsApp Is Totally Free. In fact, All Features On BizsApp Are Free of Cost.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Can I Make Two Different Cards by Using the Same Number?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>No, You can not create two cards by using a single phone number. In simple words "One account, one BMC".</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
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

export default BMC