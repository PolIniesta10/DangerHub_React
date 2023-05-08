import React from 'react';
import ositoGominola from '/videos/ositoGominola.mp4';
import { BsPlay } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const PopUp = ({ children }) => {

  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = () => {
    setShowPopUp(!showPopUp);
  };
  
  
  return (
    <>

      <div
      style={{
        position: 'fixed',
        top: '10%',
        left: '20%',
        right: '20%',
        bottom: '10%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      }}
      >
        <div style={{ backgroundColor: 'white', width: '80%' }}>
          {children}
        </div>
      </div>

      {showPopUp && (
        <PopUp>
          <div className="container-info">
            <div className="video-container-info">
              <video autoPlay muted>
                <source src={ositoGominola} type="video/mp4"/>  
              </video>
            </div>
            <div className="content-box-info">
              <h1>Título de la caja</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis eu risus consectetur blandit. Sed laoreet, est eu malesuada suscipit, arcu augue hendrerit ante, vel euismod nisl odio sed metus.</p>
              <div className="buttons">
                <Link to="/play"><div className="button-play"><BsPlay/>Play</div></Link>
              </div>
            </div>
          </div>
        </PopUp>
      )}
    </>
  )
}

