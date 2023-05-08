import React, { useState } from 'react';
import { PopUp } from './PopUp'
import Scream from '/imagenes/scream.png';
import { BsPlay } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const Info = () => {


  
  return (
    <>

      <div className="container-info">
        <div className="portada-info">
          <img src={Scream}/>
        </div>
        <div className="content-box-info">
          <div className="title">Titulo Pelicula</div>
          <div className="details">
            <div>2h 23min</div>
            <div>|</div>
            <div>2022</div>
            <div>|</div>
            <div>+18</div>
          </div>
          <div className="tabs">
            <div className="general">GENERAL</div> 
          </div> 
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum, error voluptatem ad perferendis dignissimos veritatis, et est ut vero totam consequatur sit quisquam velit, commodi beatae! Libero, officiis ipsa.</div>
          
          <div className="specific-info-box">
            <div className="specific-title">Autor:</div>
            <div className="specific-name">Pol Iniesta González</div>
          </div> 

          <div className="related_films">
           <div className="title">
              Peliculas Relacionadas
            </div>
            <div className="films">
              <div className="film">
                <img src={Scream} alt="" />
              </div>

              <div className="film">
                <img src={Scream} alt="" />
              </div>
              
              <div className="film">
                <img src={Scream} alt="" />
              </div>
            </div>
            
          </div>

          <div className="buttons">
            <Link to="/play"><div className="button-play"><BsPlay/>Play</div></Link>
          </div>
        </div>
      </div>
              
    </>
  )
}



    

