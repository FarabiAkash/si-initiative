'use client'

import { usePathname } from 'next/navigation'
import TagsFilter from './TagsFilter'
import Link from 'next/link'
import pageHeaderBg from '@/public/assets/pageHeader.jpg'

const PageHeader = ({ title, subtitle, tags, selectedTag, setSelectedTag }) => {
  const path = usePathname()
  const formattedPath = path.slice(1).charAt(0).toUpperCase() + path.slice(2)

  return (
    <div
      className='w-[100vw] flex flex-wrap items-center bg-cover bg-center bg-no-repeat relative '
      style={{ backgroundImage: `url(${pageHeaderBg.src})` }}
    >
      <div className=' pt-24 md:pt-40 px-12 xl:px-36  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='flex flex-col justify-start items-start gap-4 w-3/5 pb-8 sm:pb-[64px]'>
          <h1 className='text-white text-[24px] sm:text-[48px] font-[700] sm:leading-[64px]'>
            {title}
          </h1>
          <p className='text-white text-base sm:text-[20px] font-[400] sm:leading-[32px]'>
            {subtitle}
          </p>
        </div>
        <div className='w-full h-[56px] flex justify-between gap-4 border-t border-t-[#FFFFFF33]'>
          <p className='w-1/5 py-[16px] leading-[24px] text-[16px] font-[500] flex justify-start items-center gap-[16px]'>
            <Link href={'/'}>
              <span className='text-primary'>Home</span>
            </Link>
            <span className='text-[#F05232]'>/</span>
            <span className='text-white'>{formattedPath}</span>
          </p>

          {tags?.length > 0 && (
            <TagsFilter
              tags={tags}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
