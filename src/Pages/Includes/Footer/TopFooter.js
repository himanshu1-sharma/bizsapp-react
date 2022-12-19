import React from 'react'
import DownloadBtn from '../DownloadBtn/DownloadBtn'
import './Footer.css'

const TopFooter = () => {
    return (
        <>
            <div className='topFooterBg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='topFooterContent'>
                                <h2>Download For iOS & Android</h2>
                                <div className='d-flex'>
                                    <DownloadBtn />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopFooter