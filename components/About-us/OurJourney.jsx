'use client'
import { useState } from 'react'
import ContactModal from '../shared/ContactModal'

const journeyData = [
  {
    year: '2016-2017',
    phase: 'Ideation & Foundation',
    title: 'From Vision to Validation',
    description:
      'Born from the GP Accelerator Program, our vision for rural healthcare earned early recognition with an Elsevier publication and a BASIS National ICT Award.'
  },
  {
    year: 'Year 2: 2020',
    phase: 'Innovation & Recognition',
    title: 'Prestigious Wins & Global Acclaim',
    description:
      'We secured key patents for our digital health solutions and earned global acclaim with prestigious wins at the Seedstars World and APICTA Awards.'
  },
  {
    year: 'Year 3: 2021',
    phase: 'Expanding Healthcare Accessibility',
    title: 'Pandemic Response & Growth',
    description:
      'During the COVID-19 response, we scaled our impact to support over 10,000 health workers and reach 2 million users through our new telemedicine services.'
  },
  {
    year: '2022-2030',
    phase: 'Expansion & Vision',
    title: 'Current Scale & Future Vision',
    description:
      'Launched an IoT-driven health monitoring system, allowing real-time tracking of patient vitals and improving emergency response times.'
  }
]

const OurJourney = () => {
  const [showContact, setShowContact] = useState(false)
  return (
    <div className='bg-titleSubtitle'>
      <div className='custom-container  text-white  flex flex-col justify-center items-center gap-10 lg:gap-20  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className=' w-2/3 text-center space-y-[16px]'>
          <h2 className='text-[32px] font-[700] text-center leading-[40px]'>
            Our Journey
          </h2>
          <p className='text-[18px] font-[400] leading-[24px] text-[#ffffffd3]'>
            Over the years, we have embarked on transformative projects, pushing
            the boundaries of AI, 4IR Technology and Innovation. Here’s how
            we’ve evolved:
          </p>
        </div>
        <div className='relative  mx-auto'>
          {/* Timeline Line */}
          <div className='hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-[#ffffff33] h-[78%]' />

          {/* Timeline Items */}
          {journeyData.map((item, index) => (
            <div
              key={index}
              className='mb-8 sm:mb-12 flex flex-col sm:flex-row items-start justify-start'
            >
              {/* Left Side Text for Odd Indexes */}
              {index % 2 === 0 ? (
                <div className='w-full md:w-1/2 pr-8 sm:text-right'>
                  <p className='lg:hidden text-primary font-[700]'>
                    {item.year}
                  </p>
                  <p className='text-[14px] mb-2 font-[600] text-primary leading-[16px]'>
                    {item.phase}
                  </p>
                  <h3 className='text-[18px] font-[600] leading-[24px]'>
                    Project: {item.title}
                  </h3>
                  <p className='text-[16px] font-[400] leading-[24px] text-[#ffffffd9] '>
                    {item.description}
                  </p>
                </div>
              ) : (
                <div className='w-full md:w-1/2 pl-8'></div>
              )}

              {/* Connector Dot & Year Label */}
              <div className='hidden sm:flex justify-center items-center mt-[-8px]'>
                {index % 2 !== 0 && (
                  <div className='hidden lg:w-[130px] h-[32px] bg-primary rounded-[16px] lg:flex items-center justify-center'>
                    {item.year}
                  </div>
                )}
                <div
                  className={`${
                    index % 2 !== 0
                      ? 'w-[40px]  h-[1px]  hidden lg:block bg-[#ffffff33]'
                      : 'hidden lg:block lg:w-[170px] h-[1px] bg-[#ffffff33]'
                  }`}
                />
                <div className='w-[16px] h-[16px] bg-primary text-white flex items-center justify-center rounded-full relative' />
                <div
                  className={`${
                    index % 2 === 0
                      ? 'w-[40px]  h-[1px]  hidden lg:block bg-[#ffffff33]'
                      : 'hidden lg:block lg:w-[170px] h-[1px] bg-[#ffffff33]'
                  }`}
                />

                {index % 2 === 0 && (
                  <div className='hidden lg:w-[130px] h-[32px] bg-primary rounded-[16px] lg:flex items-center justify-center'>
                    {item.year}
                  </div>
                )}
              </div>

              {/* Right Side Text for Even Indexes */}
              {index % 2 !== 0 ? (
                <div className='w-full md:w-1/2 sm:pl-8 sm:text-left'>
                  <p className='lg:hidden text-primary font-[700]'>
                    Year {index + 1}: {item.year}
                  </p>
                  <p className='text-[14px] mb-2 font-[600] text-primary leading-[16px]'>
                    {item.phase}
                  </p>
                  <h3 className='text-[18px] font-[600] leading-[24px]'>
                    Project: {item.title}
                  </h3>
                  <p className='text-[16px] font-[400] leading-[24px] text-[#ffffffd9]'>
                    {item.description}
                  </p>
                </div>
              ) : (
                <div className='w-full md:w-1/2 pr-8'></div>
              )}
            </div>
          ))}
        </div>

        <div className='flex flex-col justify-center text-center lg:px-44 text-white'>
          <h2 className='text-center text-[24px] lg:text-[32px] font-[700] leading-[32px] lg:leading-[40px]  mb-4'>
            Together, We Transform Innovative Ideas Into Impact
          </h2>
          <p className='text-center text-[20px] font-[400] leading-[32px]'>
            As we move forward, we remain committed to innovation, research, and
            global impact, ensuring that technology continues to shape the
            future.
          </p>
          <button
            onClick={() => setShowContact(true)}
            className='mx-auto mt-10 text-[14px] rounded-[28px] bg-[#F05232]  font-[600] leading-[24px] tracking-[1.4px] px-[40px] py-[16px] sm:py-[16px] uppercase'
          >
            Collaborate with us
          </button>
        </div>
        <ContactModal
          isOpen={showContact}
          onClose={() => setShowContact(false)}
          title={'Collaborate with us'}
          source={'Collaborate with us'}
        />
      </div>
    </div>
  )
}

export default OurJourney
