'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { databases } from '@/lib/appwrite'

const CaseStudies = ({ selectedTag = 'All' }) => {
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.NEXT_PUBLIC_APPWRITE_CASE_STUDIES_COLLECTION_ID
        )
        setCaseStudies(res.documents)
      } catch (err) {
        console.error('Failed to fetch case studies:', err)
        setError('Failed to load case studies')
      } finally {
        setLoading(false)
      }
    }

    fetchCaseStudies()
  }, [])

  if (loading)
    return <p className='text-center py-10'>Loading case studies...</p>
  if (error) return <p className='text-center text-red-500 py-10'>{error}</p>

  const filteredCases =
    selectedTag === 'All'
      ? caseStudies
      : caseStudies.filter(cs => cs.tags?.includes(selectedTag))

  return (
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col gap-[36px] justify-center items-center'>
        {filteredCases.map(item => (
          <div
            key={item.$id}
            className='flex flex-col lg:flex-row justify-center items-center gap-[32px] w-full border border-[#F1F3F4] p-[24px] rounded-[16px] bg-white shadow-sm hover:shadow-md transition-shadow duration-200'
          >
            {/* === IMAGE SECTION === */}
            <div className='relative w-full lg:w-[45%] h-[280px] sm:h-[380px]'>
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className='rounded-[12px] object-cover'
                />
              ) : (
                <div className='w-full h-full bg-gray-100 rounded-[12px] flex items-center justify-center text-gray-400'>
                  No Image
                </div>
              )}
            </div>

            {/* === CONTENT SECTION === */}
            <div className='flex flex-col justify-center lg:w-[55%] gap-[20px] text-left'>
              <h2 className='text-[22px] sm:text-[28px] font-[700] text-[#062126] leading-snug'>
                {item.title}
              </h2>

              <p className='text-[16px] sm:text-[18px] text-[#4A6367] leading-[26px]'>
                {item.subDescription || item.description}
              </p>

              <Link href={`/case-studies/${item.$id}`}>
                <button className='text-[14px] rounded-[28px] bg-[#19BCE6] text-white font-[600] leading-[24px] tracking-[1.4px] px-[24px] py-[12px] uppercase shadow-[0px_8px_16px_rgba(25,188,229,0.25)] hover:bg-[#1199c2] transition-all duration-200'>
                  Read Details
                </button>
              </Link>
            </div>
          </div>
        ))}

        {filteredCases.length === 0 && (
          <p className='text-gray-500 text-center'>
            No case studies found for "{selectedTag}"
          </p>
        )}
      </div>
    </div>
  )
}

export default CaseStudies
