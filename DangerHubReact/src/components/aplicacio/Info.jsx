import React, { useEffect, useState } from 'react';
import laMonja from '/imagenes/laMonja.jpg';
import loading from'/videos/loading.mp4';
import { InfoGrid } from './InfoGrid';
import { useContext } from 'react';
import { UserContext } from '../../userContext';
import { useDispatch, useSelector } from "react-redux";
import { BsPlay } from 'react-icons/bs';
import { MdBookmarkAdd } from 'react-icons/md';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from "react-router-dom";
import fondoojosrojos from '/videos/fondoojosrojos.mp4';
import peliculasSlice from '../../slices/peliculas/peliculasSlice';
import { getPelicula, getPeliculas } from '../../slices/peliculas/thunks';


export const Info = (v) => {
  
  let [ contenidos,setContenidos ] = useState({});
  const [descriptionVisible, setDescriptionVisible] = useState(true);
  let { authToken,setAuthToken } = useContext(UserContext);
  const dispatch = useDispatch();

  const { peliculas = [], isLoading=true, error="" } = useSelector((state) => state.peliculas);

  const obtContenidos = async (authToken) => {
    let data = null;
    try {
      data = await fetch("http://127.0.0.1:8000/api/contenidos", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken
        },
        method: "GET",
      })
      const resposta = await data.json();
      if (resposta.success === true && resposta.data) {
        console.log(resposta);
        setContenidos(resposta.data);
      }
      else {
        console.log("error");
      }
    }
    catch (error) {
      console.log(error);
      alert("Catch");
      data = {};
    }
  };

  useEffect(() => {

    const container1 = document.querySelector('.films');
    const leftArrow1 = document.querySelector('.carousel-arrow.left-info');
    const rightArrow1 = document.querySelector('.carousel-arrow.right-info');

    leftArrow1.addEventListener('click', () => {
      container1.scrollBy({ left: -1000, behavior: 'smooth' });
    });

    rightArrow1.addEventListener('click', () => {
      container1.scrollBy({ left: 1000, behavior: 'smooth' });
    });

    document.getElementById("description").style.display = "block";

    setDescriptionVisible(true);
    obtContenidos();
    dispatch(getPeliculas(authToken));
  }, []);
  

  // Switch between tabs when a tab button is clicked
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    setDescriptionVisible(tabName === "description");
  }

  return (
    <>
      <div className="video-container" style={{width: "100%"}}>
        <video autoPlay muted loop>
          <source src={fondoojosrojos} type="video/mp4" />
        </video>
      </div>
      <div className="container-info">
        <div className="portada-info">
          <Link to={"/play/"+v.id}><img src={v.url_imagen} draggable="false"/></Link> 
        </div>

        <div className="content-box-info">
          <Link to="/home"><div className="exit"><BiArrowBack/></div></Link>
          <div className="title-content">{v.titulo}</div>

          <div className="details">
            <div>{v.fecha_lanzamiento}</div>
            <div>|</div>
            <div>{v.duracion}</div>
            <div>|</div>
            <div>+18</div>
          </div>

          <div className="tabs">
            <div className="tablink active" onClick={(e) => openTab(e, 'description')}>GENERAL</div>
            <div className="tablink" onClick={(e) => openTab(e, 'opciones')}>MÁS OPCIONES</div> 
          </div> 
          <div id="description" className="tabcontent description" style={{display: descriptionVisible ? "flex" : "none"}}>{v.descripcion}</div>
          <div id="opciones" className="tabcontent opciones" style={{display: descriptionVisible ? "none" : "flex", width: "250px"}}>
            <div><BsPlay/></div>
            <div><MdBookmarkAdd/></div>
            <div><AiOutlineCloudDownload/></div>
          </div>
          
          <div className="specific-info-box">
            <div className="specific-title">Autor:</div>
            <div className="specific-name">Pol Iniesta González</div>
          </div> 

          <div className="related_films">
            <div className="title">Peliculas Relacionadas</div>
            <div className="carousel-arrow left-info"><BsFillArrowLeftCircleFill/></div>
            <div className="carousel-arrow right-info"><BsFillArrowRightCircleFill/></div>

            <div className="films">
              {isLoading ?  
              
                <div className="film">
                  <video autoPlay muted loop src={loading} style={{width: "100%", height: "100%"}}></video>
                  <video autoPlay muted loop src={loading} style={{width: "100%", height: "100%"}}></video>
                  <video autoPlay muted loop src={loading} style={{width: "100%", height: "100%"}}></video>
                </div> 

              : <>{peliculas.map((v) => {
                return (
                  <>
                    <InfoGrid key={v.id} v={v}  {...v}/>
                  </>
                )
              })}</>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



    

