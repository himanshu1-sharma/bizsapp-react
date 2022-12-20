import React from 'react'
import header1 from '../../img/about/header1.webp'
import header2 from '../../img/about/header2.webp'
import './About.css'

const Header = () => {
  return (
    <>
      <div className='aboutHeaderBg mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='aboutHeaderText'>
                <h2>Get Your Business
                  Online</h2>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12'>
              <div className='aboutHeaderImg'>
                <img src={header1} alt="header_image" className='img-fluid' />
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id='order2'>
              <div className='aboutHeaderImg two'>
                <img src={header2} alt="header_image" className='img-fluid' />
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12' id="order1">
              <div className='aboutHeaderText two'>
                <h2>And Expand your
                  business worldwide</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header