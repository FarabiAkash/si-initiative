'use client'

import { useState } from 'react'
import ScheduleCallModal from '../Home/ScheduleCallModal'

const GetInTouch = () => {
  const [showContact, setShowContact] = useState(false)
  return (
    <div className='custom-container bg-primary flex flex-col items-center justify-center gap-[16px] text-white !py-[100px]'>
      <h2 className='text-[32px] font-[700] leading-[40px]'>
        Start Your Tech Journey
      </h2>
      <p className='text-[18px] font-[400] leading-[24px]'>
        A simple call to align on your needs, priorities, and the smartest way
        to move ahead
      </p>
      <button
        onClick={() => setShowContact(true)}
        className='mt-10 h-[56px] py-[16px] px-[40px] rounded-[28px] bg-[#F05232] text-white text-[14px] font-[600] tracking-[1.4px] uppercase'
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
export default GetInTouch
