'use client'

import { usePathname } from 'next/navigation'
import TagsFilter from './TagsFilter'
import Link from 'next/link'

const PageHeader = ({
  title,
  subtitle,
  tags,
  selectedTag,
  setSelectedTag,
  pageHeaderBg
}) => {
  const path = usePathname()
  let formattedPath = path.slice(1).charAt(0).toUpperCase() + path.slice(2)
  if (formattedPath === 'Team') formattedPath = 'Our Team'

  return (
    <div
      className='w-full flex flex-col bg-cover bg-center bg-no-repeat relative overflow-hidden'
      style={{
        backgroundImage: `url(${pageHeaderBg?.src || ''})`
      }}
    >
      <div className='pt-24 md:pt-40 px-6 sm:px-12 xl:px-36 w-full max-w-[1580px] mx-auto'>
        {/* Title + Subtitle */}
        <div className='flex flex-col justify-start items-start gap-4 w-full sm:w-3/5 pb-8 sm:pb-16'>
          <h1 className='text-white text-[24px] sm:text-[48px] font-bold leading-tight sm:leading-[64px]'>
            {title}
          </h1>
          <p className='text-white text-base sm:text-[20px] font-normal sm:leading-[32px] opacity-90'>
            {subtitle}
          </p>
        </div>

        {/* Breadcrumb + Tags */}
        <div className='w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-t border-t-[#FFFFFF33] py-3 sm:py-4'>
          {/* Breadcrumb */}
          <div className='flex items-center gap-2 sm:gap-4 text-sm sm:text-base font-medium text-white'>
            <Link href='/'>
              <span className='text-primary hover:underline'>Home</span>
            </Link>
            <span className='text-[#F05232]'>/</span>
            <span className='whitespace-nowrap'>{formattedPath}</span>
          </div>

          {/* Tags Filter */}
          {tags?.length > 0 && (
            <div className='w-full sm:w-auto overflow-hidden'>
              <TagsFilter
                tags={tags}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
