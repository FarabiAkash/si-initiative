'use client'
import PageHeader from "@/components/shared/PageHeader"
import pageHeaderBg from '../../public/assets/portfolio/banner.jpg'
import { useState } from "react"
import AllPortfolio from "@/components/Portfolio/AllPortfolio"

const page = () => {
    const [selectedTag, setSelectedTag] = useState('All')

    return (
        <>
            <PageHeader
                title={'Our Innovations in Action Across the Industries'}
                subtitle={'Sharing real-world stories of how we transform bold, ambitious ideas into meaningful, impactful outcomes for everyone.'}
                pageHeaderBg={pageHeaderBg}
                tags={['All', 'HealthTech', 'FinTech', 'EdTech', 'E-Commerce', 'Energy & Resource',]}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
            />
            <AllPortfolio />
        </>
    )
}
export default page