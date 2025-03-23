import Image from 'next/image'
import caseImg from '../../public/assets/home/caseStudiesImg.png'
import caseImg2 from '../../public/assets/home/Blogs/blog1.png'
import caseImg3 from '../../public/assets/home/Blogs/blog2.png'
import caseImg4 from '../../public/assets/home/Blogs/blog3.png'

const caseStudies = [
  {
    image: caseImg,
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    description:
      'AI is revolutionizing healthcare, from early disease detection to personalized treatment plans. With machine learning and predictiv...'
  },
  {
    image: caseImg2,
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    description:
      'AI is revolutionizing healthcare, from early disease detection to personalized treatment plans. With machine learning and predictiv...'
  },
  {
    image: caseImg3,
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    description:
      'AI is revolutionizing healthcare, from early disease detection to personalized treatment plans. With machine learning and predictiv...'
  },
  {
    image: caseImg4,
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    description:
      'AI is revolutionizing healthcare, from early disease detection to personalized treatment plans. With machine learning and predictiv...'
  }
]

const CaseStudies = () => {
  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF] py-[35px] sm:py-[50px] px-4 sm:px-12 xl:px-36 flex flex-col justify-center items-center gap-8'>
      <div>
        <h1 className='text-titleSubtitle text-center text-[32px] font-[700] leading-[40px]'>
          Case Studies
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px] w-[75vw] xl:w-[38vw] 2xl:w-[30vw] text-center pt-3'>
          Explore how our innovative healthcare solutions have transformed
          patient care, improved efficiency, and driven meaningful change.
        </p>
      </div>

      {/* Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className='group rounded-[16px] border border-[#F1F3F4] bg-white shadow-md transition-all duration-300 
              hover:border-primary hover:shadow-lg cursor-pointer'
          >
            {/* Image Section */}
            <div className='relative h-[260px] rounded-[4px] overflow-hidden p-[24px]'>
              <div className='relative w-full h-full rounded-[4px] overflow-hidden'>
                <Image
                  src={study.image}
                  alt={study.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>

            {/* Text Content */}
            <div className='p-5'>
              <h2 className='text-titleSubtitle text-[18px] font-[700] leading-[22px] group-hover:text-primary'>
                {study.title}
              </h2>
              <p className='text-paragraph text-[16px] font-[400] leading-[24px] mt-2'>
                {study.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className='text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[40px] py-[16px] uppercase mt-6'>
        See all case studies
      </button>
    </div>
  )
}

export default CaseStudies
