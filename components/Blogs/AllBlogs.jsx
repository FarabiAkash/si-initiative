'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { databases } from '@/lib/appwrite'

const AllBlogs = ({ selectedTag }) => {
  const router = useRouter()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  // ✅ Fetch blogs dynamically from Appwrite
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID
        )

        // Sort by latest
        const sortedBlogs = response.documents.sort(
          (a, b) => new Date(b.updateDate) - new Date(a.updateDate)
        )

        setBlogs(sortedBlogs)
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // ✅ Filter blogs by tag
  const filteredBlogs =
    selectedTag === 'All'
      ? blogs
      : blogs.filter(blog =>
          blog.tags?.some(
            tag => tag.toLowerCase() === selectedTag.toLowerCase()
          )
        )

  if (loading) {
    return (
      <div className='flex justify-center items-center h-40'>
        <p className='text-gray-500 text-lg'>Loading blogs...</p>
      </div>
    )
  }

  return (
    <div className='custom-container flex flex-col items-center gap-10 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredBlogs.map((blog, index) => (
          <div
            key={blog.$id || index}
            className='bg-white rounded-lg overflow-hidden transition duration-300 cursor-pointer'
            onClick={() => router.push(`/blogs/${blog.$id}`)}
          >
            <div className='relative w-full h-48'>
              <Image
                src={blog.imageUrl || '/assets/placeholder.png'}
                alt={blog.title}
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='py-4'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {blog.title}
              </h3>
              <p className='text-base text-[#6D787B] mt-2 truncate'>
                {blog.subDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredBlogs.length === 0 && (
        <p className='text-gray-500'>No blogs found for "{selectedTag}"</p>
      )}
    </div>
  )
}

export default AllBlogs
