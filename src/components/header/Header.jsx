import React from 'react'
import './header.css';
import images from '../../assets/cloud.png'
const Header = () => {
  return (
    <div className='container section_margin'>
        <div className=' container-item section_padding'>
            <div className='container-heading'>
                <h1>skyCast</h1>
            </div>
            <div className='container-text'>
                <div className='temp'>
                    <p id='temp'>16</p>
                </div>
                <div className='city-name'>
                    <p id='city-name'>london</p>
                    <p id='current-time'>time</p>
                </div>
                <div className='weather-images'>
                    <img src={images} id='icon' />
                    <p className='weather-description' id='main'>cloudy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;