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
import Contact from './components/Contact'
import  Main  from './components/Main'
// import Header from './components/Header'
// import Footer from './components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <GlobalStyle/> */}
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
   </>
  )
}

export default App
