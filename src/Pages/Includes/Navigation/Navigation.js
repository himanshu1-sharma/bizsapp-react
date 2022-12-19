import React, { useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo/logo.png'

const Navigation = () => {

    const [active, setActive] = useState(false);

    return (
        <>
            <nav className='navigationBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='navigationItem'>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            <img src={logo} alt="bizsapp_logo" className='img-fluid' />
                                        </Link>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="active" />
                                        <label for="active" className="menu-btn mobile-menu"  onClick={() => setActive(!active)}>
                                            <div className="">
                                                <div className={active ? 'menu_click active' : 'menu_click'}>
                                                    <div id="top"></div>
                                                    <div id="middle"></div>
                                                    <div id="bottom"></div>
                                                </div>
                                            </div>
                                        </label>
                                        <div className="wrapper">
                                            <ul>
                                                <li><Link to="/" data-text="Home">Home</Link></li>
                                                <li><Link to="/" data-text="About">About Us</Link></li>
                                                <li><Link to="/" data-text="Feature">Feature</Link></li>
                                                <li><Link to="/" data-text="Community">Community</Link></li>
                                                <li><Link to="/" data-text="HelpCenter">Help Center</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                </div>
            </nav>
        </>
    )
}

export default Navigation