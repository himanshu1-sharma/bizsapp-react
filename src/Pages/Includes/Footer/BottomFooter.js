import React from 'react'
import youtube from '../../../img/icons/youtube.png'
import facebook from '../../../img/icons/facebook.png'
import insta from '../../../img/icons/insta.png'
import linkedin from '../../../img/icons/linkedin.png'
import twitter from '../../../img/icons/twitter.png'

const BottomFooter = () => {
    return (
        <>
            <div className='bottomFooterBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='bottomFooterContent'>
                                <ul>
                                    <li>© BizsApp From Digrowfa</li>
                                    <li>
                                        Connect with us:
                                        <a href="#">
                                            <img src={youtube} alt="youtube" className='img-fluid' target="_blank" />
                                        </a>
                                        <a href="#">
                                            <img src={insta} alt="insta" className='img-fluid' target="_blank" />
                                        </a>
                                        <a href="#">
                                            <img src={linkedin} alt="linkedin" className='img-fluid' target="_blank" />
                                        </a>
                                        <a href="#">
                                            <img src={facebook} alt="facebook" className='img-fluid' target="_blank" />
                                        </a>
                                        <a href="#">
                                            <img src={twitter} alt="twitter" className='img-fluid' target="_blank" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomFooter