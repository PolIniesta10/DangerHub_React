import './App.css'
// import { LoginRegister } from './auth/LoginRegister'
// import { useState } from 'react'
// import { UserContext } from './userContext'
import { Routes,Route } from 'react-router-dom'
import { Home } from './components/aplicacio/Home'
import { Header } from './components/layout/Header'
import { About } from './components/aplicacio/About'
import { NotFound } from './components/aplicacio/NotFound'

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
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
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
