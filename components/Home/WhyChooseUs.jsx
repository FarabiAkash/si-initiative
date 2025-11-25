const features = [
  {
    id: 1,
    title: 'Research-Driven Innovation',
    description:
      'Our dedicated R&D fuels innovation, transforming bold ideas into practical solutions that deliver lasting value.'
  },
  {
    id: 2,
    title: 'Decision Support Systems',
    description:
      'Our smart, data-driven platforms simplify complexity, empowering your business to make faster, better decisions.'
  },
  {
    id: 3,
    title: 'Proven Expertise',
    description:
      'Our team of 100+ AI & IT experts is committed to excellence, delivering proven success across all sectors.'
  },
  {
    id: 4,
    title: 'Client-Centric Approach',
    description:
      'Our client-centric approach means we own your challenges, guaranteeing a smooth and collaborative journey to success.'
  },
  {
    id: 5,
    title: 'Scalable & Reliable',
    description:
      'We build scalable and reliable solutions, designed to seamlessly grow with your business and deliver lasting value.'
  },
  {
    id: 6,
    title: 'Global Impact & Accessibility',
    description:
      'We build inclusive products designed to generate significant, positive outcomes for communities and industries everywhere'
  }
]

const WhyChooseUs = () => {
  return (
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Why Choose Us
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px]'>
          Empowering with Innovation, Expertise, and Trust
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 pb-0 sm:pb-6 mt-4'>
          {features.map((feature, index) => (
            <div
              className={`flex flex-col justify-center items-center gap-4 pt-4 pr-[24px] w-full sm:w-[400px] pb-[10px] sm:pb-[32px] lg:border-offWhite border-white 
                 ${index % 2 === 0 ? 'border-r-[1px]' : 'pl-0 sm:pl-4'}
                 ${index < 4 ? 'border-b-[1px]' : ''} `}
              key={index}
            >
              <p className='text-[#19BCE5] text-[18px] font-[600] leading-[20px]'>
                {feature.title}
              </p>
              <p className='text-[#677A7E] text-[16px] font-[400] leading-[24px] text-center'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
