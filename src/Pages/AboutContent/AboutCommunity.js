import React from 'react'
import { Link } from 'react-router-dom'

const AboutCommunity = () => {
    return (
        <>
            <div className='aboutCommunityBg mb-5'>
                <div className='aboutCommunityOverlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12'>
                                <div className='aboutCommunityContent'>
                                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has</h2>
                                    <p><Link to="/">Community </Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCommunity