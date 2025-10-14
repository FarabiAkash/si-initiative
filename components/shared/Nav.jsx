'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import darkLogo from '../../public/assets/logoDark.svg'
import lightLogo from '../../public/assets/logoLight.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = ({ openContactModal }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shouldShowWhiteBg =
    isScrolled ||
    pathname === '/about-us' ||
    pathname.startsWith('/blogs/') ||
    pathname.startsWith('/case-studies/')

  const isActive = path =>
    pathname === path || pathname.startsWith(`${path}/`)
      ? `${
          shouldShowWhiteBg ? 'text-[#010101]' : 'text-white'
        } after:absolute after:bottom-[-4px] after:left-0 after:w-full after:bg-secondary after:rounded-full border-b-2 border-[#F05232]`
      : `${
          shouldShowWhiteBg ? 'text-[#010101]' : 'text-white'
        } hover:border-b-2 hover:border-[#F05232]`

  return (
    <header
      className={`fixed top-0 w-[100vw] left-0 z-[50] transition-all duration-300 ${
        shouldShowWhiteBg
          ? 'bg-white text-black border-b border-white'
          : 'bg-transparent text-white'
      }`}
    >
      <nav className='flex items-center justify-between px-4 sm:px-12 xl:px-32 py-5 2xl:w-[1580px] 2xl-custom:mx-auto'>
        {/* Logo */}
        <Link href='/' className='w-[111.613px] h-[40px] cursor-pointer'>
          <Image
            src={shouldShowWhiteBg ? darkLogo : lightLogo}
            alt='Logo'
            className='w-full h-full object-contain'
            width={500}
            height={500}
          />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-6 text-sm font-medium relative'>
          <Link
            href='/about-us'
            className={`relative pb-1 ${isActive('/about-us')}`}
          >
            About Us
          </Link>
          <Link href='/team' className={`relative pb-1 ${isActive('/team')}`}>
            Our Team
          </Link>
          <Link
            href='/services'
            className={`relative pb-1 ${isActive('/services')}`}
          >
            Services
          </Link>
          <Link
            href='/industries'
            className={`relative pb-1 ${isActive('/industries')}`}
          >
            Industries
          </Link>
          <Link
            href='/portfolio'
            className={`relative pb-1 ${isActive('/portfolio')}`}
          >
            Portfolio
          </Link>
          <Link
            href='/case-studies'
            className={`relative pb-1 ${isActive('/case-studies')}`}
          >
            Case Studies
          </Link>
          <Link href='/blogs' className={`relative pb-1 ${isActive('/blogs')}`}>
            Blogs
          </Link>

          <Link
            href='/contact-us'
            className={`relative pb-1 ${isActive('/contact-us')}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Button */}
        <button
          onClick={openContactModal}
          className='hidden lg:flex items-center justify-center py-2 px-8 rounded-full bg-[#F05232] text-white font-semibold tracking-wide uppercase text-sm'
        >
          Get in Touch
        </button>

        {/* Mobile Menu Button */}
        <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden flex flex-col items-center space-y-4 py-5 px-4 ${
            shouldShowWhiteBg ? 'bg-white text-black' : 'bg-black/90 text-white'
          }`}
        >
          <Link
            href='/about-us'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            About Us
          </Link>
          <Link
            href='/team'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            Our Team
          </Link>
          <Link
            href='/services'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            Services
          </Link>
          <Link
            href='/industries'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            Industries
          </Link>
          <Link
            href='/portfolio'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            Portfolio
          </Link>
          <Link
            href='/case-studies'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            Case Studies
          </Link>
          <Link
            href='/blogs'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            Blogs
          </Link>
          <Link
            href='/contact-us'
            onClick={() => setIsOpen(false)}
            className='text-sm font-medium'
          >
            Contact Us
          </Link>
          <button
            onClick={() => {
              openContactModal()
              setIsOpen(false)
            }}
            className='w-full py-2 px-6 rounded-full bg-[#F05232] text-white text-sm font-semibold tracking-wide uppercase'
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  )
}

export default Nav
