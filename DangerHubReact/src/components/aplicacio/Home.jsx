import React, { useEffect} from 'react';
import ositoGominola from '/videos/ositoGominola.mp4';
import { BsPlay } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import loading from'/videos/loading.mp4';
import { RecomendedGrid } from './RecomendedGrid';
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useDispatch, useSelector } from "react-redux";
import { getPelicula, getPeliculas } from '../../slices/peliculas/thunks';


export const Home = (v) => {

  let { authToken,setAuthToken } = useContext(UserContext);
  const { peliculas = [], isLoading=true, error="" } = useSelector((state) => state.peliculas);
  const dispatch = useDispatch();

  const randomIndex = Math.floor(Math.random() * peliculas.length);
  const peli_random = peliculas[randomIndex];

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

    dispatch(getPeliculas(authToken));
    console.log(peliculas)
  }, []);

  return (
    <>
        <div className="container">
          {peli_random && (
            <div className="video-container">
              <video autoPlay muted>
                <source src={peli_random.url_video} type="video/mp4"/>  
              </video>
              <div className="video_home_fade"></div>
            </div>
          )}
          <div className="content-box">
            {peli_random && (
              <>
                <h1>{peli_random.titulo}</h1>
                <p>{peli_random.descripcion}</p>
              </>
            )}
            <div className="buttons">
              <Link to={"/play/"+v.id}><div className="button-play"><BsPlay/>Play</div></Link>
              <Link to={"/info/"+v.id}><div className="button-info" ><AiOutlineInfoCircle/>Más Info</div></Link>
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

              {isLoading ?  <div className="content-card"><video autoPlay muted loop className="perfiles-perfil-loading" src={loading}></video></div> : <>{peliculas.map((v) => {
                return (
                  <>
                    <RecomendedGrid key={v.id} v={v}  {...v}/>
                  </>
                )
              })}</>}

              </div>
            </section>

          </div>
        </div>
    </>
  )
}

