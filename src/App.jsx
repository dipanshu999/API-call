
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/Home'

function App() {
  

  return(

    <>
    <nav>
      <Link to={<Home/>}>Home</Link>
      <Link to={<About/>}>About</Link>
      <Link to={<Contact/>}>Contact</Link>
    </nav>
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>

  )
}




export default App
