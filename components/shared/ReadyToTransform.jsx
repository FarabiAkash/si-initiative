'use client'
import { useState } from 'react'
import ContactModal from './ContactModal'
import ScheduleCallModal from '../Home/ScheduleCallModal'

const ReadyToTransform = () => {
  const [showContact, setShowContact] = useState(false)
  return (
    <div className='flex flex-col justify-center text-center lg:px-44 pt-10 custom-container items-center gap-[16px]'>
      <h2 className='text-center text-[24px] lg:text-[32px] font-[700] leading-[32px] lg:leading-[40px] text-titleSubtitle'>
        Start Your Tech Journey
      </h2>
      <p className='text-center text-paragraph text-[20px] font-[400] leading-[32px]'>
        A simple call to align on your needs, priorities, and the smartest way to move ahead
      </p>
      <button
        className='sm:w-1/3 mx-auto mt-4 text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[16px] xl:px-[24px] py-[10px] sm:py-[16px] uppercase'
        onClick={() => setShowContact(true)}
      >
        Schedule a call
      </button>
      <div className='text-black'>
        <ScheduleCallModal
          isOpen={showContact}
          onClose={() => setShowContact(false)}
        />
      </div>
    </div>
  )
}
export default ReadyToTransform
