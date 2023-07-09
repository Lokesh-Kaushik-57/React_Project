import { React, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Layout from '../Components/Layout/Layout';
import Carousel from './cardInvitations';
import { Link } from 'react-router-dom';
import '../styles/HomeStyle.css';
import Couple from '../Images/couple.png'
import SampleCard from './sampleCard';
import About from './About';
import Contact from './Contact';

const Home = () => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
    }
  }, [inView, mainControls]);

  return (
    <>
      <Layout>
        <div className='home'>
          <div ref={ref} className='headerContainer'>
            <motion.p
              variants={{
                hidden: { x: 1200, opacity: 0.3, scale: 0 },
              }}
              initial="hidden"
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 70,
                delay: 0.5,
              }}
            >
              Made for each other
            </motion.p>
            <br /> <br />
            <motion.h1
              variants={{
                hidden: { opacity: 0.3, scale: 0 },
                // visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={{  opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 100,
                delay: 0.75,
              }}
            >Digital Invitations, Personalised Websites & Wedding App</motion.h1>
            <br /> <br />
            <Link to="/card-invitations">
              <motion.button
                variants={{
                  hidden: {
                    opacity: 0.3, scale: 0,
                  },
                }}
                initial="hidden"
                animate={{
                  opacity: 1, scale: 1, rotate:360,
                }}
                transition={{
                  type: "spring",
                  stiffness: 20,
                  damping: 5,
                  delay: 1,
                }}
              >VIEW INVITE DESIGNS</motion.button>
            </Link>
          </div>
          <motion.div
            variants={{
              hidden: {
                opacity: 1, rotate: 0,
              },
            }}
            initial="hidden"
            animate={{
              opacity: 1, rotate: [15, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 3,
              loop: Infinity,
            }}
          >
            <img src={Couple} alt='not Found' />
          </motion.div>
        </div>
      </Layout>

      <Carousel inViewRef={inViewRef} />
      <SampleCard inViewRef={inViewRef} />
      <About inViewRef={inViewRef} />
      <Contact inViewRef={inViewRef} />
    </>
  );
};

export default Home;
