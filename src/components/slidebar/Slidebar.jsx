import React from 'react'
import './slidebar.css'
const Slidebar = () => {
  return (
    <div className='slidebar__container'>
      <div className='silde__container-item section_padding section_margin'>
        <div className='location'>
            <form>
              <label htmlFor='city-name'>Add Location</label>
                <input type='text' id='city-name' name='city-name'></input>
                <button type='submit'>Search</button>
            </form>
            <div className='recent-location'>
              <p>New york</p>
              <p>New york</p>
              <p>New york</p>
              <p>New york</p>
            </div>
        </div>
        <hr className='horizontal-line'></hr>
          <div className='weather-details'>
            <div className='weather-heading'>
              <h2>Weather Details</h2>
            </div>
            <div className='weather-text'>
              <div className='about-cloud'>
                <p>Cloudy</p>
                <p id='cloudy'>86%</p>
              </div>
              <div className='about-humidity'>
                <p>Humidity</p>
                <p id='humidity'>62%</p>
              </div>
              <div className='about-wind'>
                <p>Wind</p>
                <p id='wind'>8 Km/h</p>
              </div>
              <div className='about-pressure'>
                <p>Pressure</p>
                <p id='Pressure'>1020 mBar</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Slidebar;