'use client'
import { useState } from "react"
import CaseStudies from "../../components/Case-studies/CaseStudies"
import RelatedCase from "../../components/Case-studies/RelatedCase"
import PageHeader from "../../components/shared/PageHeader"

const page = () => {
  const [selectedTag, setSelectedTag] = useState('All')

  return (
    <>
      <PageHeader
        title={'Transforming Healthcare with Proven Solutions'}
        subtitle={'Explore how our cutting-edge technology has improved patient outcomes, optimized workflows, and driven healthcare innovation'}
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
