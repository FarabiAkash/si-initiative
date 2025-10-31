'use client'

import { useEffect, useState } from 'react'
import PageHeader from '../../components/shared/PageHeader'
import AllBlogs from '../../components/Blogs/AllBlogs.jsx'
import MostReadArticle from '../../components/Blogs/MostReadArticle.jsx'
import pageHeaderBg from '../../public/assets/case-studies/banner.jpg'
import { databases } from '@/lib/appwrite'

const Page = () => {
  const [selectedTag, setSelectedTag] = useState('All')
  const [tags, setTags] = useState(['All'])
  const [loadingTags, setLoadingTags] = useState(true)
  const [tagsError, setTagsError] = useState(null)

  useEffect(() => {
    const fetchTags = async () => {
      setLoadingTags(true)
      try {
        const res = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
          process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID // make sure this env var exists
        )

        // Extract all tags from blogs (assuming each blog doc has a `tags` array)
        const allTags = res.documents.flatMap((doc) => doc.tags || [])
        const uniqueTags = Array.from(new Set(allTags))

        // Prepend "All"
        setTags(['All', ...uniqueTags])
      } catch (err) {
        console.error('Failed to fetch blog tags:', err)
        setTagsError('Failed to load tags')
        setTags(['All']) // fallback
      } finally {
        setLoadingTags(false)
      }
    }

    fetchTags()
  }, [])

  return (
    <div>
      <PageHeader
        title='Stay Ahead With Expert Perspectives'
        subtitle='Providing valuable insights, emerging trends, and expert perspectives that are shaping and driving the next wave of innovation.'
        pageHeaderBg={pageHeaderBg}
        tags={tags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      {/* Optional error message */}
      {tagsError && (
        <p className='text-center text-red-500 text-sm mt-2'>{tagsError}</p>
      )}

      {/* Optional loading state */}
      {loadingTags ? (
        <div className='flex justify-center items-center py-10'>
          <p className='text-gray-500 text-lg'>Loading blogs...</p>
        </div>
      ) : (
        <>
          <AllBlogs selectedTag={selectedTag} />
          <MostReadArticle />
        </>
      )}
    </div>
  )
}

export default Page
