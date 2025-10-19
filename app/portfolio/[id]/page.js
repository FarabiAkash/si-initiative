'use client'
import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import PortfolioDetails from "@/components/Portfolio/PortfolioDetails"

const page = () => {
    const [selectedTag, setSelectedTag] = useState('All')
    const { id } = useParams()

    return (
        <div> 
        {/* Breadcrumb */}
          <div className='flex items-center gap-2 sm:gap-4 text-sm sm:text-base font-medium  custom-container pt-28 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
            <Link href='/'>
              <span className='text-primary hover:underline'>Home</span>
            </Link>
            <span className='text-[#F05232]'>/</span>
            <span className='whitespace-nowrap'>Portfolio</span>
            <span className='text-[#F05232]'>/</span>
            <span className='whitespace-nowrap'>SmartHealth Connect</span>
          </div>

        <PortfolioDetails />
        </div>
    )
}
export default page