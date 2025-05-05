import Image from 'next/image'
import Link from 'next/link'
import aboutImg from '@/public/assets/blogs/blog1.png' // Replace with your actual image

const AboutHeader = () => {
  return (
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      {/* Breadcrumb */}
      <div className='w-full min-h-[56px] flex items-center border-y border-[#F1F3F4]'>
        <p className='text-[16px] font-medium flex items-center gap-4'>
          <Link href='/'>
            <span className='text-paragraph'>Home</span>
          </Link>
          <span className='text-[#F05232]'>/</span>
          <span className='text-primary'>About Us</span>
        </p>
      </div>

      {/* Hero Section */}
      <div
        className=' flex justify-center items-center p-6 rounded-[16px] mt-10 gap-2 flex-wrap'
        style={{
          background:
            'linear-gradient(109deg, #F7FDFF 0%, #E3F1F7 41.07%, #C4E3F2 71.08%)'
        }}
      >
        {/* Text Block */}
        <div className='lg:w-2/4'>
          <h1 className='text-[28px] md:text-[32px]  font-bold sm:leading-[36px]  text-titleSubtitle'>
            Revolutionizing Healthcare Through Innovation
          </h1>
          <p className=' text-paragraph text-[20px] font-[400] leading-[32px] mt-4'>
            Empowering the future of healthcare with AI, digital transformation,
            and research-driven solutions.
          </p>
        </div>

        {/* Positioned Image */}
        <div className=' lg:w-[400px]  lg:h-[400px] lg:relative'>
          <Image
            src={aboutImg}
            alt='Healthcare Innovation'
            className=' lg:w-[400px]  lg:h-[400px] object-cover lg:absolute lg:top-[-80px] rounded-[8px]'
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default AboutHeader
