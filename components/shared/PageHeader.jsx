'use client'

import { usePathname } from 'next/navigation'
import TagsFilter from './TagsFilter'

const PageHeader = ({ title, subtitle, tags }) => {
  const path = usePathname()
  const formattedPath = path.slice(1).charAt(0).toUpperCase() + path.slice(2)

  return (
    <div className='pt-12 px-12 xl:px-36 bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <div className='flex flex-col justify-start items-start gap-4 w-3/5 pb-[64px]'>
        <h1 className='text-titleSubtitle text-[48px] font-[700] leading-[64px]'>
          {title}
        </h1>
        <p className='text-paragraph text-[20px] font-[400] leading-[32px]'>
          {subtitle}
        </p>
      </div>
      <div className='w-full h-[56px] flex justify-between gap-4 border-t border-b border-t-[#F1F3F4] border-b-[#F1F3F4]'>
        <p className='w-1/5 py-[16px] leading-[24px] text-[16px] font-[500] flex justify-start items-center gap-[16px]'>
          <span className='text-paragraph'>Home</span>
          <span className='text-[#F05232]'>/</span>
          <span className='text-primary'>{formattedPath}</span>
        </p>

        {tags?.length > 0 && <TagsFilter tags={tags} />}
      </div>
    </div>
  )
}

export default PageHeader
