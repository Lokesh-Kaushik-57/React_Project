import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Link } from 'react-router-dom';
import Carda from '../Images/card1.webp'
import Cardb from '../Images/card2.webp'
import Cardc from '../Images/card3.webp'
import Cardd from '../Images/card4.webp'
import '../styles/CardInvitations.css'

const Cards = () => {
  return (
    <Layout>
      <div className='invite-page'>
        <h1>Wedding Cards</h1>
        <div className='cards'>
          <div>
            <img className='card1 invitation' src={Carda} alt='not found' />
            <h3>Charmed Theme</h3>
          </div>
          <div>
            <img className='card2 invitation' src={Cardb} alt='not found' />
            <h3>Bohemian Theme</h3>
          </div>
          <div>
            <img className='card3 invitation' src={Cardc} alt='not found' />
            <h3>Tulip Garden Theme</h3>
          </div>
          <div>
            <img className='card4 invitation' src={Cardd} alt='not found' />
            <h3>Vivacious Pastel Theme</h3>
          </div>
        </div>
          <Link to='/card-invitations/sample-card-slide'>
            <button className='button'>
              View Sample Card
            </button>
          </Link>
        </div>
    </Layout>
  )
}

export default Cards