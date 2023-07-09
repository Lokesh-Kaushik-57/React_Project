import React from 'react'
import Background from '../Images/Background.jpg'
import '../styles/HomeStyle.css'


const Contact = () => {
  return (
    <>
      <div className='home' style={{backgroundImage: `url(${Background})`}}>
        <h1>Contact Us</h1>
      </div>
    </>
  )
}

export default Contact