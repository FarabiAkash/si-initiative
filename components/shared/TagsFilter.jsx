'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const TagsFilter = ({ tags = [], selectedTag, setSelectedTag }) => {
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = 5 // number of tags visible at a time

  const handleNext = () => {
    if (startIndex + visibleCount < tags.length) {
      setStartIndex(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1)
    }
  }

  return (
    <div className='flex items-center justify-between sm:justify-end gap-3 w-full overflow-hidden'>
      {/* Tag Container */}
      <div className='relative flex-1 overflow-hidden'>
        <div
          className='flex gap-3 transition-transform duration-300 ease-in-out'
          style={{ transform: `translateX(-${startIndex * 130}px)` }}
        >
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setSelectedTag(tag)}
              className={`h-[40px] flex justify-center items-center px-[20px] rounded-md flex-shrink-0 cursor-pointer text-sm sm:text-base transition-colors duration-200
                ${
                  selectedTag === tag
                    ? 'bg-primary text-white font-semibold'
                    : 'bg-[#FFFFFF1A] text-white hover:bg-[#FFFFFF2D]'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Prev/Next Buttons */}
      {tags.length > visibleCount && (
        <div className='flex items-center gap-2 flex-shrink-0'>
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className={`p-2 rounded-full border bg-white text-black transition ${
              startIndex === 0
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className='w-4 h-4' />
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + visibleCount >= tags.length}
            className={`p-2 rounded-full border bg-white text-black transition ${
              startIndex + visibleCount >= tags.length
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
          >
            <ChevronRight className='w-4 h-4' />
          </button>
        </div>
      )}
    </div>
  )
}

export default TagsFilter
