import Image from 'next/image'
import w1 from '../../public/assets/home/whatwedo/w1.png'
import w2 from '../../public/assets/home/whatwedo/w2.png'
import w3 from '../../public/assets/home/whatwedo/w3.png'
import w4 from '../../public/assets/home/whatwedo/w4.png'
import w5 from '../../public/assets/home/whatwedo/w5.png'
import w6 from '../../public/assets/home/whatwedo/w6.png'

const data = [
  {
    title: 'Custom Software Dveelopment',
    description:
      'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.',
    icon: w1
  },
  {
    title: 'AI/ML Integration',
    description:
      'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.',
    icon: w2
  },
  {
    title: 'Web & Mobile app development',
    description:
      'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.',
    icon: w3
  },
  {
    title: 'it consultations',
    description:
      'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.',
    icon: w4
  },
  {
    title: 'R&D Innovations',
    description:
      'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.',
    icon: w5
  },
  {
    title: 'Quality Assurance',
    description:
      'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.',
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
        className={`text-[18px] text-[#19BCE5] font-[600] leading-[24px] uppercase mt-4`}
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
      <section className='custom-container text-center  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='container mx-auto'>
          <h1 className='text-[32px] font-[700] text-[#0B3641] leading-[40px]'>
            What We Do
          </h1>
          <p className='text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2'>
            Explore Our Core Innovations
          </p>

          {/* Icons Section */}
          <div className='mt-10 grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-8'>
            {data.map((item, index) => (
              <SingleCard item={item} key={index} />
            ))}
          </div>
        </div>
        <button className='mt-4 bg-[#19BCE50D] uppercase border border-[#19BCE533] px-[40px] py-[12px] rounded-[28px] text-sm font-semibold leading-[24px] text-[#19BCE5]'>
          View all services
        </button>
      </section>
    </div>
  )
}

export default WhatWeDo
