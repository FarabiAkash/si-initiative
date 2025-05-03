'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import blog1 from '../../public/assets/home/Blogs/blog1.png'
import blog2 from '../../public/assets/home/Blogs/blog2.png'
import blog3 from '../../public/assets/home/Blogs/blog3.png'

const blogsData = [
  {
    img: blog1,
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    description:
      'AI is revolutionizing healthcare, from early disease detection to personalized treatment plans. With machine learning and predictive analytics, medical professionals can make faster, more accurate decisions.'
  },
  {
    img: blog2,
    title: 'Digital Prescription Systems: The End of Paper-Based Errors',
    description:
      'Traditional prescriptions often lead to misinterpretation and errors, but digital systems ensure accuracy and efficiency. With automated workflows and secure data storage, digital prescriptions enhance both patient safety and doctor convenience.'
  },
  {
    img: blog3,
    title: 'How IoT is Enhancing Remote Patient Monitoring',
    description:
      'IoT-powered healthcare devices are bridging the gap between doctors and patients by providing real-time health data. Wearable technology and smart sensors are enabling early detection of medical conditions, improving patient outcomes.'
  },
  {
    img: blog2,
    title: 'Digital Prescription Systems: The End of Paper-Based Errors',
    description:
      'Traditional prescriptions often lead to misinterpretation and errors, but digital systems ensure accuracy and efficiency. With automated workflows and secure data storage, digital prescriptions enhance both patient safety and doctor convenience.'
  }
]

const Blogs = () => {
  const scrollRef = useRef(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleScroll = direction => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleMouseDown = e => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    document.body.style.userSelect = 'none'
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
  }

  const handleMouseMove = e => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchStart = e => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setScrollLeft(scrollRef.current.scrollLeft)
    document.body.style.userSelect = 'none'
  }

  const handleTouchMove = e => {
    if (!isDragging) return
    const x = e.touches[0].clientX
    const walk = (x - startX) * 1
    scrollRef.current.scrollLeft = scrollLeft - walk
    e.preventDefault() // Prevent vertical scrolling
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
  }

  return (
    <div className='  bg-[#FDFDFD]'>
      <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        {/* Section Header */}
        <div className='text-start mb-8'>
          <h1 className='text-titleSubtitle text-[32px] font-bold leading-[40px]'>
            Digital Healthcare Blog: Insights & Innovations
          </h1>
          <div className='flex justify-between items-center pt-3'>
            <p className='text-paragraph text-[18px] font-normal leading-[24px]'>
              Stay informed with the latest trends, breakthroughs, and expert
              insights shaping the future of healthcare.
            </p>
            <div className='flex justify-center items-center gap-2'>
              <button
                className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F3F4] p-1 rounded-[4px]'
                onClick={() => handleScroll('left')}
              >
                <ChevronLeft size={20} className='text-[#586A78]' />
              </button>
              <button
                className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F3F4] p-1 rounded-[4px]'
                onClick={() => handleScroll('right')}
              >
                <ChevronRight size={20} className='text-[#586A78]' />
              </button>
            </div>
          </div>
        </div>

        {/* Blog List with Navigation */}
        <div className='relative flex items-center'>
          {/* Scrollable Blogs Container */}
          <div
            ref={scrollRef}
            className='flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing hide-scrollbar'
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {blogsData.map((blog, index) => (
              <div
                key={index}
                className='min-w-[320px] max-w-[392px] space-y-2 rounded-[8px] overflow-hidden'
                style={{ scrollSnapAlign: 'start' }}
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  width={350}
                  height={260}
                  className='w-full h-52 object-cover rounded-[8px]'
                />

                <h3 className='text-titleSubtitle  text-[18px] font-[600] leading-[24px]'>
                  {blog.title}
                </h3>
                <p className='text-base text-[#6D787B] mt-2'>
                  {blog.description.length > 80
                    ? `${blog.description.substring(0, 80)}...`
                    : blog.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
