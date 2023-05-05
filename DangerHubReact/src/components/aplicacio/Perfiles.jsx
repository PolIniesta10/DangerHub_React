import React from 'react'
import mainLogo from'/imagenes/DANGERHubLOGO.png';
import { Link } from "react-router-dom";

export const Perfiles = () => {
  return (
    <>
    <div className="home-container">
        <div className="home-header">  
            <Link to="/home"><img src={mainLogo} alt="" className="home-header-logo"/></Link>
        </div>

        <div className="home-content">
            <div className="home-titulo">
                <h1>¿Quién eres? Elige tu perfil</h1>
            </div>

            <div className="home-perfil">

                <div className="home-perfil-users">
                    <div className="home-perfil-foto">
                        <img className="home-perfil-img" src="https://ih1.redbubble.net/image.618387024.1713/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt=""/>
                    </div>
                    <div className="home-perfil-name">
                        <p>Pol Iniesta</p>
                    </div>
                </div>

                <div className="home-perfil-users">
                    <div className="home-perfil-foto">
                        <img className="home-perfil-img" src="https://highxtar.com/wp-content/uploads/2022/09/highxtar-este-es-el-icono-de-perfil-de-netflix-mas-utilizado-destacada.jpg" alt="" />
                    </div>
                    <div className="home-perfil-name">
                        <p>Oscaaar</p>
                    </div>
                </div>

                <div className="home-perfil-users">
                    <div className="home-perfil-foto">
                        <img className="home-perfil-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                    </div>
                    <div className="home-perfil-name">
                        <p>Luciano</p>
                    </div>
                </div>

                <div className="home-perfil-users">
                    <div className="home-perfil-foto">
                        <img className="home-perfil-img" src="https://ih1.redbubble.net/image.618410788.2644/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" alt=""/>
                    </div>
                    <div className="home-perfil-name">
                        <p>JP</p>
                    </div>
                </div>
            </div>
            
            <div className="home-perfil-config">
                <Link to="/administrarPerfiles"><div className="home-perfil-config-button">Administrar perfiles</div></Link>
            </div>
        </div>
    </div>
</>
  )
}