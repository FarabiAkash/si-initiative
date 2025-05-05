import React from 'react'
import Image from 'next/image'

const achievements = [
  { year: 2020, title: 'Global Health Innovation Award' },
  { year: 2021, title: 'SDG Impact Award in Healthcare' },
  { year: 2022, title: 'AI for Social Good Award' },
  { year: 2023, title: 'Best Digital Health Solution Award' },
  { year: 2023, title: 'IoT & Smart Healthcare Excellence Award' },
  { year: 2024, title: 'Global Tech for Good Healthcare Award' }
]

const OurAchievements = () => {
  return (
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col md:flex-row items-start md:items-center'>
        <div className='md:w-2/5'>
          <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
            Our Achievements
          </h1>
          <p className='text-paragraph text-[18px] font-[400] leading-[24px] pt-3'>
            Award-Winning Excellence & Life-Changing Impact in Healthcare
            Innovation
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8 items-end'>
        <div className='md:col-span-2 w-full h-[300px] lg:h-[550px] rounded-lg bg-[#C2D2D6]'></div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:col-span-2'>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className=' rounded-lg flex flex-col justify-start gap-[10px]'
            >
              <div className='bg-[#D9D9D9] h-[150px] rounded-lg flex flex-col justify-end p-4'></div>
              <span className='text-[14px] font-[400] leading-[16px] text-paragraph'>
                {achievement.year}
              </span>
              <span className='text-titleSubtitle text-[16px] font-[600] leading-[20px]'>
                {achievement.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurAchievements
