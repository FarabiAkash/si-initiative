'use client'
import Image from 'next/image'
import NewHeaderBg from '../../public/assets/home/headerBg.jpg'
import professionalsIcon from '../../public/assets/home/headers/user-group.png'
import experienceIcon from '../../public/assets/home/headers/calendar-02.png'
import projectsIcon from '../../public/assets/home/headers/command-line.png'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ScheduleCallModal from './ScheduleCallModal'

const cards = [
  { icon: professionalsIcon, count: 100, text: 'AI & IT Experts' },
  { icon: experienceIcon, count: 5, text: 'Years of Experience' },
  { icon: projectsIcon, count: 100, text: 'Projects Completed' }
]

const SingleCard = ({ item }) => {
  return (
    <div className='w-[290px] h-[160px] bg-white rounded-[8px] flex flex-col justify-center items-center gap-1'>
      <Image src={item.icon} alt={item.text} />
      <h3 className='text-[#0B3641] text-[20px] leading-[32px] font-semibold'>
        {item.count}+
      </h3>
      <p className='text-[#677A7E] font-normal text-[16px] leading-[24px]'>
        {item.text}
      </p>
    </div>
  )
}

const NewHeader = () => {
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div
      className='flex flex-wrap items-center bg-cover bg-center bg-no-repeat relative '
      style={{ backgroundImage: `url(${NewHeaderBg.src})` }}
    >
      <div className='xl:flex flex flex-wrap lg:flex-nowrap items-center justify-center xl:justify-between  w-full  2xl-custom:w-[1580px] 2xl-custom:mx-auto px-4 sm:px-12 xl:px-36 pt-20 md:pt-40 sm:pb-32'>
        {/* left */}
        <div className='flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 max-w-lg pt-10 xl:pt-0 pb-10 xl:pb-0'>
          <h2 className='text-white text-[38px] font-extrabold text-center lg:text-start'>
            Simplifying Tech,
            <br /> Amplifying Business
          </h2>
          <p className='text-white font-poppins text-[20px] font-[400] leading-[32px] text-center lg:text-start'>
            Empowering your business with innovative, tailored tech solutions to
            drive growth, efficiency, and success
          </p>
          <ScheduleCallModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />

          {/* Buttons */}
          <div className='flex flex-wrap xl:flex-nowrap justify-center items-center gap-4'>
            <button
              onClick={() => setModalOpen(true)}
              className='rounded-[28px] bg-[#F05232] text-white font-semibold shadow-[#f05232] px-[40px] py-[12px] uppercase'
            >
              schedule a call
            </button>
            <button
              onClick={() => router.push('/team')}
              className='rounded-[28px] text-white bg-[#FFFFFF26] font-semibold border-[1px] border-[#FFFFFF40] px-[40px] py-[12px] uppercase'
            >
              meet our team
            </button>
          </div>
        </div>

        {/* right */}
        <div className='flex flex-wrap justify-center items-center gap-6 mb-10 sm:mb-0'>
          <div className='flex flex-col gap-6'>
            <SingleCard item={cards[0]} />
            <SingleCard item={cards[1]} />
          </div>
          <SingleCard item={cards[2]} />
        </div>
      </div>
    </div>
  )
}

export default NewHeader
