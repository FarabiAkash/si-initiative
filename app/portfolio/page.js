'use client'
import PageHeader from "@/components/shared/PageHeader"
import pageHeaderBg from '../../public/assets/portfolio/banner.jpg'
import { useEffect, useState } from "react"
import AllPortfolio from "@/components/Portfolio/AllPortfolio"
import ReadyToTransform from "@/components/shared/ReadyToTransform"
import { databases } from "@/lib/appwrite"

const Page = () => {
  const [selectedTag, setSelectedTag] = useState('All')
  const [categories, setCategories] = useState(['All'])

  useEffect(() => {
    async function loadCategories() {
      try {
        const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
        const COLLECTION_PORTFOLIO = process.env.NEXT_PUBLIC_APPWRITE_PORTFOLIO_COLLECTION_ID

        // Fetch portfolios
        const res = await databases.listDocuments(DB_ID, COLLECTION_PORTFOLIO)

        // Extract unique non-empty type values
        const uniqueTypes = [
          'All',
          ...new Set(
            res.documents
              .map(item => item.type?.trim())
              .filter(Boolean)
          )
        ]

        setCategories(uniqueTypes)
      } catch (err) {
        console.error("Failed to load categories:", err)
      }
    }

    loadCategories()
  }, [])

  return (
    <>
      <PageHeader
        title={'Where Ideas Take Shape Through Our Innovation'}
        subtitle={'Explore a collection of projects where creativity and technology converge to build amazing solutions.'}
        pageHeaderBg={pageHeaderBg}
        tags={categories}     // 👈 now shows type list dynamically
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      <AllPortfolio selectedTag={selectedTag} /> 
      <ReadyToTransform />
    </>
  )
}

export default Page
