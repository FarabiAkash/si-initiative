import Image from 'next/image'
import HeroImg from '../../public/assets/home/coreServiceHero.png'
import HeroBg from '../../public/assets/home/coreHeroBg.png'

import decisionIcon from '../../public/assets/home/services/decision.png'
import dataIcon from '../../public/assets/home/services/data.png'
import cloudIcon from '../../public/assets/home/services/cloud.png'
import iotIcon from '../../public/assets/home/services/iot.png'

const coreServices = [
  {
    id: 1,
    title: 'Decision Support Systems',
    description:
      'Enhancing clinical decision-making with AI-driven insights and predictive analytics.',
    icon: decisionIcon
  },
  {
    id: 2,
    title: 'Data Analysis & QA',
    description:
      'Ensuring data accuracy and integrity for informed healthcare strategies.',
    icon: dataIcon
  },
  {
    id: 3,
    title: 'Cloud-Based Platforms',
    description:
      'Providing secure, scalable solutions for seamless healthcare management.',
    icon: cloudIcon
  },
  {
    id: 4,
    title: 'IoT-Enabled Healthcare',
    description:
      'Connecting smart devices for real-time patient monitoring and improved outcomes.',
    icon: iotIcon
  }
]

const CoreServices = () => {
  return (
    <div className='px-4 sm:px-12 xl:px-36 py-[35px] sm:py-[50px]'>
      <div className='flex flex-col justify-center xl:justify-start items-center xl:items-start'>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Core Services
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px] pt-3'>
          Revolutionizing Healthcare with Cutting-edge Technological Solutions.
        </p>
      </div>
      <div className='flex items-center xl:items-end justify-center xl:justify-between gap-4'>
        {/* Hero Image Section */}
        <div className='relative hidden xl:block'>
          <div className='h-[400px] w-[550px] overflow-hidden'>
            <Image
              className='h-[430px] w-[600px]'
              src={HeroBg}
              alt='Hero Background'
            />
            <Image
              src={HeroImg}
              alt='Hero Image'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[24px] pt-10 pb-4 sm:pb-20'>
          {coreServices.map((service, index) => (
            <div
              key={index}
              className='group rounded-xl border border-[#F1F3F4] shadow-md shadow-[rgba(15,72,87,0.10)] 
        bg-[#F1F3F4] hover:bg-white hover:shadow-lg transition-all duration-300 
        sm:w-[288px] sm:h-[248px] flex flex-col justify-start items-start gap-4 p-[24px]'
            >
              <div
                className='rounded-full w-[64px] h-[64px] bg-white group-hover:bg-[#F1F3F4] 
        flex items-center justify-center transition-all duration-300'
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>
              <h2 className='text-titleSubtitle text-[18px] font-[500] leading-[20px]'>
                {service.title}
              </h2>
              <p className='text-paragraph text-[16px] font-[400] leading-[24px]'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CoreServices
