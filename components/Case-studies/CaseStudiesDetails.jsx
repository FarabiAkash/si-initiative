'use client'
import Image from 'next/image'
import { useState } from 'react'
import ContactModal from '../shared/ContactModal'

const CaseStudiesDetails = ({ caseStudy }) => {
  const [showContact, setShowContact] = useState(false)
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      {/* Header Section */}
      <div className='relative w-full'>
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          width={1280}
          height={720}
          className='w-full rounded-lg max-h-[800px] object-cover'
        />
      </div>

      {/* Content Section */}
      <div className='px-6 lg:px-20 pt-8 max-w-6xl'>
        {/* Title + Subdescription */}
        <h1 className='text-[32px] lg:text-[44px] font-[700] leading-[40px] lg:leading-[64px] mb-3 text-titleSubtitle'>
          {caseStudy.title}
        </h1>
        <p className='text-paragraph text-[20px] font-[400] leading-[32px] mb-10'>
          {caseStudy.subDescription}
        </p>

        {/* Main Content (from Jodit Editor) */}
        <div
          className='prose max-w-none prose-lg prose-headings:text-titleSubtitle prose-p:text-paragraph prose-li:text-paragraph prose-strong:font-semibold'
          dangerouslySetInnerHTML={{ __html: caseStudy.content }}
        />

        {/* Call-to-Action */}
        <hr className='h-[1px] w-full bg-[#F1F3F4] my-8' />

        <div className='flex flex-col justify-center text-center lg:px-24 pt-6 pb-12'>
          <h2 className='text-[24px] lg:text-[32px] font-[700] leading-[32px] lg:leading-[40px] text-titleSubtitle mb-4'>
            Connect With Us to Bring Your Ideas to Life
          </h2>
          <p className='text-center text-paragraph text-[18px] font-[400] leading-[28px]'>
            Share your challenges or concepts, and our team will guide you toward a clear, actionable plan.
          </p>
          <button
            onClick={() => setShowContact(true)}
            className='sm:w-1/3 mx-auto mt-8 text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[24px] py-[12px] sm:py-[16px] uppercase'
          >
            Get In Touch
          </button>
        </div>
        <ContactModal
          isOpen={showContact}
          onClose={() => setShowContact(false)}
          source={'Get In Touch'}
        />
      </div>
    </div>
  )
}

export default CaseStudiesDetails
