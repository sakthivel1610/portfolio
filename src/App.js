import Home from './components/Home'
import About from './components/about'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import './App.css'

function App()
{
  return(
    <>
    <div className="container">
   <Navbar/>
    <Home/>
    <About/>
  <Skills/>
  <Project/>
  <Contact/>
    </div>


    </>
   
  )
}
export default App