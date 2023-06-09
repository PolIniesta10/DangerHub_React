import './App.css'
import { Routes, Route } from 'react-router-dom'

import { LoginRegister } from './auth/LoginRegister'
import { useState } from 'react'
import { UserContext } from './userContext'
import { Perfiles } from './components/aplicacio/perfiles/Perfiles'
import { PerfilesEdit } from './components/aplicacio/perfiles/PerfilesEdit'
import { PerfilesAdd } from './components/aplicacio/perfiles/PerfilesAdd'
import { AdministrarPerfiles } from './components/aplicacio/perfiles/AdministrarPerfiles'
import { About } from './components/aplicacio/About'
import { Header } from './components/layout/Header'
import { Home } from './components/aplicacio/Home'
import { Buscador } from './components/aplicacio/Buscador'
import { Play } from './components/aplicacio/Play'
import { NotFound } from './components/aplicacio/NotFound'
import { Sidebar } from './components/layout/Sidebar'
import { Info } from './components/aplicacio/Info'
import { ContenidosAdd } from './components/aplicacio/contenidos/ContenidosAdd'

function App() {

  let [usuari, setUsuari] = useState("");
  let [authToken,setAuthToken] = useState("");
  let [idUsuari, setIdUsuari] = useState("");
  let [ perfil, setPerfil ] = useState("");
  
  return (
  <>
  <UserContext.Provider value= { { usuari, setUsuari,authToken,setAuthToken, idUsuari, setIdUsuari }}>
      { authToken != "" ? (
        <>    
        <Routes>
         <Route path="/" element={<Perfiles/>}/>
          <Route path='*' element={<NotFound />} />
          <Route path="/home" element={<><Header/><Sidebar/><Home perfil={perfil}/></>}/>
          <Route path="/search" element={<><Sidebar/><Buscador/></>}/>
          <Route path="/perfiles" element={<Perfiles/>}/>
          <Route path="/perfiles/edit/:id" element={<PerfilesEdit/>}/>
          <Route path="/perfilesAdd" element={<PerfilesAdd/>}/>
          <Route path="/administrarPerfiles" element={<AdministrarPerfiles />} />
          <Route path="/about" element={<><Header/><Sidebar/><About /></>} />
          <Route path="/play/:id" element={<Play />} />
          <Route path="/info/:id" element={<Info perfil={perfil}/>} />
          <Route path="/SubirContenido" element={<><Sidebar/><ContenidosAdd /></>} />          
        </Routes>
       </>

  ) :   <LoginRegister/>
  }
    
  </UserContext.Provider>

 </>
  
  )
}

export default App
