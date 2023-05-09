import React, { useEffect, useState } from 'react';
import laMonja from '/imagenes/laMonja.jpg';
import noRespires from '/imagenes/noRespires.jpg';
import Saw from '/imagenes/Saw.jpg';
import Saw4 from '/imagenes/Saw4.jpg';
import Anabelle from '/imagenes/Anabelle.jpg';

import { BsPlay } from 'react-icons/bs';
import { MdBookmarkAdd } from 'react-icons/md';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from "react-router-dom";
import fondoojosrojos from '/videos/fondoojosrojos.mp4';


export const Info = () => {
  
  let [ contenidos,setContenidos ] = useState({});


  const obtContenidos = async () => {
    try{
        const data = await fetch("http://127.0.0.1:8000/api/contenidos", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + authToken
          },
          method: "GET",
        })
          const resposta = await data.json();
          if (resposta.success === true) {
              console.log(resposta);
              setContenidos(resposta.data);
          }
          else {
            console.log("error");
          }
    }
    catch {
      console.log(data);
      alert("Catch");
    }
  };
  const [descriptionVisible, setDescriptionVisible] = useState(true);

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
  }, []);

  // Open the default tab on page load
  

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
      <div className="video-container">
        <video autoPlay muted loop>
          <source src={fondoojosrojos} type="video/mp4" />
        </video>
      </div>
      <div className="container-info">
        <div className="portada-info">
          <Link to={"/play"}><img src={laMonja} draggable="false"/></Link>
        </div>

        <div className="content-box-info">
          <Link to="/home"><div className="exit"><BiArrowBack/></div></Link>
          <div className="title-content">La Monja</div>

          <div className="details">
            <div>2022</div>
            <div>|</div>
            <div>2h 23min</div>
            <div>|</div>
            <div>+18</div>
          </div>

          <div className="tabs">
            <div className="tablink active" onClick={(e) => openTab(e, 'description')}>GENERAL</div>
            <div className="tablink" onClick={(e) => openTab(e, 'opciones')}>MÁS OPCIONES</div> 
          </div> 
          <div id="description" className="tabcontent description" style={{display: descriptionVisible ? "flex" : "none"}}>
          Tras la muerte de una joven monja en un convento de Rumanía El Vaticano envía para realizar una investigación a una monja a punto tomar los votos y a un cura experto en posesiones. Una terrible confrontación entre el mundo de los vivos y el de los muertos se producirá con su llegada al convento.
          </div>
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
              <div className="film">
                <img src={noRespires} alt="" draggable="false"/>
              </div>

              <div className="film">
                <img src={Saw} alt="" draggable="false"/>
              </div>
              
              <div className="film">
                <img src={Saw4} alt="" draggable="false"/>
              </div>
          
              <div className="film">
                  <img src={Anabelle} alt="" draggable="false"/>
              </div>

              <div className="film">
                <img src={noRespires} alt="" draggable="false"/>
              </div>

              <div className="film">
                <img src={Saw} alt="" draggable="false"/>
              </div>

              <div className="film">
                <img src={Saw4} alt="" draggable="false"/>
              </div>

              <div className="film">
                <img src={Anabelle} alt="" draggable="false"/>
              </div>
              
            </div>
          </div>

        </div>
      </div>
              
    </>
  )
}



    

