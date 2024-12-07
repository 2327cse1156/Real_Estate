import React from 'react'
import { assets } from '../assets/assets/assets'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.div initial={{opacity:0,x:200}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:true}} id='About' className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
      <p className="text-gray-600 max-w-80 text-center mb-8">Your Gateway to Dream House and Smart Investments</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img alt='' src={assets.brand_img} className="w-full sm:w-1/2 max-w-lg"></img>
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr:28">
                <div>
                    <p className="text-4xl font-medium text-gray-800">10+</p>
                    <p>Years Of Excellence</p>
                </div>
                <div>
                    <p className="text-4xl font-medium text-gray-800">12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className="text-4xl font-medium text-gray-800">20+</p>
                    <p>Mn. Sq. Ft. Delivered</p>
                </div>
                <div>
                    <p className="text-4xl font-medium text-gray-800">25+</p>
                    <p>Ongoing Projects</p>
                </div>
                
            </div>
            <p className="my-10 max-w-lg">We are passionate about helping individuals and families achieve their real estate dreams. With years of experience in the market, we specialize in connecting clients with the perfect properties—whether it’s a cozy home, a luxury estate, or a strategic investment opportunity. Our mission is to provide expert guidance.</p>
                <button className="bg-blue-600 text-white px-8 py-2 rounded">Learn More</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
