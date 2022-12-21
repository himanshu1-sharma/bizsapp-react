import React from 'react'
import LeftPanel from './LeftPanel'
import './HelpCenter.css'

const HelpCenterBody = () => {
  return (
    <>
        <div className='helpCenterBg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                        <LeftPanel />
                    </div>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HelpCenterBody