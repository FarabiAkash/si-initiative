'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { databases } from '@/lib/appwrite'
import BlogDetails from '../../../components/Blogs/BlogDetails'
import Link from 'next/link'

const Page = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await databases.getDocument(
                    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
                    process.env.NEXT_PUBLIC_APPWRITE_BLOGS_COLLECTION_ID,
                    id
                )
                setBlog(response)
            } catch (error) {
                console.error('Failed to fetch blog:', error)
            } finally {
                setLoading(false)
            }
        }

        if (id) fetchBlog()
    }, [id])

    if (loading)
        return (
            <p className="text-center text-lg font-semibold mt-10">Loading...</p>
        )

    if (!blog)
        return (
            <p className="text-center text-lg font-semibold mt-10 text-gray-500">
                Blog not found.
            </p>
        )

    return (
        <div className="custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto mt-10">
            {/* ✅ Breadcrumb */}
            <div className="w-full h-min-[56px] border-t border-b border-t-[#F1F3F4] border-b-[#F1F3F4] mb-10">
                <p className="py-[16px] leading-[24px] text-[16px] font-[500] flex flex-wrap justify-start items-center gap-[16px]">
                    <Link href="/">
                        <span className="text-[#586A78]">Home</span>
                    </Link>
                    <span className="text-[#F05232]">/</span>
                    <Link href="/blogs">
                        <span className="text-[#586A78]">Blogs</span>
                    </Link>
                    <span className="text-[#F05232]">/</span>
                    <span className="text-primary">{blog.title}</span>
                </p>
            </div>

            {/* ✅ Pass blog data to details component */}
            <BlogDetails blog={blog} />
        </div>
    )
}

export default Page
