'use client'
import { useState } from "react"
import CaseStudies from "../../components/Case-studies/CaseStudies"
import RelatedCase from "../../components/Case-studies/RelatedCase"
import PageHeader from "../../components/shared/PageHeader"
import pageHeaderBg from '../../public/assets/case-studies/banner.jpg'

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
      <RelatedCase />
    </>
  )
}
export default page
