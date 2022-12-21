import React from 'react'
import LeftPanel from '../HelpCenterContent/LeftPanel'
import BottomFooter from '../Includes/Footer/BottomFooter'
import Footer from '../Includes/Footer/Footer'
import TopFooter from '../Includes/Footer/TopFooter'
import Navigation from '../Includes/Navigation/Navigation'
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const OtherImportantQuestions = () => {
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
                                    <h2>Other Important Questions</h2>
                                </div>
                                <div className="content">
                                    <div className="q_and_a">
                                        <Accordion defaultActiveKey="0" flush>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Can a User Send a Connection Request to Any User?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Yes, users send a connection request to any user they want.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>How Do Users Verify Phone Numbers?</Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Requirements</p>
                                                    <ul>
                                                        <li>You can only verify a phone number you own.</li>
                                                        <li>You must be able to receive phone calls and SMS to the phone number you are trying to verify.</li>
                                                        <li>You must have any call-blocking settings, apps, or task killers disabled.</li>
                                                        <li>You must have a working Internet connection through mobile data or Wi-Fi. If you're roaming or have a bad connection, verification may not work. Try opening www.BizsApp.com on your phone’s Internet browser to see if you are connected to the Internet.</li>
                                                        <li>How to Confirm</li>
                                                        <li>Enter your phone number.</li>
                                                        <li>Choose your country from the drop-down list. The drop-down list automatically fills in your country code on the left.</li>
                                                        <li>Enter your phone number in the box on the right. Don't put any 0 before your phone number.</li>
                                                        <li>Tap Next to request a code.</li>
                                                        <li>Enter the 4-digit code you received via SMS.</li>
                                                        <li>If you didn't receive the 4-digit code by SMS,</li>
                                                        <li>Wait for the progress bar to finish and retry. The wait may take up to 10 minutes.</li>
                                                        <li>Don't guess the code, or you will be locked out for a period of time.</li>
                                                        <li>If the timer runs out before you receive the code, an option will appear to request a phone call. Choose the "Call me" option to request the call. When you answer the call, an automated voice should tell you the 4-digit code. Insert that to verify BizsApp.</li>
                                                        <li>Depending on your carrier, you might receive charges for SMS and phone calls.</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>How do I Manage Notifications on BizsApp? </Accordion.Header>
                                                <Accordion.Body>
                                                    <ul>
                                                        <li>Open BizsApp, then options, tap on Settings, and then tap on Notifications.</li>
                                                        <li>For notifications about messages, groups, and calls, you can:</li>
                                                        <li>You can turn on or off the sound of receiving and sending messages.</li>
                                                        <li>You can set the time of vibration.</li>
                                                        <li>You can set whether to show popup notifications on Android 9 or earlier. This will make the notifications appear in the middle of the screen.</li>
                                                        <li>You can choose the color of the notification light.</li>
                                                        <li>Decide whether to use high-priority notifications on Android 5 or newer. This displays previews of notifications at the top of the screen. It can also be used to turn off banner notifications.</li>
                                                        <li>By turning off high-priority notifications, the notifications received on BizsApp appear at the bottom of the screen.</li>
                                                        <li>To reset notification settings, go to Settings and tap on Notifications. After that, you have the option to Reset Notification Settings, then tap Reset.</li>
                                                    </ul>
                                                </Accordion.Body>
                                            </Accordion.Item>

                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header>How to edit your profile name?</Accordion.Header>
                                                <Accordion.Body>
                                                    <ol>
                                                        <li>Open BizsApp.</li>
                                                        <li>Press Options <FontAwesomeIcon icon={faAngleRight} /> Settings <FontAwesomeIcon icon={faAngleRight} /> Profile.</li>
                                                        <li>Select Name.</li>
                                                        <li>Press Edit and then enter your new name.</li>
                                                        <li>The name cannot be longer.</li>
                                                        <li>Press Save.</li>
                                                        <li>Your profile name will also be visible to users your </li>
                                                        <li>Open BizsApp.</li>
                                                        <li>Press Options <FontAwesomeIcon icon={faAngleRight} /> Settings <FontAwesomeIcon icon={faAngleRight} /> Profile.</li>
                                                        <li>Select Details.</li>
                                                        <li>Press Edit and then enter your new details.</li>
                                                        <li>Press Save.</li>
                                                    </ol>
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

export default OtherImportantQuestions