import React from 'react'

export const Home = () => {
  return (
    <>
    <div className="home-container">
        <div className="home-header">  
            <img src="https://ih1.redbubble.net/image.618387024.1713/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt="" className="home-header-logo" />
        </div>

        <div className="home-content">
            <div className="home-perfil-fotos">
                <div className="home-perfil-foto">
                    <img className="home-perfil-img" src="https://ih1.redbubble.net/image.618387024.1713/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" alt=""/>
                </div>
                <div className="home-perfil-foto">
                    <img className="home-perfil-img" src="https://highxtar.com/wp-content/uploads/2022/09/highxtar-este-es-el-icono-de-perfil-de-netflix-mas-utilizado-destacada.jpg" alt="" />
                </div>
                <div className="home-perfil-foto">
                    <img className="home-perfil-img" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                </div>
                <div className="home-perfil-foto">
                    <img className="home-perfil-img" src="https://ih1.redbubble.net/image.618410788.2644/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" alt=""/>
                </div>
            </div>
            <div className="home-perfil-users">
                <div className="home-perfil-name">
                    <p>Pol Iniesta</p>
                </div>
                <div className="home-perfil-name">
                    <p>Oscaaar</p>
                </div>
                <div className="home-perfil-name">
                    <p>Luciano</p>
                </div>
                <div className="home-perfil-name">
                    <p>JP</p>
                </div>
            </div>
            <div className="home-perfil-config">
                <div className="home-perfil-config-button">Administrar perfiles</div>
            </div>
        </div>
    </div>
</>
  )
}