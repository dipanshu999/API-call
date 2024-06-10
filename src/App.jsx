
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  
  const [darkMode,setDarkMode]= useState(false);
  function setMode(){
    setDarkMode((prev)=>!prev)
  }
  return(
    
    <div className={`max-w-[1400px] mx-auto  `}  >
    
    <Navbar darkMode={darkMode} setMode={setMode}/>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
      </Routes>
    </div>

  )
}




export default App
