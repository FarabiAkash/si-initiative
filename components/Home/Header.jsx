import Image from 'next/image'
import HeaderBg from '../../public/assets/home/header-bg.png'
import HeroImg from '../../public/assets/home/hero.png'
import HeroBg from '../../public/assets/home/hero-background2.png'
import LinesBg from '../../public/assets/home/Lines.png'

const Header = () => {
  return (
    <div
      className='w-full flex items-center bg-cover bg-center bg-no-repeat relative px-4 sm:px-12 xl:px-36'
      style={{ backgroundImage: `url(${HeaderBg.src})` }}
    >
      <div className='xl:flex flex flex-wrap lg:flex-nowrap items-center justify-center xl:justify-between  w-full'>
        {/* left */}
        <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 max-w-lg pt-10 xl:pt-0 pb-10 xl:pb-0'>
          <h2 className='text-[#0B3641] text-[38px] font-extrabold text-center lg:text-start'>
            Developing Solutions for Your Business
          </h2>
          {/* <h2 className='text-[#0B3641] text-[38px] md:text-[48px] font-[700] leading-[64px] text-center lg:text-start'>
            Developing Solutions for Your Business
          </h2> */}
          <p className='text-[#677A7E] font-poppins text-[20px] font-[400] leading-[32px] text-center lg:text-start'>
            <span>
              Empowering your business with innovative, tailored <br />
            </span>
            <span>solutions to drive growth, efficiency, and success.</span>
          </p>
          {/* Buttons */}
          <div className='flex flex-wrap sm:flex-nowrap justify-center items-center gap-4'>
            <button className='rounded-[28px] bg-primary text-white font-semibold shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[40px] py-[16px] uppercase'>
              Learn More
            </button>
            <button className='rounded-[28px] font-semibold border-[1px] border-[#C2D2D6] px-[40px] py-[16px] uppercase'>
              Contact Us
            </button>
          </div>
        </div>

        {/* Hero Image Container */}
        <div
          className='relative bg-cover bg-center bg-no-repeat lg:w-1/2'
          style={{ backgroundImage: `url(${LinesBg.src})` }}
        >
          <div className='overflow-hidden  2xl-custom:w-[500px] flex justify-center items-center'>
            <Image
              className='pt-28 max-h-[634px]'
              src={HeroBg}
              alt='Hero Background'
            />
            <Image
              src={HeroImg}
              alt='Hero Image'
              fill
              className='flex justify-end items-end object-cover'
            />
          </div>

          {/* stats section   md:w-[55vw] lg:w-[40vw] */}
          <div className='absolute w-full 2xl-custom:w-[520px] bottom-4 xl:bottom-10  flex justify-between items-center gap-2 sm:gap-[30px] rounded-[16px] bg-white/90 shadow-[0px_4px_4px_0px_rgba(28,136,163,0.05)] px-1 sm:px-12 py-4 overflow-hidden'>
            <div className='text-center'>
              <h3 className='text-primary text-[18px] sm:text-[32px] font-[700]'>
                6+
              </h3>
              <p className='text-[#677A7E] text-[16px] font-[400]'>
                Years of Experience
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-primary text-[18px] sm:text-[32px] font-[700]'>
                25+
              </h3>
              <p className='text-[#677A7E] text-[16px] font-[400]'>
                IT Professionals
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-primary text-[18px] sm:text-[32px] font-[700]'>
                50+
              </h3>
              <p className='text-[#677A7E] text-[16px] font-[400]'>
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
