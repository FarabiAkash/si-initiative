import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import Logo from '../../public/assets/logo.png'
import NewsLetterSub from './NewsLetterSub'

const Footer = () => {
  return (
    <div className='bg-[#FDFDFD]'>
      <div className='pt-8 pb-4 px-4 sm:px-12 xl:px-36  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
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
                  <p className='text-sm'>siintiative2025@gmail.com</p>
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
                  <a
                    href='/services'
                    className='hover:text-[#E5533C] transition'
                  >
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
                  <a
                    href='/about-us'
                    className='hover:text-[#E5533C] transition'
                  >
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
          <NewsLetterSub />
        </div>

        {/* Bottom Section */}
        <div className='mt-8 border-t border-[#C2D2D6] pt-4 flex flex-col md:flex-row justify-between text-paragraph text-base font[400]'>
          <div className='flex justify-start items-center gap-2'>
            <p>© 2025 SI Initiative. All Rights Reserved</p>
            <span>|</span>
            <p>developed by</p>
            <a
              href='https://shahinuralambhuiyan.vercel.app'
              target='_blank'
              className='italic underline'
            >
              Shahinur Alam Bhuiyan
            </a>
          </div>
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
    </div>
  )
}

export default Footer
