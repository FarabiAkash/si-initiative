import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Youtube
} from 'lucide-react'
import Logo from '../../public/assets/logo.png'

const Footer = () => {
  return (
    <div className='pt-8 pb-4 px-4 sm:px-12 xl:px-36 bg-[#FDFDFD]'>
      <Image src={Logo} alt='CMED Logo' className='w-[178px] h-[64px]' />
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 justify-around items-start'>
        {/* Left Section - Company Info */}
        <div className='lg:w-1/3'>
          <p className='text-paragraph text-base mt-4 lg:mt-10'>
            We harness AI and digital innovation to enhance healthcare
            accessibility, efficiency, and patient care. Through cutting-edge
            research, we provide data-driven solutions.
          </p>
          <div className='mt-5 space-y-3'>
            <div className='flex justify-start gap-4 items-center'>
              <div className='flex items-center gap-3 text-paragraph'>
                <div className='border-[1px] w-[32px] h-[32px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                  <Phone className='w-[20px] h-[20px] text-primary' />
                </div>
                <p className='text-sm'>+02 965 8645</p>
              </div>

              <div className='flex items-center gap-3 text-paragraph'>
                <div className='border-[1px] w-[32px] h-[32px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                  <Mail className='w-[20px] h-[20px] text-primary' />
                </div>
                <p className='text-sm'>info@hbb.com</p>
              </div>
            </div>
            <div className='flex items-center gap-3 text-paragraph'>
              <div className='border-[1px] w-[40px] h-[32px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                <MapPin className='w-[20px] h-[20px] text-primary' />
              </div>
              <p className='text-sm'>
                House 460, Road 31, New DOHS, Mohakhali, Dhaka - 1212
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className='lg:w-1/3 flex items-center justify-center'>
          <div>
            <h3 className='text-[20px] font-[500] leading-[32px] text-[#F05232]'>
              Quick Links
            </h3>
            <ul className='mt-3 flex flex-col gap-[16px] justify-start items-start text-[16px] font-[400] leading-[24px] text-paragraph'>
              <li>
                <a href='/' className='hover:text-[#E5533C] transition'>
                  Home
                </a>
              </li>
              <li>
                <a href='/services' className='hover:text-[#E5533C] transition'>
                  Services
                </a>
              </li>
              <li>
                <a
                  href='/case-studies'
                  className='hover:text-[#E5533C] transition'
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a href='/blogs' className='hover:text-[#E5533C] transition'>
                  Blogs
                </a>
              </li>
              <li>
                <a href='/about-us' className='hover:text-[#E5533C] transition'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/contact-us'
                  className='hover:text-[#E5533C] transition'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter Subscription */}
        <div className='lg:w-1/3'>
          <h3 className='text-[20px] font-[500] leading-[32px] text-[#F05232]'>
            Subscribe to Our Newsletter!
          </h3>
          <p className='text-paragraph mt-3 text-base text-[400]'>
            Stay ahead in digital healthcare, subscribe to our newsletter for
            the latest innovations, insights, and breakthroughs!
          </p>
          <div className='mt-4 flex flex-col gap-2'>
            <p className='text-[16px] font-[700] text-titleSubtitle leading-[20px]'>
              Email
            </p>
            <div className='flex justify-center items-center gap-1'>
              <input
                type='email'
                placeholder='Your email address'
                className='w-full border border-[#C2D2D6] focus:ring-2 focus:ring-primary outline-none px-[32px] py-[8px] rounded-[4px]'
              />
              <button className='bg-primary text-white px-[20px] sm:px-[32px] py-[8px] rounded-[4px]'>
                Subscribe
              </button>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className='flex gap-4 mt-4'>
            <a
              href='#'
              className='text-[#49A7DC] hover:text-[#008FCC] transition'
              target='_blank'
            >
              <Facebook size={20} />
            </a>
            <a
              href='#'
              className='text-[#49A7DC] hover:text-[#008FCC] transition'
              target='_blank'
            >
              <Linkedin size={20} />
            </a>
            <a
              href='#'
              className='text-[#49A7DC] hover:text-[#008FCC] transition'
              target='_blank'
            >
              <Twitter size={20} />
            </a>
            <a
              href='#'
              className='text-[#49A7DC] hover:text-[#008FCC] transition'
              target='_blank'
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='mt-8 border-t border-[#C2D2D6] pt-4 flex flex-col md:flex-row justify-between text-paragraph text-base font[400]'>
        <p>© 2025 SI Initiative. All Rights Reserved</p>
        <div className='flex gap-4'>
          <a href='#' className='hover:text-[#E5533C] transition'>
            Privacy Policy
          </a>
          <span>|</span>
          <a href='#' className='hover:text-[#E5533C] transition'>
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
