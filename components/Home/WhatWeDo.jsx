import Image from 'next/image'
import w1 from '../../public/assets/home/whatwedo/w1.png'
import w2 from '../../public/assets/home/whatwedo/w2.png'
import w3 from '../../public/assets/home/whatwedo/w3.png'
import w4 from '../../public/assets/home/whatwedo/w4.png'
import w5 from '../../public/assets/home/whatwedo/w5.png'
import w6 from '../../public/assets/home/whatwedo/w6.png'
import Link from 'next/link'

const data = [
  {
    title: 'R&D Innovation',
    description:
      'Turning ideas into impactful solutions through research, prototyping, and cutting-edge technology',
    icon: w5
  },
  {
    title: 'AI Integration',
    description:
      'Empowering businesses with intelligent automation, predictive insights, and smarter decision-making',
    icon: w2
  },
  {
    title: 'IT & AI Consultations',
    description:
      'Expert guidance to align your IT & AI strategy with your business goals',
    icon: w4
  },
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions designed to meet your unique business needs',
    icon: w1
  },
  {
    title: 'Web & Mobile App Development',
    description:
      'Engaging, scalable, and user-friendly applications for web and mobile platforms',
    icon: w3
  },
  {
    title: 'Quality Assurance',
    description:
      'Comprehensive testing to ensure flawless performance and reliability of your products',
    icon: w6
  }
]

const SingleCard = ({ item }) => {
  return (
    <div className='flex flex-col gap-2 items-center text-center p-6 transition duration-300 hover:scale-105'>
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
        className={`text-[18px] text-[#010101] font-[600] leading-[24px] mt-4`}
      >
        {item.title}
      </h3>
      <p className='text-[#677A7E] text-base'>{item.description}</p>
    </div>
  )
}

const WhatWeDo = () => {
  return (
    <div
      className='w-full'
      style={{
        background:
          'linear-gradient(to bottom, #FAFEFF80, #F5FDFF, #F5FDFF, #FAFEFF80)'
      }}
    >
      <section className='custom-container text-center 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='container mx-auto'>
          <h1 className='text-[32px] font-[700] text-[#0B3641] leading-[40px]'>
            What We Do
          </h1>
          <p className='text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2'>
            Explore Our Core Innovations & strengths
          </p>

          {/* Icons Section */}
          <div className='mt-10 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-8'>
            {data.map((item, index) => (
              <SingleCard item={item} key={index} />
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <Link
          href={'/services'}
          className='bg-[#19BCE50D] uppercase border border-[#19BCE533] px-[40px] py-[12px] rounded-[28px] text-sm font-semibold leading-[24px] text-[#19BCE5]'
        >
          View all services
        </Link>
        </div>
      </section>
    </div>
  )
}

export default WhatWeDo
