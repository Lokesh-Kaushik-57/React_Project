import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Link } from 'react-router-dom';
import Banner from '../Images/22378664_6574814.jpg'
import '../styles/HomeStyle.css'

const Home = () => {
  return (
    <Layout>
        <div className='home' style={{backgroundImage: `url(${Banner})`}}>
          <div className='headerContainer'>
            <p>Made for each other</p>
            <br /> <br />
            <h1>Digital Invitations, Personalised Websites & Wedding App</h1>
            <br /> <br />
            <Link to = "/card-invitations">
              <button>
                VIEW INVITE DESIGNS
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Home