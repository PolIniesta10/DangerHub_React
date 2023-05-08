import React from 'react';
import ositoGominola from '/videos/ositoGominola.mp4';
import { BsPlay } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const PopUp = ({ children }) => {
  
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
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
          {children}
        </div>
      </div>
    </>
  )
}

