'use client';

import { NAVLINKS } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="absolute z-20  w-full bg-transparent py-4"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15"> 
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/namastelogo.png" 
                alt="logo" 
                width={60} 
                height={48} 
                className="w-20 h-auto" 
              />
            </Link>
          </div>
          <div className=" hidden md:flex items-center space-x-5">            
            {NAVLINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-white text-2xl hover:text-black from-neutral-500" 
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-green-200 hover:bg-green-400 text-black hover:text-white px-6 py-3 rounded-full text-xl transition duration-300"> {/* Increased padding and font size */}
              Contact/Book
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex text-3xl items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Image
                src="/Hamburger_icon.svg.png"
                alt="menu"
                width={40}
                height={40}
                className="h-8 w-8" // Increased size
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAVLINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-white  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full text-left bg-green-200 hover:bg-green-400 text-black hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300">
              Contact/Book
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar