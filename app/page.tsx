'use client'

import NavBar from "./components/NavBar"
import About from "./components/About"
import Work from './components/Work'
import Final from './components/Final'
import Footer from "./components/Footer"

const Home = () => {
  return (
    <div>
      <NavBar />
      <About />
      <Work />
      <Final />
      <Footer />
    </div>
  )
}

export default Home