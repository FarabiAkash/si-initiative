import Image from 'next/image'
import visionImage from '@/public/assets/about/vision.jpg'

const OurVision = () => {
  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <div className='custom-container  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='flex flex-col justify-center  items-center '>
          <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
            Our Vision
          </h1>
          <p className='text-paragraph text-[18px] font-[400] leading-[24px] pt-3'>
            Empowering Businesses for a Digital Future
          </p>
        </div>

        <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-[20px] sm:gap-[40px]  mt-[50px]'>
          <Image
            src={visionImage}
            alt='CMED Vision'
            className='w-full h-full lg:w-[500px] lg:h-[450px] object-cover rounded-[8px]'
          />
          <span className='text-[20px] sm:text-[24px] font-[400] leading-[36px] text-titleSubtitle text-justify'>
            At CMED Innovation, we aspire to become a leading global
            organization that empowers businesses across industries with
            expert-driven technology solutions. By fostering growth, efficiency,
            and long-term value, we aim to help organizations thrive in an
            ever-evolving digital landscape.
          </span>
        </div>
      </div>
    </div>
  )
}
export default OurVision
