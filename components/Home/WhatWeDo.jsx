import Image from 'next/image'
import aiIcon from '../../public/assets/home/ai.png'
import innovationIcon from '../../public/assets/home/innovation.png'
import healthIcon from '../../public/assets/home/healthSol.png'
import globalIcon from '../../public/assets/home/global.png'

const data = [
  {
    title: 'AI Solutions',
    description:
      'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.',
    icon: aiIcon,
    color: '#8270E8'
  },
  {
    title: 'Digital Healthcare',
    description:
      'Connecting patients and providers through telemedicine, remote monitoring, and data-driven platforms.',
    icon: healthIcon,
    color: '#19BCE5'
  },
  {
    title: 'R&D Innovations',
    description:
      'Advancing healthcare with cutting-edge research and innovative treatment technologies.',
    icon: innovationIcon,
    color: '#E56E19'
  },
  {
    title: 'Global Impact',
    description:
      'Continuously improving global healthcare accessibility and equity through impactful sustainable initiatives.',
    icon: globalIcon,
    color: '#3467C7'
  }
]

const WhatWeDo = () => {
  return (
    <section className='text-center py-[100px] px-12 xl:px-36 bg-gradient-to-l from-[#F5FDFF] to-white'>
      <div className='container mx-auto px-4'>
        <h1 className='text-[32px] font-[700] text-[#0B3641] leading-[40px]'>
          What We Do
        </h1>
        <p className='text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2'>
          Explore Our Core Innovations
        </p>

        {/* Icons Section */}
        <div className='mt-10 grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-2 gap-8'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-6 items-center text-center p-6 transition duration-300 hover:scale-105'
            >
              <div className='h-[80px] w-[80px] rounded-[40px] border  bg-white shadow-[0px_16px_16px_0px_rgba(72,196,227,0.15)]'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className='p-[24px]'
                />
              </div>
              <h3
                className={`${item.color} text-[18px] font-[500] leading-[24px] uppercase`}
              >
                {item.title}
              </h3>
              <p className='text-gray-600 mt-2 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
