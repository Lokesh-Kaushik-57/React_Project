import React, { useEffect, useRef } from 'react'
import Layout from '../Components/Layout/Layout'
import '../styles/SampleCard.css'
import Video from '../Images/sampleVideo.mp4'
import {ReactComponent as Flowers} from '../Images/leaves.svg'
import { ReactComponent as GaneshJi } from '../Images/ganesha.svg'
import  Mantra from '../Images/mantra.png'
import {ReactComponent as Couple2} from '../Images/couple2.svg'

const SampleCard = () => {
    const confettiContainerRef = useRef(null);

  useEffect(() => {
    const confettiCount = 60; // Number of confetti particles

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('span');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confettiContainerRef.current.appendChild(confetti);
    }
  }, []);
    
  return (
    <Layout>
      <div className='samples'>
        <div className='card'>
            <Flowers className='flowers' />
            <div className='ganeshji'>
                <GaneshJi />
            </div>
            <div className='text'>
                <p>Shree Ganeshay Namah</p>
            </div>
                <div className="confetti-container" ref={confettiContainerRef}></div>
                <div className='Mantra'>
                    <img src={Mantra} alt="not found" />
                </div>
                <div className='couple'>
                    <Couple2 />
                </div>
                <div className='text2'>
                    Mittal Family Invites you and your Family.
                </div>
                <div className="text3">
                    Celebrations
                </div>
                <div className="text4">
                    Thank You
                </div>
        </div>
        <div className='video'>
            <video controls>
            <source src={Video} type="video/mp4" />
            </video>
        </div>
      </div>
      <div className='heads'>
        <div className='headers'>Sample card Invitation</div>
        <div className='headers'>Sample Video Card</div>
      </div>
    </Layout>
  )
}

export default SampleCard