import React from 'react'
import { assets } from '../assets/assets/assets'
const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id='Footer'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark}>
          </img>
          <p className="text-gray-400 mt-4">The footer section of our real estate website provides essential information to enhance your browsing experience. Here, you'll find quick links to important pages such as property listings, about us, contact information, privacy policy, and terms of service. Additionally, we offer social media icons to stay connected and updated with our latest offerings. Whether you’re looking to buy, sell, or rent, our footer ensures easy access to the tools and resources you need to make informed decisions in the real estate market.</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0"><h3 className="text-white text-lg font-bold mb-4">Company</h3>
        <ul className="flex flex-col gap-2 text-gray-400">
          <a href='#Header' className="hover:text-white">Home</a>
          <a href='#About' className="hover:text-white">About</a>
          <a href='#Contact' className="hover:text-white">Contact us</a>
          <a href='#' className="hover:text-white">Privacy Policy</a>
        </ul>
        </div>
        <div className="w-full md:w-1/3">
        <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
        <p className="text-gray-400 mb-4 max-w-80">
          The latest news,articles and resources sent to your inbox weekly.
        </p>
        <div className="gap-2 flex">
          <input type='email' placeholder='Enter your email' className="p-2 rounded bg-gray-800 text-gray-400 focus:outline-none border border-gray-700 w-full md:w-auto"></input>
          <button  className="py-2 px-4 rounded bg-blue-500 text-white">Subscribe</button>
        </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 &#169; Ansh All Right Reserved.
      </div>
    </div>
  )
}

export default Footer
