import React from 'react'
import { Link } from 'react-router-dom';
import newBizsapp from '../../img/about/new.webp'
import product from '../../img/about/product.webp'
import service from '../../img/about/service.webp'
import bmc from '../../img/about/BMC.webp'
import updates from '../../img/about/updates.webp'
import conversation from '../../img/about/conversation.webp'
import nextArrow from '../../img/icons/nextBlackArrow.png'
import './Feature.css'

const FeatureBody = () => {
    return (
        <>
            <div className='featureBodyBg'>
                <div className='container'>
                    <div className='featureContent'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12' id='order2'>
                                <div className='aboutVerticalSliderContent'>
                                    <h2>Add Products</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s,</p>
                                    <div className='aboutVerticalSliderContentClick'>
                                        <Link to='/products'>Products</Link>
                                        <img src={nextArrow} alt={nextArrow} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12' id='order1'>
                                <div className='aboutVerticalSliderImg'>
                                    <img src={product} alt="product" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='featureContent'>
                        <div className='row'>
                            <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12'>
                                <div className='aboutVerticalSliderImg one'>
                                    <img src={service} alt="service" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12'>
                                <div className='aboutVerticalSliderContent one'>
                                    <h2>Add Services</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s,</p>
                                    <div className='aboutVerticalSliderContentClick'>
                                        <Link to='/services'>Services</Link>
                                        <img src={nextArrow} alt={nextArrow} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='featureContent'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12' id='order2'>
                                <div className='aboutVerticalSliderContent'>
                                    <h2>Create BMC</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s,</p>
                                    <div className='aboutVerticalSliderContentClick'>
                                        <Link to='/bmc'>BMC</Link>
                                        <img src={nextArrow} alt={nextArrow} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12' id='order1'>
                                <div className='aboutVerticalSliderImg'>
                                    <img src={bmc} alt="bmc" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='featureContent'>
                        <div className='row'>
                            <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12'>
                                <div className='aboutVerticalSliderImg one'>
                                    <img src={updates} alt="updates" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12'>
                                <div className='aboutVerticalSliderContent one'>
                                    <h2>Daily Updates</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s,</p>
                                    <div className='aboutVerticalSliderContentClick'>
                                        <Link to='/updates'>Updates</Link>
                                        <img src={nextArrow} alt={nextArrow} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='featureContent'>
                        <div className='row'>
                            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12' id='order2'>
                                <div className='aboutVerticalSliderContent'>
                                    <h2>Have A Conversation</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s,</p>
                                    <div className='aboutVerticalSliderContentClick'>
                                        <Link to='/conversation'>Chat</Link>
                                        <img src={nextArrow} alt={nextArrow} className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12' id='order1'>
                                <div className='aboutVerticalSliderImg'>
                                    <img src={conversation} alt="conversation" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureBody