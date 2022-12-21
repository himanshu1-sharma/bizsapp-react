import React from 'react'
import LeftPanel from '../HelpCenterContent/LeftPanel'
import BottomFooter from '../Includes/Footer/BottomFooter'
import Footer from '../Includes/Footer/Footer'
import TopFooter from '../Includes/Footer/TopFooter'
import Navigation from '../Includes/Navigation/Navigation'
import Accordion from "react-bootstrap/Accordion";

const Request = () => {
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
                                    <h2>Request</h2>
                                </div>
                                <div className="content">
                                    <div className="q_and_a">
                                        <Accordion defaultActiveKey="0" flush>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Is there any blocking option on BizsChat?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, You Can Easily Block Any User If You Want.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>If the user is not in my connection list, Can I chat with that user?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, You Can Easily Send a Message Request to any user, but in the case of a message request-reply, first the user has to accept the message request after that you can chat with each other.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>Can I create unlimited lists according to the requirement? </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, you can create unlimited lists according to your business requirements.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>Can the user share media files over the chat with the other BizsApp users?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, BizsApp provides these facilities so the user can share media files with their connections and other users.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="4">
                                                <Accordion.Header>Does BizsChat support voice messages?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, Users can Share Voice Messages Easily</p>
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

export default Request