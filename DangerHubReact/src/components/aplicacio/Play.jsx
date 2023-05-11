import React, { useRef  } from 'react';
import ositoGominola from '/videos/ositoGominola.mp4';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from "react-router-dom";

export const Play = () => {
  const videoRef = useRef(null);

  return (
    <>
      <div className="video-player">
        <Link to="/home"><div className="exit"><BiArrowBack/></div></Link>
        <video autoPlay controls ref={videoRef}>
          <source src={ositoGominola} type="video/mp4" />
        </video>
      </div>
    </>
  )
};


