import React from 'react'
import './DownloadBtn.css'
import apple from '../../../img/icons/apple.png'
import playStore from '../../../img/icons/playStore.png'

const DownloadBtn = () => {
    return (
        <>

            <a href="#">
                <div className='homeHeaderStorBtn'>
                    <div className='storeImg'>
                        <img src={apple} alt="apple" className='img-fluid' />
                    </div>
                    <div className='storeName'>
                        <span>Download on the</span>
                        <p>App Store</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className='homeHeaderStorBtn'>
                    <div className='storeImg'>
                        <img src={playStore} alt="playStore" className='img-fluid' />
                    </div>
                    <div className='storeName'>
                        <span>GET IT ON</span>
                        <p>Google Play</p>
                    </div>
                </div>
            </a>

        </>
    )
}

export default DownloadBtn