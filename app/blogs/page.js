'use client'

import { useState } from 'react'
import PageHeader from "../../components/shared/PageHeader"
import AllBlogs from '../../components/Blogs/AllBlogs.jsx'
import MostReadArticle from "../../components/Blogs/MostReadArticle.jsx"
import pageHeaderBg from '../../public/assets/case-studies/banner.jpg'

const page = () => {
  const [selectedTag, setSelectedTag] = useState('All')

  return (
    <div>
      <PageHeader
        title='Stay Ahead With Expert Perspectives'
        subtitle='Providing valuable insights, emerging trends, and expert perspectives that are shaping and driving the next wave of innovation.'
        pageHeaderBg={pageHeaderBg}
        tags={[
          'All',
          'Digital Health',
          'AI in Healthcare',
          'IoT & Smart Tech',
          'R&D Innovations',
          'Data & Security',
          'Cybersecurity',
          'Blockchain',
          'Telemedicine',
          'Cloud Computing',
          'Big Data'
        ]}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <AllBlogs selectedTag={selectedTag} />
      <MostReadArticle />
    </div>
  )
}
export default page
