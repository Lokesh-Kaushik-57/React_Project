import {React, useEffect, useState} from "react";
import { motion } from "framer-motion";
import "../styles/SampleCard.css";
import Video from "../Images/sampleVideo.mp4";
import Background from '../Images/Background.jpg';
import { ReactComponent as Flowers } from "../Images/leaves.svg";
import { ReactComponent as GaneshJi } from "../Images/ganesha.svg";
import Mantra from "../Images/mantra.png";
import { ReactComponent as Couple2 } from "../Images/couple2.svg";

const SampleCard = ({inViewRef}) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
    }
  }, [isInView]);

  return (
    <>
    <div className="home" style={{backgroundImage: `url(${Background})`}}>
      <div className="samples">
        <div
          className="card"
          ref={inViewRef}
          >
          <div className="page1">
            <Flowers className="flowers" />
            <div className="ganeshji">
              <GaneshJi />
            </div>
            <div className="text">
              <p>Shree Ganeshay Namah</p>
            </div>
            <div className="Mantra">
              <img src={Mantra} alt="not found" />
            </div>
          </div>
          <div className="page2">
            <Flowers className="flowers" />
            <div className="couple">
              <Couple2 />
            </div>
            <div className="text2">
              Mittal Family Invites you and your Family.
            </div>
            <div className="text3">Celebrations</div>
            <div className="text4">Thank You</div>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 360,
                }
              : {
                  opacity: 0,
                  scale: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 100,
            delay: 0.75,
          }}
          onViewportEnter={() => setIsInView(true)}
          className="video"
          onLoad={() => setIsInView(true)}
          >
          <video controls>
            <source src={Video} type="video/mp4" />
          </video>
        </motion.div>
      </div>
      {/* <div className="heads">
        <div className="headers">Sample card Invitation</div>
        <div className="headers">Sample Video Card</div>
      </div> */}
    </div>
    </>
  );
};

export default SampleCard;
