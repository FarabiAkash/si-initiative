'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { databases } from '@/lib/appwrite'

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.NEXT_PUBLIC_APPWRITE_CASE_STUDIES_COLLECTION_ID
        )
        // show only first 2
        setCaseStudies(res.documents.slice(0, 2))
      } catch (err) {
        console.error('Failed to fetch case studies:', err)
        setError('Failed to load case studies')
      } finally {
        setLoading(false)
      }
    }

    fetchCaseStudies()
  }, [])

  if (loading) {
    return (
      <div className='flex justify-center items-center py-20'>
        <p className='text-gray-500 text-lg'>Loading case studies...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center items-center py-20'>
        <p className='text-red-500 text-lg'>{error}</p>
      </div>
    )
  }

  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <div className='custom-container flex flex-col justify-center items-center gap-8 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        {/* Heading */}
        <div>
          <h1 className='text-titleSubtitle text-center text-[32px] font-[700] leading-[40px]'>
            Case Studies
          </h1>
          <p className='text-paragraph text-[18px] font-[400] leading-[24px] w-[75vw] xl:w-[38vw] 2xl:w-[30vw] text-center pt-3'>
            Explore how our innovative solutions have transformed the industries,
            improved efficiency, and driven meaningful change
          </p>
        </div>

        {/* Case Study Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className='group rounded-[5px] border border-[#19BCE533] bg-white transition-all duration-300 
              hover:border-primary hover:shadow-lg cursor-pointer'
            >
              {/* Image Section */}
              <div className='relative h-[288px] rounded-t-[4px] overflow-hidden p-[4px]'>
                <div className='relative w-full h-full rounded-t-[4px] overflow-hidden'>
                  <Image
                    src={study.imageUrl || '/assets/home/caseStudiesImg.png'} // fallback
                    alt={study.title}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>

              {/* Tags */}
              {study.tags && (
                <div className='flex flex-wrap gap-2 px-5 pt-5'>
                  {study.tags.map((tag, idx) => (
                    <p
                      key={idx}
                      className='text-[#19BCE5] text-base font-semibold leading-[20px]'
                    >
                      • {tag}
                    </p>
                  ))}
                </div>
              )}

              {/* Text Content */}
              <div className='p-5'>
                <h2 className='text-titleSubtitle text-[18px] font-[700] leading-[22px] group-hover:text-primary'>
                  {study.title}
                </h2>
                <p className='text-paragraph text-[16px] font-[400] leading-[24px] mt-2'>
                  {study.description}
                </p>
                <button
                  className='text-[#19BCE5] text-sm leading-[16px] font-semibold flex justify-center items-center gap-2 mt-2 uppercase'
                  onClick={() => router.push(`/case-studies/${study.$id}`)}
                >
                  View case study <MoveRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push('/case-studies')}
          className='text-[14px] rounded-[28px] bg-[#19BCE50D] text-[#19BCE5] font-[600] leading-[24px] tracking-[1.4px] px-[40px] py-[16px] uppercase border border-[#19BCE533] mt-6'
        >
          See all case studies
        </button>
      </div>
    </div>
  )
}

export default CaseStudies
