import React, { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import chat from '../../img/icons/chat.png'
import account from '../../img/icons/account.png'
import profile from '../../img/icons/profile.png'
import bmc from '../../img/icons/bmc.png'
import connections from '../../img/icons/connections.png'
import hschat from '../../img/icons/hschat.png'
import List from '../../img/icons/List.png'
import ConnectionRequest from '../../img/icons/Connection-request.png'
import oiq from '../../img/icons/oiq.png'
import terms from '../../img/icons/terms.png'
import lock from '../../img/icons/lock.png'
import contact from '../../img/icons/contact.png'

const LeftPanel = () => {

    const [active, setActive] = useState();

    const stickyPanel = () => {
        let windowHeight = window.scrollY;
        windowHeight > 80 ? setActive("active") : setActive("");
    }

    useEffect(() => {
        window.addEventListener("scroll", stickyPanel);
    }, [])

    return (
        <>
            <div className={`leftPanel ${active}`}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><img src={chat} alt="chat" className='img-fluid' /> BizsApp FAQ's</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <NavLink exact activeClassName="active" to="/account">
                                    <li><img src={account} alt="account" className='img-fluid' /> Account</li>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/profile">
                                    <li><img src={profile} alt="profile" className='img-fluid' /> Profile</li>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/BMC">
                                    <li><img src={bmc} alt="bmc" className='img-fluid' /> Business Management Card</li>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/connections">
                                    <li><img src={connections} alt="connections" className='img-fluid' /> Connections</li>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/chat">
                                    <li><img src={hschat} alt="hschat" className='img-fluid' /> Chat</li>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/list">
                                    <li><img src={List} alt="List" className='img-fluid' /> List</li>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/request">
                                    <li><img src={ConnectionRequest} alt="ConnectionRequest" className='img-fluid' /> Request</li>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/other-important-questions">
                                    <li><img src={oiq} alt="oiq" className='img-fluid' /> Other Important Questions</li>
                                </NavLink>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <ul>
                    <NavLink exact activeClassName="active" to="/terms">
                        <li><img src={terms} alt="terms" className='img-fluid' /> Terms</li>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/privacy-policy">
                        <li><img src={lock} alt="lock" className='img-fluid' /> Privacy Policy</li>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/contact">
                        <li><img src={contact} alt="contact" className='img-fluid' /> Contact</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default LeftPanel