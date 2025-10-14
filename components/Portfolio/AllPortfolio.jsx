import React from 'react'
import Image from 'next/image'

import p1 from '../../public/assets/portfolio/p1.jpg'
import p2 from '../../public/assets/portfolio/p2.jpg'
import p3 from '../../public/assets/portfolio/p3.jpg'
import p4 from '../../public/assets/portfolio/p4.jpg'
import p5 from '../../public/assets/portfolio/p5.jpg'
import p6 from '../../public/assets/portfolio/p6.jpg'

const portfolios = [
  {
    id: 1,
    img: p1,
    name: 'Shushastho.Ai',
    type: 'HealthTech',
    desc: 'Shushastho.ai is pioneering AI-powered solutions for Sexual and Reproductive Mental Health (SRMH) in Bangladesh.',
    link: 'https://github.com/ShahinurAlamBhuiyan/'
  },
  {
    id: 2,
    img: p2,
    name: 'Canaware',
    type: 'HealthTech',
    desc: 'CanaWare is an interactive system designed to enhance cancer awareness, education, screening, and referral in Bangladesh.',
    link: 'https://github.com/ShahinurAlamBhuiyan/'
  },
  {
    id: 3,
    img: p3,
    name: 'AI Forum Bangladesh',
    type: 'NGO',
    desc: 'AI Forum Bangladesh is an independent organization dedicated to preparing the next generation for the era of Artificial Intelligence.',
    link: 'https://github.com/ShahinurAlamBhuiyan/'
  },
  {
    id: 4,
    img: p4,
    name: 'Bolte chai',
    type: 'HealthTech',
    desc: 'Bolte Chai is an AI-enabled digital communication platform designed for verbally challenged children with Autism Spectrum Disorder (ASD).',
    link: 'https://github.com/ShahinurAlamBhuiyan/'
  },
  {
    id: 5,
    img: p5,
    name: 'Tottho Apa',
    type: 'HealthTech',
    desc: 'Provides IoT-enabled smart medical devices and mobile applications to digitize and connect remote health visits.',
    link: 'https://github.com/ShahinurAlamBhuiyan/'
  },
  {
    id: 6,
    img: p6,
    name: 'Autism barta',
    type: 'HealthTech',
    desc: 'Smart Autism Barta is a mobile-enabled, interactive community-based screening tool for early identification and intervention of ASD.',
    link: 'https://github.com/ShahinurAlamBhuiyan/'
  }
]

const AllPortfolio = () => {
  const rows = portfolios.reduce((acc, item, index) => {
    if (index % 2 === 0) acc.push([item, portfolios[index + 1]])
    return acc
  }, [])

  return (
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto mt-10 space-y-8'>
      {rows.map((pair, rowIndex) => (
        <div
          key={rowIndex}
          className='flex flex-col md:flex-row gap-6 md:h-[440px]'
        >
          {pair.map((project, colIndex) => {
            const isLarge =
              (rowIndex % 2 === 0 && colIndex === 1) ||
              (rowIndex % 2 === 1 && colIndex === 0)

            return (
              <div
                key={project.id}
                className={`relative rounded-[8px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group flex-1 ${
                  isLarge ? 'md:flex-[1.5]' : 'md:flex-[1]'
                }`}
              >
                <Image
                  src={project.img}
                  alt={project.name}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  placeholder='blur'
                />

                <div className='absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300'></div>

                <div className='absolute inset-0 flex flex-col justify-between p-6 text-white z-10'>
                  <div>
                    <h3 className='text-2xl sm:text-[32px] sm:leading-[40px] font-bold mb-1'>
                      {project.name}
                    </h3>
                    <p className='text-base'>{project.type}</p>
                  </div>

                  <div className=''>
                    <p className='text-base mb-4 max-w-lg leading-[20px]'>
                      {project.desc}
                    </p>

                    {/* Button with transition */}
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block text-sm py-[5px] transition-all duration-300
                        group-hover:bg-white group-hover:text-black font-semibold group-hover:px-5 group-hover:py-2 group-hover:rounded-full uppercase transform group-hover:scale-105 group-hover:shadow-md'
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default AllPortfolio
