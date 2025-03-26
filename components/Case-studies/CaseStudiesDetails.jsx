import correctArrow from '../../public/assets/services/correctArrow.svg'
import diamondShape from '../../public/assets/diamondShape.svg'
import Image from 'next/image'
const CaseStudiesDetails = ({ caseStudy }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Image
        src={caseStudy.img}
        alt={caseStudy.title}
        className='rounded-lg mb-6 w-[100vw] h-max-[650px]'
      />
      <div className='px-6'>
        <h1 className='text-[44px] font-[700] leading-[64px] mb-3'>
          {caseStudy.title}
        </h1>
        <p className='text-paragraph text-[20px] font-[400] leading-[32px] mb-6'>
          {caseStudy.description}
        </p>

        <div className='flex flex-col justify-start items-start'>
          <h2 className='text-[32px] font-[700] leading-[40px] text-titleSubtitle mb-4'>
            Challenges
          </h2>
          <div className='mb-6 space-y-2 w-full'>
            {caseStudy.challenges.map((challenge, index) => (
              <div key={index} className='flex justify-start items-start gap-4'>
                <div className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F3F4] rounded-full aspect-square'>
                  <Image
                    src={diamondShape}
                    alt='diamond shape'
                    className='w-[16px] h-[16px]'
                  />
                </div>
                <div className='flex flex-col justify-start items-start gap-2'>
                  <h2 className='text-titleSubtitle text-[20px] font-[600] leading-[20px]'>
                    {challenge.title}
                  </h2>
                  <span className='text-paragraph text-[20px] font-[400] leading-[32px]'>
                    {challenge.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-start items-start'>
          <h2 className='text-[32px] font-[700] leading-[40px] text-titleSubtitle mb-4'>
            Our Solution
          </h2>
          <div className='mb-6 space-y-2 w-full'>
            {caseStudy.solutions.map((solution, index) => (
              <div key={index} className='flex justify-start items-start gap-4'>
                <div className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F3F4] rounded-full aspect-square'>
                  <Image
                    src={correctArrow}
                    alt='diamond shape'
                    className='w-[16px] h-[16px]'
                  />
                </div>
                <div className='flex flex-col justify-start items-start gap-2'>
                  <h2 className='text-titleSubtitle text-[20px] font-[600] leading-[20px]'>
                    {solution.title}
                  </h2>
                  <span className='text-paragraph text-[20px] font-[400] leading-[32px]'>
                    {solution.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='text-[32px] font-[700] leading-[40px] text-titleSubtitle mb-4'>
            Key Metrics & Impact
          </h2>
          <div className='mb-6 space-y-2 w-full'>
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className='flex justify-start items-start gap-4'>
                <div className='w-[32px] h-[32px] flex justify-center items-center bg-[#F1F3F4] rounded-full aspect-square'>
                  <Image
                    src={correctArrow}
                    alt='diamond shape'
                    className='w-[16px] h-[16px]'
                  />
                </div>
                <div className='flex flex-col justify-start items-start gap-2'>
                  <h2 className='text-titleSubtitle text-[20px] font-[600] leading-[20px]'>
                    {metric.title}
                  </h2>
                  <span className='text-paragraph text-[20px] font-[400] leading-[32px]'>
                    {metric.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='text-[32px] font-[700] leading-[40px] text-titleSubtitle mb-4'>
            Client Testimonial
          </h2>
          <div className='mb-6 space-y-2 w-full'>
            <span className='text-paragraph text-[20px] font-[400] leading-[32px]'>
              "{caseStudy.clientTestimonial.description}"
            </span>
            <br />
            <span className='text-paragraph text-[20px] font-[400] leading-[32px]'>
              — {caseStudy.clientTestimonial.clientName}
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start'>
          <h2 className='text-[32px] font-[700] leading-[40px] text-titleSubtitle mb-4'>
            Conclusion & Next Steps
          </h2>
          <div className='mb-6 space-y-2 w-full'>
            <span className='text-paragraph text-[20px] font-[400] leading-[32px]'>
              {caseStudy.conclusion}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CaseStudiesDetails
