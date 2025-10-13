import Image from 'next/image'

import missionImage from '@/public/assets/about/mission.jpg'
import diamondShape from '../../public/assets/diamondShape.svg'

const data = [
  {
    title: 'Drive Digital Transformation',
    desc: 'Deploying modern tools and platforms that streamline operations and boost productivity.'
  },
  {
    title: 'Ensure Reliability & Trust',
    desc: 'Delivering solutions you can depend on, with consistency, security, and quality in every service.'
  },
  {
    title: 'Fuel Business Growth',
    desc: 'Cultivating scalable strategies and technologies to help businesses expand, adapt, and stay ahead.'
  },
  {
    title: 'Partner with Purpose',
    desc: 'Aligning our solutions to your needs, taking ownership of your challenges so you can focus on what you do best.'
  }
]
const OurMission = () => {
  return (
    <div className='custom-container  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col justify-start  items-start '>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Our Mission
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px] pt-3'>
          Innovate. Deliver. Transform.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-start gap-[20px] sm:gap-[40px] mt-[20px] lg:mt-[50px]'>
        <div className='flex-1 flex flex-col justify-start items-center gap-[16px]'>
          <p className='text-paragraph text-[16px] font-[400] leading-[20px]'>
            Our mission is to be your go-to partner for end-to-end technology
            solutions—offering innovation, reliability, and support that help
            businesses grow stronger and work smarter in today’s digital world.
          </p>
          <div>
            {data.map((item, i) => (
              <div
                key={i}
                className='flex justify-start items-start gap-4 mt-4'
              >
                <div className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F3F4] rounded-full aspect-square'>
                  <Image
                    src={diamondShape}
                    alt='diamond shape'
                    className='w-[16px] h-[16px]'
                  />
                </div>
                <div className='flex flex-col justify-start items-start gap-1'>
                  <h2 className='text-titleSubtitle text-[16px] font-[600] leading-[20px]'>
                    {item.title}
                  </h2>
                  <span className='text-paragraph text-[16px] font-[400] leading-[20px]'>
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={missionImage}
          alt='CMED Vision'
          className='w-full h-full lg:w-[500px] lg:h-[450px] object-cover rounded-[8px]'
        />
      </div>
    </div>
  )
}
export default OurMission
