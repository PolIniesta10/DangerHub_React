import React from 'react'
import mainLogo from'../../assets/DANGERHubLOGO.png';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>

        <div className="App">
      {/* Encabezado */}
      <header>
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Más recientes</li>
            <li>Mi lista</li>
          </ul>
        </nav>
      </header>

      {/* Lista de categorías */}
      <section className="category-list">
        <h2>Categorías populares</h2>
        <ul>
          <li>Acción</li>
          <li>Comedias</li>
          <li>Dramas</li>
          <li>Terror</li>
          <li>Ciencia ficción</li>
        </ul>
      </section>

      {/* Carrusel de contenido */}
      <section className="content-carousel">
        <h2>Lo más visto</h2>
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
        </div>
      </section>
    </div>

    </>
  )
}

