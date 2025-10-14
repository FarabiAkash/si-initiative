import Image from 'next/image'
import ReadyToTransform from '../shared/ReadyToTransform'

const BlogDetails = ({ blog }) => {
  // ✅ Support both dynamic (Appwrite) and static (local) blogs
  const imageSrc = blog.imageUrl || blog.img
  const subDescription = blog.subDescription || blog.description
  const content = Array.isArray(blog.content)
    ? blog.content
    : typeof blog.content === 'string'
    ? [{ sectionTitle: '', points: [blog.content] }]
    : []

  const hasConclusion = blog.conclusion?.title || blog.conclusion?.description

  return (
    <>
      {/* ✅ Blog Image */}
      {imageSrc && (
        <div className='relative w-full h-[500px] md:h-[612px]'>
          <Image
            src={imageSrc}
            alt={blog.title}
            fill
            className='rounded-lg object-cover'
          />
        </div>
      )}

      {/* ✅ Blog Content */}
      <div className='sm:px-14 pt-6'>
        <h1 className='text-[32px] lg:text-[44px] font-[700] leading-[36px] lg:leading-[64px] my-3'>
          {blog.title}
        </h1>

        <p className='text-paragraph text-[20px] font-[400] leading-[32px] mb-6'>
          {subDescription}
        </p>

        {/* ✅ Handle structured sections or plain content */}
        <div
          className='prose prose-lg max-w-none'
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* ✅ Divider */}
        <hr className='h-[1px] w-100 bg-[#F1F3F4] mt-4 lg:mt-6' />

        {/* ✅ Call to Action Section */}
        <ReadyToTransform />
      </div>
    </>
  )
}

export default BlogDetails
