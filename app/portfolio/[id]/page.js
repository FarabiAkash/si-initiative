'use client'
import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import PortfolioDetails from "@/components/Portfolio/PortfolioDetails"
import ReadyToTransform from "@/components/shared/ReadyToTransform"

const page = () => {
    const [selectedTag, setSelectedTag] = useState('All')
    const { id } = useParams()

    return (
        <div> 
            {/* Breadcrumb */}
            <div className='w-full h-[56px] flex justify-between gap-4 border-t border-b border-t-[#ffffff33] border-b-[#ffffff33]'>
            <p className='lg:w-1/5 py-[16px] leading-[24px] text-[16px] font-[500] flex justify-start items-center gap-[16px]'>
              <Link href='/'>
                <span className='text-primary hover:underline'>Home</span>
              </Link>
              <span className='text-[#F05232]'>/</span>
              <span className='whitespace-nowrap'>Portfolio</span>
              <span className='text-[#F05232]'>/</span>
              <span className='whitespace-nowrap'>SmartHealth Connect</span>
            </p>
            </div>
            <PortfolioDetails />
            <ReadyToTransform />
        </div>
    )
}
export default page