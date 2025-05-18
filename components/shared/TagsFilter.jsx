'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const TagsFilter = ({ tags, selectedTag, setSelectedTag }) => {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 5 // How many tags to show at once

  const handleNext = () => {
    if (startIndex + visibleCount < tags.length) {
      setStartIndex(startIndex + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
  }

  return (
    <div className='flex items-center justify-end gap-4 py-4 w-4/5 overflow-hidden'>
      {/* Scrollable Tag Container */}
      <div className='relative overflow-hidden w-full'>
        <div
          className='flex gap-3 transition-transform duration-300 ease-in-out'
          style={{ transform: `translateX(-${startIndex * 130}px)` }}
        >
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`h-[40px] flex justify-center items-center border px-[16px] py-2 rounded-[4px] flex-shrink-0 cursor-pointer 
                ${
                  selectedTag === tag
                    ? 'border-primary text-primary font-semibold'
                    : 'border-[#F1F3F4] text-[#586A78]'
                }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next Buttons */}
      {tags.length > visibleCount && (
        <div className='flex justify-between gap-2'>
          <button
            onClick={handlePrev}
            className={`border px-2 py-2 rounded-full flex items-center justify-center ${
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
            className={`border px-2 py-2 rounded-full flex items-center justify-center ${
              startIndex + visibleCount < tags.length
                ? 'border-paragraph bg-white'
                : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={startIndex + visibleCount >= tags.length}
          >
            <ChevronRight className='w-[20px] h-[20px]' />
          </button>
        </div>
      )}
    </div>
  )
}

export default TagsFilter
