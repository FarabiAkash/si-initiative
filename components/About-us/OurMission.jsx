import Image from 'next/image'

import missionImage from '../../public/assets/home/Blogs/blog2.png'
import diamondShape from '../../public/assets/diamondShape.svg'

const data = [
  {
    title: 'Enhance Diagnostics & Treatment',
    desc: 'Leveraging AI and data analytics to improve accuracy and efficiency'
  },
  {
    title: 'Improve Healthcare Accessibility',
    desc: 'Developing digital platforms for seamless remote healthcare and telemedicine'
  },
  {
    title: 'Drive Research & Development',
    desc: 'Pioneering new medical technologies for better patient outcomes'
  },
  {
    title: ' Foster Collaboration & Growth',
    desc: 'Partnering with healthcare institutions, researchers, and industry leaders to build a sustainable healthcare ecosystem'
  }
]
const OurMission = () => {
  return (
    <div className='custom-container'>
      <div className='flex flex-col justify-start  items-start '>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Our Mission
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px] pt-3'>
          Innovate, Empower, Impact
        </p>
      </div>

      <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-[20px] sm:gap-[40px] mt-[20px] lg:mt-[50px]'>
        <div className='flex-1 flex flex-col justify-start items-center gap-[16px]'>
          <p className='text-paragraph text-[16px] font-[400] leading-[20px]'>
            Our mission is to harness the power of cutting-edge technology and
            research to create scalable, intelligent, and user-friendly
            healthcare solutions that:
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
          <p className='text-paragraph text-[16px] font-[400] leading-[20px]'>
            With a patient-first approach and a commitment to continuous
            innovation, we aim to shape the future of healthcare, making it
            smarter, faster, and more inclusive.
          </p>
        </div>
        <Image
          src={missionImage}
          alt='CMED Vision'
          className='w-full h-full flex-1 rounded-[8px]'
        />
      </div>
    </div>
  )
}
export default OurMission
