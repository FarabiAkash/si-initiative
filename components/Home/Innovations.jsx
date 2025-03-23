'use client'
import { useState } from 'react'
import Image from 'next/image'
import img1 from '../../public/assets/home/caseStudiesImg.png'
import img2 from '../../public/assets/home/Blogs/blog1.png'
import img3 from '../../public/assets/home/Blogs/blog2.png'
import img4 from '../../public/assets/home/Blogs/blog3.png'

const data = [
  {
    title: 'Autism Barta',
    heading: 'Autism Barta: Empowering Communication, Enabling Growth',
    img: img1,
    description: [
      'Autism Barta is an AI-powered application designed to assist autistic children and individuals in enhancing their communication skills and daily interactions. By leveraging advanced speech, text, and visual recognition technologies, the app provides personalized support, helping users express themselves more effectively and build social connections.',
      'With interactive learning modules, adaptive communication tools, and AI-driven insights, Autism Barta fosters independence and development, making life easier for both individuals with autism and their caregivers. Our goal is to create an inclusive digital environment where every voice is heard and understood.'
    ]
  },
  {
    title: 'Virtual Eye Doc',
    heading: 'Virtual Eye Doc: AI-driven Vision Care',
    img: img2,
    description: [
      'With interactive learning modules, adaptive communication tools, and AI-driven insights, Autism Barta fosters independence and development, making life easier for both individuals with autism and their caregivers. Our goal is to create an inclusive digital environment where every voice is heard and understood.',
      'Autism Barta is an AI-powered application designed to assist autistic children and individuals in enhancing their communication skills and daily interactions. By leveraging advanced speech, text, and visual recognition technologies, the app provides personalized support, helping users express themselves more effectively and build social connections.'
    ]
  },
  {
    title: 'Tele-dentistry',
    heading: 'Tele-dentistry: The Future of Dental Care',
    img: img3,
    description: [
      'Autism Barta is an AI-powered application designed to assist autistic children and individuals in enhancing their communication skills and daily interactions. By leveraging advanced speech, text, and visual recognition technologies, the app provides personalized support, helping users express themselves more effectively and build social connections.',
      'With interactive learning modules, adaptive communication tools, and AI-driven insights, Autism Barta fosters independence and development, making life easier for both individuals with autism and their caregivers. Our goal is to create an inclusive digital environment where every voice is heard and understood.'
    ]
  },
  {
    title: 'Market Brain',
    heading: 'Market Brain: Data-driven Business Insights',
    img: img4,
    description: [
      'With interactive learning modules, adaptive communication tools, and AI-driven insights, Autism Barta fosters independence and development, making life easier for both individuals with autism and their caregivers. Our goal is to create an inclusive digital environment where every voice is heard and understood.',
      'Autism Barta is an AI-powered application designed to assist autistic children and individuals in enhancing their communication skills and daily interactions. By leveraging advanced speech, text, and visual recognition technologies, the app provides personalized support, helping users express themselves more effectively and build social connections.'
    ]
  }
]

const Innovations = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className='custom-container flex flex-col md:flex-row gap-8'>
      {/* Left Section - Tabs */}
      <div className='flex flex-col gap-2 w-full h-auto md:w-1/3'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start items-center gap-2 rounded-[8px] py-[10px] px-[16px] border border-[#F1F3F4] bg-white cursor-pointer ${
              selectedTab === index
                ? 'shadow-md text-titleSubtitle font-[600]'
                : 'text-paragraph font-[400] '
            }`}
            onClick={() => setSelectedTab(index)}
          >
            <div
              className={` w-[32px] h-[32px] rounded-full ${
                selectedTab === index ? 'bg-titleSubtitle' : 'bg-[#F1F3F4]'
              }`}
            />
            <span className='text-[16px]'>{item.title}</span>
          </div>
        ))}
      </div>

      {/* Right Section - Content Display */}
      <div className='w-full md:w-[50vw] h-auto flex flex-col gap-4'>
        <Image
          src={data[selectedTab].img}
          alt={data[selectedTab].title}
          className='rounded-xl w-full h-auto'
        />
        <h2 className='text-[24px] font-[600] text-titleSubtitle leading-[32px]'>
          {data[selectedTab].heading}
        </h2>
        {/* Render multiple paragraphs */}
        {data[selectedTab].description.map((para, index) => (
          <p
            key={index}
            className='text-[#484E4F] text-base font-[400] leading-[24px] text-justify'
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Innovations
