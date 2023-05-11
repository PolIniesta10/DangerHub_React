import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { RiHome2Line } from 'react-icons/ri';
import { RiFileListLine } from 'react-icons/ri';
import { BiCloudDownload } from 'react-icons/bi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { BsPlusCircle } from 'react-icons/bs';

export const Sidebar =  () => {

  const logOut = async (authToken) => {
    try {
      const data = await fetch("http://127.0.0.1:8000/api/logout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Authorization': 'Bearer '  + authToken
        },
        method: "POST",
      });
      const resposta = await data.json();
      if (resposta.success === true) {
        setAuthToken("");
      }
    }
    catch (error) {
      console.log(error);
      alert("Catch");
    }
  };

  useEffect(() => {
    // seleccionar todos los elementos <a> del sidebar
    var sidebarIcons = document.querySelectorAll('.sidebar-navigation ul li');

    // agregar un evento click a cada elemento <a>
    sidebarIcons.forEach(function(icon) {
      icon.addEventListener('click', function(event) {
        event.preventDefault(); // evitar que se siga el enlace
        // eliminar la clase .active de todos los elementos <a>
        sidebarIcons.forEach(function(icon) {
          icon.classList.remove('active');
        });
        // agregar la clase .active al elemento <a> que se ha hecho clic
        this.classList.add('active');
      });
    });
  }, []);

  return (
    <div className="sidebar">
      <div className='sidebar-perfil'>
        <Link to="/perfiles"><img src="https://highxtar.com/wp-content/uploads/2022/09/highxtar-este-es-el-icono-de-perfil-de-netflix-mas-utilizado-destacada.jpg" alt=""/></Link>
      </div>

      <nav className="sidebar-navigation">
        <ul>
          <li id="icon1"><FiSearch/></li>
          <Link to="/home"><li id="icon2"><RiHome2Line/></li></Link>
          <Link to="/Milista"><li id="icon3"><RiFileListLine/></li></Link>
          <Link to="/MisDescargas"><li id="icon4"><BiCloudDownload/></li></Link>
          <Link to="/MiCuenta"><li id="icon5"><MdOutlineManageAccounts/></li></Link>
          <Link to="/SubirContenido"><li id="icon5"><BsPlusCircle/></li></Link>
        </ul>
      </nav>

      <nav className="sidebar-navigation sidebar-logout">
        <ul>
          <li id="icon6"><FiLogOut onClick={logOut}/></li>
        </ul>
      </nav>
    </div>
  )
}
