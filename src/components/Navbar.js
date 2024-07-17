'use client';
import { NAVLINKS } from "../../constants"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-20 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    } py-4`}>
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
          <div className="hidden md:flex items-center space-x-5">            
            {NAVLINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`text-2xl hover:text-black transition-colors ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="contact-book">
              <button className={`px-6 py-3 rounded-full text-xl transition duration-300 ${
                isScrolled 
                  ? 'bg-green-200 hover:bg-green-400 text-black hover:text-white' 
                  : 'bg-green-300 hover:bg-green-400 text-black'
              }`}>
                Contact/Book
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex text-3xl items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                isScrolled ? 'text-black hover:bg-gray-200' : 'text-white hover:bg-white/20'
              }`}>
              <span className="sr-only">Open main menu</span>
              <Image
                src="/Hamburger_icon.svg.png"
                alt="menu"
                width={40}
                height={40}
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-black/50'
          }`}>
            {NAVLINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isScrolled ? 'text-black hover:bg-gray-200' : 'text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact-book">
              <button className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                isScrolled 
                  ? 'bg-green-200 hover:bg-green-400 text-black hover:text-white' 
                  : 'bg-green-300 hover:bg-green-400 text-black'
              }`}>
                Contact/Book
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar