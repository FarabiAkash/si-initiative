'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../public/assets/logo.png'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = path =>
    pathname === path ? 'text-secondary' : 'text-[#6D787B]'

  return (
    <>
      <nav className='flex items-center justify-between px-12 xl:px-36  py-5'>
        {/* Logo */}
        <div className='w-[111.613px] h-[40px]'>
          <Image src={Logo} alt='SI-Initiative Logo' width={500} height={500} />
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex space-x-6'>
          <a
            href='/'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/'
            )}`}
          >
            Home
          </a>
          <a
            href='/services'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/services'
            )}`}
          >
            Services
          </a>
          <a
            href='/case-studies'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/case-studies'
            )}`}
          >
            Case Studies
          </a>
          <a
            href='/blogs'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/blogs'
            )}`}
          >
            Blogs
          </a>
          <a
            href='/about-us'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/about-us'
            )}`}
          >
            About Us
          </a>
          <a
            href='/contact-us'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/contact-us'
            )}`}
          >
            Contact Us
          </a>
        </div>

        {/* Desktop Button */}
        <button className='hidden lg:flex item-center justify-center py-[8px] px-[40px] rounded-[20px] bg-[#F05232] text-white  font-[600] tracking-[1.4px] uppercase text-[14px]'>
          Get in Touch
        </button>

        {/* Mobile Menu Button */}
        <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden flex flex-col items-center space-y-4 bg-gray-100 py-5'>
          <a
            href='/'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/'
            )}`}
          >
            Home
          </a>
          <a
            href='/services'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/services'
            )}`}
          >
            Services
          </a>
          <a
            href='/case-studies'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/case-studies'
            )}`}
          >
            Case Studies
          </a>
          <a
            href='/blogs'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/blogs'
            )}`}
          >
            Blogs
          </a>
          <a
            href='/about-us'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/about-us'
            )}`}
          >
            About Us
          </a>
          <a
            href='/contact-us'
            className={`hover:text-secondary text-[#6D787B] text-[14px] font-[500] ${isActive(
              '/contact-us'
            )}`}
          >
            Contact Us
          </a>
          <button className='h-[40px] py-[8px] px-[40px] rounded-[20px] bg-[#F05232] text-white text-[14px] font-[600] tracking-[1.4px] uppercase'>
            Get in Touch
          </button>
        </div>
      )}
    </>
  )
}

export default Nav
