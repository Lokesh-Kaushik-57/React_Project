import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from '../../Images/Background.jpg'
import '../../styles/HomeStyle.css'


const Layout = ({children}) => {
  return (
    <>
        <Header />
        <div className='home' style={{backgroundImage: `url(${Banner})`}}>{children}</div>
        <Footer />
    </>
  )
}

export default Layout