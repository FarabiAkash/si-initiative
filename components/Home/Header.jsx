import Image from 'next/image'
import HeaderBg from '../../public/assets/home/header-bg.png'
import HeroImg from '../../public/assets/home/hero.png'
import HeroBg from '../../public/assets/home/hero-background.png'

const Header = () => {
  return (
    <div
      className='w-full flex items-center bg-cover bg-center bg-no-repeat relative'
      style={{ backgroundImage: `url(${HeaderBg.src})` }}
    >
      <div className='flex gap-4 items-center justify-center px-12 w-full'>
        {/* Left Content */}
        <div className='flex flex-col justify-start items-start gap-6 max-w-lg'>
          <h2 className='text-[#0B3641] text-[42px] font-bold leading-[54px]'>
            Developing Solutions <br />
            for Your Business
          </h2>
          <p className='text-[#677A7E] font-poppins text-[20px] font-normal leading-[32px]'>
            Empowering your business with innovative, tailored <br /> solutions
            to drive growth, efficiency, and success.
          </p>
          {/* Buttons */}
          <div className='flex gap-4'>
            <button className='rounded-[28px] bg-primary text-white font-semibold shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[40px] py-[16px] uppercase'>
              Learn More
            </button>
            <button className='rounded-[28px] font-semibold border-[1px] border-[#C2D2D6] px-[40px] py-[16px] uppercase'>
              Contact Us
            </button>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className='relative h-[550px] w-[550px] overflow-hidden'>
          <Image
            className='pt-28'
            src={HeroBg}
            alt='Hero Background'
            width={540}
            height={540}
          />
          <Image
            src={HeroImg}
            alt='Hero Image'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* stats section */}
        <div className='absolute bottom-10 right-20 flex justify-between items-center gap-12 bg-white rounded-[16px] bg-white/90 shadow-[0px_4px_4px_0px_rgba(28,136,163,0.05)] px-12 py-4'>
          <div className='text-center'>
            <h3 className='text-primary text-[32px] font-[700]'>6+</h3>
            <p className='text-[#677A7E] text-[16px] font-[400]'>
              Years of Experience
            </p>
          </div>
          <div className='text-center'>
            <h3 className='text-primary text-[32px] font-[700]'>25+</h3>
            <p className='text-[#677A7E] text-[16px] font-[400]'>
              IT Professionals
            </p>
          </div>
          <div className='text-center'>
            <h3 className='text-primary text-[32px] font-[700]'>50+</h3>
            <p className='text-[#677A7E] text-[16px] font-[400]'>
              Projects Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
