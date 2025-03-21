'use client'
import { usePathname } from 'next/navigation'

const PageHeader = ({ title, subtitle }) => {
  const path = usePathname()
  const formattedPath = path.slice(1).charAt(0).toUpperCase() + path.slice(2)
  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF] pt-12 px-12 xl:px-36 flex flex-col justify-start items-start gap-4'>
      <h1 className='text-titleSubtitle text-[48px] font-[700] leading-[64px] w-3/4 '>
        {title}
      </h1>
      <p className='text-paragraph text-[20px] font-[400] leading-[32px]  w-2/4'>
        {subtitle}
      </p>
      <div className=' pt-[48px] w-full'>
        <p className='border-t border-b border-t-[#F1F3F4] border-b-[#F1F3F4] w-full py-[16px] leading-[24px] text-[16px] font-[500] flex justify-start items-center gap-[16px]'>
          <span className='text-paragraph'>Home</span>{' '}
          <span className='text-[#F05232]'>/</span>{' '}
          <span className='text-primary'>{formattedPath}</span>
        </p>
      </div>
    </div>
  )
}
export default PageHeader
