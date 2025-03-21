'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
const TagsFilter = ({ tags }) => {
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex + 5 < tags.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  console.log(startIndex + 4)
  console.log(tags.length)
  return (
    <>
      <div className='flex items-center justify-end gap-[16px] py-4 w-4/5 overflow-hidden'>
        <div className='relative overflow-hidden'>
          <div
            className='flex gap-3 transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${startIndex * 120}px)` }}
          >
            {tags.map((tag, index) => (
              <div
                key={index}
                className='h-[40px] flex justify-center items-center border border-[#F1F3F4] px-[16px] py-2 rounded-[4px] text-[#586A78] flex-shrink-0'
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        {tags.length > 5 && (
          <div className='flex justify-between gap-2'>
            <button
              onClick={handlePrev}
              className={`border px-2 py-2 rounded-full text-paragraph flex items-center ${
                startIndex > 0
                  ? 'border-paragraph bg-white'
                  : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={startIndex === 0}
            >
              <ChevronLeft className='w-[20px] h-[20px]' />
            </button>
            <button
              onClick={handleNext}
              className={`px-2 py-2 rounded-full flex justify-center items-center border border-gray-300 text-paragraph ${
                startIndex + 5 < tags.length
                  ? 'border-paragraph bg-white'
                  : 'opacity-50 cursor-not-allowed'
              }`}
              disabled={startIndex + 5 >= tags.length}
            >
              <ChevronRight className='w-[20px] h-[20px]' />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
export default TagsFilter
