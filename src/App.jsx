import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import { motion, useScroll } from 'framer-motion'
const App = () => {
  // const {scrollYProgress} = useScroll();
  return (
    <>
    <motion.div className="w-full overflow-hidden" >
    <ToastContainer/>
    <Header />
    <About />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer/>
    </motion.div>
      {/* <Navbar/> */}
      
    </>
  )
}

export default App
