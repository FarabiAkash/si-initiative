"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { databases } from '@/lib/appwrite'
import Link from 'next/link'
import ContactModal from '@/components/shared/ContactModal'

export default function CaseStudyDetailsPage() {
    const { id } = useParams()
    const [caseStudy, setCaseStudy] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showContact, setShowContact] = useState(false)


    useEffect(() => {
        const fetchCaseStudy = async () => {
            try {
                const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID
                const collectionId = process.env.NEXT_PUBLIC_APPWRITE_CASE_STUDIES_COLLECTION_ID

                if (!dbId || !collectionId) {
                    console.error("Missing Appwrite environment variables")
                    return
                }

                const response = await databases.getDocument(dbId, collectionId, id)
                setCaseStudy(response)
            } catch (error) {
                console.error("Failed to fetch case study:", error)
            } finally {
                setLoading(false)
            }
        }

        if (id) fetchCaseStudy()
    }, [id])

    if (loading) return <div className="text-center py-20">Loading...</div>

    if (!caseStudy)
        return <div className="text-center py-20">Case study not found.</div>

    return (
        // 
        <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto mt-10'>
            <div className="flex flex-col justify-center items-center">
                <div className='w-full h-min-[56px]  border-t border-b border-t-[#F1F3F4] border-b-[#F1F3F4] mb-10'>
                    <p className='py-[16px] leading-[24px] text-[16px] font-[500] flex flex-wrap justify-start items-center gap-[16px]'>
                        <Link href={'/'}><span className='text-[#586A78]'>Home</span></Link>
                        <span className='text-[#F05232]'>/</span>
                        <Link href={'/case-studies'}><span className='text-[#586A78]'>Case Studies</span></Link>
                        <span className='text-[#F05232]'>/</span>
                        <span className='text-primary'>{caseStudy.title}</span>
                    </p>
                </div>
                <Image
                    src={caseStudy.imageUrl}
                    alt={caseStudy.title}
                    width={1200}
                    height={600}
                    className="w-full rounded-lg max-h-[800px] object-cover"
                />

                <div className="px-6 pt-6 lg:px-20 max-w-6xl">
                    <h1 className="text-[32px] lg:text-[44px] font-[700] mb-3">
                        {caseStudy.title}
                    </h1>
                    <p className="text-[20px] text-gray-600 mb-6">{caseStudy.subDescription}</p>

                    {/* Render content HTML */}
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: caseStudy.content }}
                    />
                </div>

                {/* Call-to-Action */}
                <hr className='h-[1px] w-full bg-[#F1F3F4] my-8' />

                <div className='flex flex-col justify-center text-center lg:px-24 pt-6 pb-12'>
                    <h2 className='text-[24px] lg:text-[32px] font-[700] leading-[32px] lg:leading-[40px] text-titleSubtitle mb-4'>
                        Want to implement AI diagnostics in your healthcare facility?
                    </h2>
                    <p className='text-center text-paragraph text-[18px] font-[400] leading-[28px]'>
                        Would you like any additional elements, such as a visual timeline or
                        success comparison charts?
                    </p>
                    <button 
                    onClick={() => setShowContact(true)}
                    className='sm:w-1/3 mx-auto mt-8 text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[24px] py-[12px] sm:py-[16px] uppercase'>
                        Get In Touch
                    </button>
                </div>
                <ContactModal
                    isOpen={showContact}
                    onClose={() => setShowContact(false)}
                />
            </div>
        </div>
    )
}