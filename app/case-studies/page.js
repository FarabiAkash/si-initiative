'use client'
import { useState } from "react"
import CaseStudies from "../../components/Case-studies/CaseStudies"
import PageHeader from "../../components/shared/PageHeader"
import pageHeaderBg from '../../public/assets/case-studies/banner.jpg'
import MostReadArticle from "@/components/Blogs/MostReadArticle"

const page = () => {
  const [selectedTag, setSelectedTag] = useState('All')

  return (
    <>
      <PageHeader
        title={'Our Innovations in Action Across the Industries'}
        subtitle={'Sharing real-world stories of how we transform bold, ambitious ideas into meaningful, impactful outcomes for everyone.'}
        pageHeaderBg={pageHeaderBg}
        tags={['All', 'AI Solution', 'Digital Healthcare', 'R&D Innovations', 'Global Impact',]}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <CaseStudies selectedTag={selectedTag} />
      <MostReadArticle />
    </>
  )
}
export default page
