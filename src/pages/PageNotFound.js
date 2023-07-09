import React from 'react'
import Background from '../Images/Background.jpg'
import '../styles/HomeStyle.css'


const PageNotFound = () => {
  return (
        <>
          <div className='home' style={{backgroundImage: `url(${Background})`}}>
            <h1>Page Not Found</h1>
          </div>
        </>
    
  )
}

export default PageNotFound