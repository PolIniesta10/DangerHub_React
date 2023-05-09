import React, { useEffect} from 'react';
import ositoGominola from '/videos/ositoGominola.mp4';
import { BsPlay } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";

export const Home = () => {

  useEffect(() => {
    const container1 = document.querySelector('.carousel-container');
    const leftArrow1 = document.querySelector('.carousel-arrow.left');
    const rightArrow1 = document.querySelector('.carousel-arrow.right');

    leftArrow1.addEventListener('click', () => {
      container1.scrollBy({ left: -1000, behavior: 'smooth' });
    });

    rightArrow1.addEventListener('click', () => {
      container1.scrollBy({ left: 1000, behavior: 'smooth' });
    });

    const container2 = document.querySelector('.carousel-container2');
    const leftArrow2 = document.querySelector('.carousel-arrow2.left');
    const rightArrow2 = document.querySelector('.carousel-arrow2.right');

    leftArrow2.addEventListener('click', () => {
      container2.scrollBy({ left: -1000, behavior: 'smooth' });
    });

    rightArrow2.addEventListener('click', () => {
      container2.scrollBy({ left: 1000, behavior: 'smooth' });
    });

    const container3 = document.querySelector('.carousel-container3');
    const leftArrow3 = document.querySelector('.carousel-arrow3.left');
    const rightArrow3 = document.querySelector('.carousel-arrow3.right');

    leftArrow3.addEventListener('click', () => {
      container3.scrollBy({ left: -1000, behavior: 'smooth' });
    });

    rightArrow3.addEventListener('click', () => {
      container3.scrollBy({ left: 1000, behavior: 'smooth' });
    });
  }, []);

  return (
    <>
        <div className="container">
          <div className="video-container">
            <video autoPlay muted>
              <source src={ositoGominola} type="video/mp4"/>  
            </video>
            <div className="video_home_fade"></div>
          </div>
          <div className="content-box">
            <h1>Título de la caja</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et felis eu risus consectetur blandit. Sed laoreet, est eu malesuada suscipit, arcu augue hendrerit ante, vel euismod nisl odio sed metus.</p>
            <div className="buttons">
              <Link to="/play"><div className="button-play"><BsPlay/>Play</div></Link>
              <Link to="/info"><div className="button-info" ><AiOutlineInfoCircle/>Más Info</div></Link>
            </div>
          
            {/* Carrusel de contenido */}
            <section className="content-carousel">
                <p>Mi Lista</p>
                <div className="carousel-arrow left"><BsFillArrowLeftCircleFill/></div>
                <div className="carousel-arrow right"><BsFillArrowRightCircleFill/></div>
              <div className="carousel-container">
                {/* Tarjetas de contenido */}
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 1" />
                  <h3>Película 1</h3>
                </div>
                <div className="content-card">
                  <img draggable="false" src="https://via.placeholder.com/150" alt="Película 2" />
                  <h3>Película 2</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 3" />
                  <h3>Película 3</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 4" />
                  <h3>Película 4</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 5" />
                  <h3>Película 5</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 6 " />
                  <h3>Película 6</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 7" />
                  <h3>Película 7</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 8" />
                  <h3>Película 8</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 9" />
                  <h3>Película 9</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 10" />
                  <h3>Película 10</h3>
                </div>
              </div>
            </section>

            {/* Carrusel de contenido */}
            <section className="content-carousel">
                <p>Más populares</p>
                <div className="carousel-arrow2 left"><BsFillArrowLeftCircleFill/></div>
                <div className="carousel-arrow2 right"><BsFillArrowRightCircleFill/></div>
              <div className="carousel-container2">
                {/* Tarjetas de contenido */}
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 1" />
                  <h3>Película 1</h3>
                </div>
                <div className="content-card">
                  <img draggable="false" src="https://via.placeholder.com/150" alt="Película 2" />
                  <h3>Película 2</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 3" />
                  <h3>Película 3</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 4" />
                  <h3>Película 4</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 5" />
                  <h3>Película 5</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 6 " />
                  <h3>Película 6</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 7" />
                  <h3>Película 7</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 8" />
                  <h3>Película 8</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 9" />
                  <h3>Película 9</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 10" />
                  <h3>Película 10</h3>
                </div>
              </div>
            </section>

            {/* Carrusel de contenido */}
            <section className="content-carousel">
                <p>Publicados por la comunidad</p>
                <div className="carousel-arrow3 left"><BsFillArrowLeftCircleFill/></div>
                <div className="carousel-arrow3 right"><BsFillArrowRightCircleFill/></div>
              <div className="carousel-container3">
                {/* Tarjetas de contenido */}
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 1" />
                  <h3>Película 1</h3>
                </div>
                <div className="content-card">
                  <img draggable="false" src="https://via.placeholder.com/150" alt="Película 2" />
                  <h3>Película 2</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 3" />
                  <h3>Película 3</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 4" />
                  <h3>Película 4</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 5" />
                  <h3>Película 5</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 6 " />
                  <h3>Película 6</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 7" />
                  <h3>Película 7</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 8" />
                  <h3>Película 8</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 9" />
                  <h3>Película 9</h3>
                </div>
                <div className="content-card">
                  <img  draggable="false"  src="https://via.placeholder.com/150" alt="Película 10" />
                  <h3>Película 10</h3>
                </div>
              </div>
            </section>

            {/* <div className="video-list">
              {videos.map((video) => (
                <Link to={`/videos/${video.id}`} key={video.id}>
                  <img src={video.thumbnailUrl} alt={video.title} />
                  <h2>{video.title}</h2>
                </Link>
              ))}
            </div> */}

          </div>
        </div>
    </>
  )
}

