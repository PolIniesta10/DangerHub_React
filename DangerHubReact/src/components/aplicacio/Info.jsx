import React from 'react';
import ositoGominola from '/videos/ositoGominola.mp4';
import { BsPlay } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const Info = () => {
  
  return (
    <>
        <div className="container-info">
          <div className="video-container-info">
            <video autoPlay>
              <source src={ositoGominola} type="video/mp4"/>  
            </video>
          </div>
          <div className="content-box-info">
            <h1>Título de la caja</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis eu risus consectetur blandit. Sed laoreet, est eu malesuada suscipit, arcu augue hendrerit ante, vel euismod nisl odio sed metus.</p>
            <div className="buttons">
              <Link to="/play"><div className="button-play"><BsPlay/>Play</div></Link>
              <Link to="/info"><div className="button-info"><AiOutlineInfoCircle/>Más Info</div></Link>
            </div>
          </div>
        </div>
    </>
  )
}

