import './App.css'
// import { LoginRegister } from './auth/LoginRegister'
// import { useState } from 'react'
// import { UserContext } from './userContext'
import { Routes,Route } from 'react-router-dom'
import { Perfiles } from './components/aplicacio/Perfiles'
import { PerfilesAdd } from './components/aplicacio/PerfilesAdd'
import { AdministrarPerfiles } from './components/aplicacio/AdministrarPerfiles'
import { About } from './components/aplicacio/About'
import { Header } from './components/layout/Header'
import { Home } from './components/aplicacio/Home'
import { Play } from './components/aplicacio/Play'
import { NotFound } from './components/aplicacio/NotFound'
import { Sidebar } from './components/layout/Sidebar'
import { Info } from './components/aplicacio/Info'


function App() {

  // let [usuari, setUsuari] = useState("");
  // let [authToken,setAuthToken] = useState("");
  // let [idUsuari, setIdUsuari] = useState("");

  
  return (
  //  <>

  //   <UserContext.Provider value= { { usuari, setUsuari,authToken,setAuthToken, idUsuari, setIdUsuari }}>
      
  //     { authToken != "" ? (
      
        <>
        {/* <Header/> */}
      
         <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path="/" element={<><Header/><Sidebar/><Home /></>}/>
            <Route path="/home" element={<><Header/><Sidebar/><Home /></>}/>
            <Route path="/perfiles" element={<Perfiles/>}/>
            <Route path="/perfilesAdd" element={<PerfilesAdd/>}/>
            <Route path="/administrarPerfiles" element={<AdministrarPerfiles />} />
            <Route path="/about" element={<><Header/><Sidebar/><About /></>} />
            <Route path="/play" element={<Play />} />
            <Route path="/info" element={<Info />} />
           
        </Routes>

        {/* <Footer/> */}
       </>

  //   ) :  <LoginRegister /> }
    
  //   </UserContext.Provider>

  //     {/* <LoginRegister/> */}
  //  </>
  
  )
}

export default App
