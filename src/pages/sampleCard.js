import React from "react";
import Layout from "../Components/Layout/Layout";
import "../styles/SampleCard.css";
import Video from "../Images/sampleVideo.mp4";
import { ReactComponent as Flowers } from "../Images/leaves.svg";
import { ReactComponent as GaneshJi } from "../Images/ganesha.svg";
import Mantra from "../Images/mantra.png";
import { ReactComponent as Couple2 } from "../Images/couple2.svg";

const SampleCard = () => {
  return (
    <Layout>
      <div className="samples">
        <div className="card">
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
        <div className="video">
          <video controls>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="heads">
        <div className="headers">Sample card Invitation</div>
        <div className="headers">Sample Video Card</div>
      </div>
    </Layout>
  );
};

export default SampleCard;
