import React from 'react'
import Image from 'next/image'

import a1 from '../../public/assets/achievement/a1.jpg'
import a2 from '../../public/assets/achievement/a2.jpg'
import a3 from '../../public/assets/achievement/a3.jpg'
import a4 from '../../public/assets/achievement/a4.jpg'
import a5 from '../../public/assets/achievement/a5.jpg'
import a6 from '../../public/assets/achievement/a6.jpg'
import a7 from '../../public/assets/achievement/a7.jpg'

const achievements = [
  { year: 2024, title: '', img: a1 },
  { year: 2019, title: 'Won the 19th APICTA Award', img: a2 },
  { year: 2019, title: 'Won the Bangladesh Innovation Award', img: a3 },
  { year: 2018, title: 'Won the SeedStars Global Innovation Award', img: a4 },
  { year: 2018, title: 'DBS – NUS Social Venture Challenge Asia', img: a5 },
  { year: 2018, title: 'Won the Bangladesh Innovation Award', img: a6 },
  { year: 2015, title: 'Won the GP Accelerator Award', img: a7 }
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
            Award-Winning Excellence & Life-Changing Impact in Innovation
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8 items-end'>
        {/* Large image area (optional static or first achievement) */}
        <div className='md:col-span-2 w-full h-[300px] lg:h-[550px] rounded-lg overflow-hidden'>
          <Image
            src={a1}
            alt='Main Achievement'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>

        {/* Grid of other achievements */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:col-span-2'>
          {achievements.slice(1, 7).map((achievement, index) => (
            <div
              key={index}
              className='rounded-lg flex flex-col justify-start gap-[10px]'
            >
              <div className='relative w-full h-[150px] rounded-lg overflow-hidden'>
                <Image
                  src={achievement.img}
                  alt={achievement.title}
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
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
