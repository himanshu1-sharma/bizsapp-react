import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className='footerBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='footerList'>
                                <h4>About Us</h4>
                                <ul>
                                    <li>
                                        <Link to="/career">Career</Link>
                                    </li>
                                    <li>
                                        <Link to="/branding">Branding</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='footerList'>
                                <h4>Features</h4>
                                <ul>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link to="/bmc">BMC</Link>
                                    </li>
                                    <li>
                                        <Link to="/updates">Updates</Link>
                                    </li>
                                    <li>
                                        <Link to="/conversation">Chat</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Search & Explore</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='footerList'>
                                <h4>Community</h4>
                                <ul>
                                    <li>
                                        <Link to="/guidlines">Guidlines</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='footerList'>
                                <h4>Help Center</h4>
                                <ul>
                                    <li>
                                        <Link to="/terms">Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy">Privacy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer