'use client'

import { useEffect, useState } from 'react'
import CaseStudies from '../../components/Case-studies/CaseStudies'
import PageHeader from '../../components/shared/PageHeader'
import pageHeaderBg from '../../public/assets/case-studies/banner.jpg'
import MostReadArticle from '@/components/Blogs/MostReadArticle'
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
          process.env.NEXT_PUBLIC_APPWRITE_CASE_STUDIES_COLLECTION_ID
        )

        // collect tags from documents (assumes each doc has `tags` as array)
        const allTags = res.documents.flatMap((doc) => doc.tags || [])
        const uniqueTags = Array.from(new Set(allTags))

        setTags(['All', ...uniqueTags])
      } catch (err) {
        console.error('Failed to fetch tags:', err)
        setTagsError('Failed to load tags')
        setTags(['All']) // fallback
      } finally {
        setLoadingTags(false)
      }
    }

    fetchTags()
  }, [])

  return (
    <>
      <PageHeader
        title={'Our Innovations in Action Across the Industries'}
        subtitle={
          'Sharing real-world stories of how we transform bold, ambitious ideas into meaningful, impactful outcomes for everyone.'
        }
        pageHeaderBg={pageHeaderBg}
        tags={tags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      {/* optional: show error or loading near header or handle inside PageHeader */}
      {tagsError && (
        <div className="text-sm text-red-500 text-center mt-2">{tagsError}</div>
      )}

      <CaseStudies selectedTag={selectedTag} />

      <MostReadArticle />
    </>
  )
}

export default Page
