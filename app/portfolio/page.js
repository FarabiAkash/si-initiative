'use client'
import PageHeader from "@/components/shared/PageHeader"
import pageHeaderBg from '../../public/assets/portfolio/banner.jpg'
import { useState } from "react"
import AllPortfolio from "@/components/Portfolio/AllPortfolio"
import ReadyToTransform from "@/components/shared/ReadyToTransform"

const page = () => {
    const [selectedTag, setSelectedTag] = useState('All')

    return (
        <>
            <PageHeader
                title={'Where Ideas Take Shape Through Our Innovation'}
                subtitle={'Explore a collection of projects where creativity, technology, and strategy converge to build unique brands and powerful digital solutions.'}
                pageHeaderBg={pageHeaderBg}
                tags={['All', 'HealthTech', 'FinTech', 'EdTech', 'E-Commerce', 'Energy & Resource',]}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
            />
            <AllPortfolio />
            <ReadyToTransform />
        </>
    )
}
export default page