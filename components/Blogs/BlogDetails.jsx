import Image from 'next/image'

const BlogDetails = ({ blog }) => {
  return (
    <>
      <Image
        src={blog.img}
        alt={blog.title}
        className='w-full rounded-lg max-h-[800px]'
      />
      <div className='sm:px-14 pt-6'>
        <h1 className='text-[32px] lg:text-[44px] font-[700] leading-[36px] lg:leading-[64px] my-3'>
          {blog.title}
        </h1>
        <p className='text-paragraph text-[20px] font-[400] leading-[32px] mb-6'>
          {blog.description}
        </p>

        {blog.content.map((section, index) => (
          <div key={index} className='mt-[28px]'>
            <h2 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
              {section.sectionTitle}
            </h2>
            <ul className='list-disc list-inside mt-[16px]'>
              {section.points.map((point, i) => (
                <li
                  key={i}
                  className='text-paragraph text-[20px] font-[400] leading-[32px]'
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className='mt-[28px]'>
          <h2 className='text-titleSubtitle text-[32px] font-[700] leading-[40px] mb-[16px]'>
            Conclusion: {blog.conclusion.title}
          </h2>
          <span className='text-paragraph text-[20px] font-[400] leading-[32px] '>
            {blog.conclusion.description}
          </span>
        </div>

        <hr className='h-[1px] w-100 bg-[#F1F3F4] mt-4 lg:mt-6' />
        <div className='flex flex-col justify-center text-center lg:px-44 pt-10'>
          <h2 className='text-center text-[24px] lg:text-[32px] font-[700] leading-[32px] lg:leading-[40px] text-titleSubtitle mb-4'>
            Want to implement AI diagnostics in your healthcare facility?
          </h2>
          <p className='text-center text-paragraph text-[20px] font-[400] leading-[32px]'>
            Would you like any additional elements, such as a visual timeline or
            success comparison charts?
          </p>
          <button className='sm:w-1/3 mx-auto mt-10 text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[16px] xl:px-[24px] py-[10px] sm:py-[16px] uppercase'>
            Get In Touch
          </button>
        </div>
      </div>
    </>
  )
}
export default BlogDetails
