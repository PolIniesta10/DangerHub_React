import React from 'react'
import ositoGominola from'../../assets/ositoGominola.mp4';
import { BsPlay } from 'react-icons/bs';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
        <div className="container">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src={ositoGominola} type="video/mp4"/>
            </video>
            <video>
              <source src={ositoGominola} type="video/mp4"/>
            </video>
            <video>
              <source src={ositoGominola} type="video/mp4"/>
            </video>
          </div>
          <div className="content-box">
            <h1>Título de la caja</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis eu risus consectetur blandit. Sed laoreet, est eu malesuada suscipit, arcu augue hendrerit ante, vel euismod nisl odio sed metus.</p>
            <div className="buttons">
              <div className="button-play"><BsPlay/>Play</div>
              <div className="buttonn-info">Más Info</div>
            </div>
          
            {/* Carrusel de contenido */}
            <section className="content-carousel">
                <p>Lo más visto</p>
              <div className="carousel-container">
                {/* Tarjetas de contenido */}
                <div className="content-card">
                  <img src="https://via.placeholder.com/150" alt="Película 1" />
                  <h3>Película 1</h3>
                </div>
                <div className="content-card">
                  <img src="https://via.placeholder.com/150" alt="Película 2" />
                  <h3>Película 2</h3>
                </div>
                <div className="content-card">
                  <img src="https://via.placeholder.com/150" alt="Película 3" />
                  <h3>Película 3</h3>
                </div>
                <div className="content-card">
                  <img src="https://via.placeholder.com/150" alt="Película 4" />
                  <h3>Película 4</h3>
                </div>
                <div className="content-card">
                  <img src="https://via.placeholder.com/150" alt="Película 5" />
                  <h3>Película 5</h3>
                </div>
                <div className="content-card">
                  <img src="https://via.placeholder.com/150" alt="Película 6 " />
                  <h3>Película 6</h3>
                </div>
              </div>
            </section>
          </div>
        </div>

      
    </>
  )
}

