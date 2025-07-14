'use client'
import { CheckCircle } from 'lucide-react'

const Step3 = ({ onClose }) => (
  <div className='text-center px-4 py-6'>
    <div className='mb-4'>
      <div className='mx-auto w-20 h-20 rounded-full bg-[#E9FBFF] flex items-center justify-center'>
        <CheckCircle className='text-[#00C2FF]' size={40} strokeWidth={2.5} />
      </div>
    </div>

    <h3 className='text-[#00C2FF] font-bold text-xl mb-2'>
      Meeting Scheduled!
    </h3>
    <p className='text-gray-600 text-sm mb-6 max-w-md mx-auto'>
      Your meeting have been scheduled with our communication team. We will
      contact you shortly!
    </p>

    <button
      onClick={onClose}
      className='bg-[#FAFAFA] text-black text-sm font-semibold px-8 py-[10px] rounded-[2px]  uppercase'
    >
      Okay
    </button>
  </div>
)

export default Step3
