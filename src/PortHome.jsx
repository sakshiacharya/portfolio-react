import React from 'react'
import { TopSection } from './component/TopSection'
import { AboutUs } from './component/AboutUs'

export const PortHome = () => {
  return (
    <React.Fragment>
    <div className='port-home-main' >
        <div className='port-head container' >
            <nav>
                <div className='nav-left'>
                <a className='main-title'>Sakshi Acharya</a>
                </div>
                <div className='nav-right' >
                <a className='left-title'>Home</a>
                <a className='left-title'>About Me</a>
                <a className='left-title'>Experience</a>
                <a className='left-title'>Projects</a>
                <a className='left-title'>Certifications</a>
                </div>
            </nav>
        </div>
        <TopSection/> 
        <AboutUs/>
    </div>
    </React.Fragment>
  )
}
