import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GlobalStyle } from './components/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import About from './components/About'
import Project from './components/Project'
// import Header from './components/Header'
// import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Footer/>
   </>
  )
}

export default App
