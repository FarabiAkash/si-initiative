'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { databases } from '@/lib/appwrite'
import { useRouter } from 'next/navigation'

const MostReadArticle = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef(null)

  const router = useRouter()

  const handleScroll = direction => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // ✅ Fetch blogs from Appwrite
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID
        )
        setBlogs(res.documents.slice(0, 3))
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return (
      <div className='text-center py-10 text-gray-500'>Loading blogs...</div>
    )
  }

  return (
    <div className='bg-[#FDFDFD]'>
      <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        {/* Section Header */}
        <div className='text-start mb-8'>
          <h1 className='text-titleSubtitle text-[32px] font-bold leading-[40px]'>
            Most Read Articles
          </h1>
          <div className='flex justify-between items-center pt-3'>
            <p className='text-paragraph text-[18px] font-normal leading-[24px]'>
              Stay informed with the latest trends, breakthroughs, and expert
              insights shaping the future
            </p>
          </div>
        </div>

        {/* Scrollable Blogs Container */}
        <div className='relative flex items-center'>
          <div
            ref={scrollRef}
            className='flex gap-6 overflow-hidden'
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                className='min-w-[320px] max-w-[392px] space-y-2 rounded-[8px] overflow-hidden cursor-pointer'
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => router.push(`/blogs/${blog.$id}`)}
              >
                <div className='relative w-full h-52'>
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className='object-cover rounded-[8px]'
                  />
                </div>

                <h3 className='text-titleSubtitle text-[18px] font-[600] leading-[24px]'>
                  {blog.title}
                </h3>
                <p className='text-base text-[#6D787B] mt-2'>
                  {blog.subDescription?.length > 80
                    ? `${blog.subDescription.substring(0, 80)}...`
                    : blog.subDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MostReadArticle
